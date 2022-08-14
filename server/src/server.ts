/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,

	TextDocumentSyncKind,
	InitializeResult,

	// DocumentSemanticTokensProvider,
	ColorInformation
} from 'vscode-languageserver/node';

// import { DOcumentSemanticTokensProvider } from;
import {
	TextDocument} from 'vscode-languageserver-textdocument';

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
			// completionProvider: {
			// 	resolveProvider: true
			// },
			// hoverProvider: true, // 启用悬停功能
			// documentFormattingProvider: true, // 启用代码格式化特性
			// 启用函数签名功能
			// signatureHelpProvider: {
			// 	triggerCharacters: ['('],
			// },
			colorProvider: true
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
	
	// Send the computed diagnostics to VSCode.
	// 将错误处理结果发送给VS Code
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	// 监测vscode中的文件变动
	connection.console.log('We received an file change event');
});

connection.onDocumentColor(documentColorParams => {
	const result : ColorInformation[] = [];

	const identify = documentColorParams.textDocument.uri;
	const document = documents.get(identify);
	const text = document?.getText();
	// console.log("onDOcumentColor: ", text);
	const color : ColorInformation = {
		range: { start:{line:1, character:1}, end: {line:2, character:3} },
		color: {
			red:255,
			blue: 0,
			green: 0,
			alpha: 125
		}
	};

	result.push(color);
	return result;
});

// Make the text document manager listen on the connection
// for open, change and close text document events
// 将文档集合对象关联到连接对象
documents.listen(connection);

// Listen on the connection
// 开始监听连接对象
connection.listen();
