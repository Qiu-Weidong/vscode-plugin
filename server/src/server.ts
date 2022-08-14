/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	HoverParams,
	Hover,
	DocumentFormattingParams,
	SignatureHelpParams,
	SignatureHelp,
	DocumentHighlight,
	DocumentHighlightParams,
	Position
} from 'vscode-languageserver/node';

import {
	TextDocument, TextEdit
} from 'vscode-languageserver-textdocument';

import { CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { HipLexer } from './parser/HipLexer';
import { HipParser } from './parser/HipParser';
import { HipErrorListener } from './parser/HipErrorListener';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
// 创建一个服务器连接。使用Node的IPC传输方式。也包含所有的预览、建议等lsp特性。
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
// 创建一个简单文本文档管理器。
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		// 需要添加功能的時候，修改這裏。
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			// 支持代码自动补全。
			completionProvider: {
				resolveProvider: true
			},
			hoverProvider: true, // 启用悬停功能
			documentFormattingProvider: true, // 启用代码格式化特性
			// 启用函数签名功能
			signatureHelpProvider: {
				triggerCharacters: ['('],
			},
			// documentHighlightProvider: true
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});







// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
// 文档的文本内容发生了改变。
// 这个事件在文档第一次打开或者内容变动时才会触发。
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	// In this simple example we get the settings for every validate run.
	// 在这个简单的示例中，每次校验运行时我们都获取一次配置
	const settings = await getDocumentSettings(textDocument.uri);

	// textDocument = file:///c%3A/Users/56838/Documents/llvm/tpantlr2-code/test/hello.hip (文件的絕對路徑)
	// The validator creates diagnostics for all uppercase words length 2 and more
	// 校验器如果检测到连续超过2个以上的大写字母则会报错
	const text = textDocument.getText(); // getText()获取的是文档的全部内容

	const inputStream = CharStreams.fromString(text);
	const lexer = new HipLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new HipParser(tokenStream);

	lexer.removeErrorListeners();
	parser.removeErrorListeners();
	
	const diagnostics: Diagnostic[] = [];
	
	const listener = new HipErrorListener<number>(diagnostics);
	lexer.addErrorListener(listener);
	const parserListener = new HipErrorListener<Token>(diagnostics);
	parser.addErrorListener(parserListener);
	const tree = parser.compilationUnit();
	
	// Send the computed diagnostics to VSCode.
	// 将错误处理结果发送给VS Code
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	// 监测vscode中的文件变动
	connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
// 这个处理函数提供了初始补全项列表
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		return [
			{
				label: 'TypeScript',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'JavaScript',
				kind: CompletionItemKind.Text,
				data: 2
			}
		];
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			item.detail = 'TypeScript details';
			item.documentation = 'TypeScript documentation';
		} else if (item.data === 2) {
			item.detail = 'JavaScript details';
			item.documentation = 'JavaScript documentation';
		}
		return item;
	}
);

connection.onHover(
	(params: HoverParams): Promise<Hover> => {
		return Promise.resolve({
			contents: ["你好."],
		});
	}
);

// connection.onDocumentHighlight(documentHighlightParams => {
// 	console.log('onDocumentHighlight');
// 	console.log(documentHighlightParams);

// 	const ret : DocumentHighlight[] = [];
// 	ret.push({
// 		range:{
// 			start: { line: 5, character: 0 },
// 			end : { line: 6, character : 0 }
// 		},
// 		kind: 2
// 	});
//     return ret;
// });

connection.onDocumentFormatting(
	(params: DocumentFormattingParams): Promise<TextEdit[]> => {
		const { textDocument } = params;
		const doc = documents.get(textDocument.uri)!;
		const text = doc.getText();
		const pattern = /\b[A-Z]{3,}\b/g;
		let match;
		const res = [];
		// 查找连续大写字符串
		while ((match = pattern.exec(text))) {
			res.push({
				range: {
					start: doc.positionAt(match.index),
					end: doc.positionAt(match.index + match[0].length),
				},
				// 将大写字符串替换为 驼峰风格
				newText: match[0].replace(/(?<=[A-Z])[A-Z]+/, (r) => r.toLowerCase()),
			});
		}

		return Promise.resolve(res);
	}
);

connection.onSignatureHelp(
	(params: SignatureHelpParams): Promise<SignatureHelp> => {
		return Promise.resolve({
			signatures: [
				{
					label: "Signature Demo",
					documentation: "帮助文档",
					parameters: [
						{
							label: "@p1 first param",
							documentation: "参数说明"
						}
					]
				}
			],
			activeSignature: 0,
			activeParameter: 0
		});
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
// 将文档集合对象关联到连接对象
documents.listen(connection);

// Listen on the connection
// 开始监听连接对象
connection.listen();
