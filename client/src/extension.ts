/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import * as path from 'path';
import { workspace, ExtensionContext, languages, SemanticTokens, ProviderResult, TextDocument, DocumentSemanticTokensProvider, SemanticTokensLegend, SemanticTokensBuilder } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';
import { Lex } from './parser/Lex';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	console.log('client activate!');


	const tokenTypes = ['namespace', 'keyword','class', 'enum', 'interface',
			'struct', 'typeParameter', 'type', 'parameter', 'variable',
			'property', 'enumMember', 'decorator', 'event', 'function',
			'method', 'comment', 'string', 'keyword',
			'number', 'regexp', 'function', 'namespace', 'macro', 'class', 'enum', 'interface',
			'struct', 'typeParameter', 'type', 'parameter', 'variable',
			'property', 'enumMember', 'decorator', 'event'
		];
	const legend = new SemanticTokensLegend(tokenTypes);

	const provider: DocumentSemanticTokensProvider = {
		provideDocumentSemanticTokens(
			document: TextDocument
		): ProviderResult<SemanticTokens> {
			// 黨打開hip文件或者修改hip文件時觸發
			const stream = CharStreams.fromString(document.getText() );
			const lexer: Lex = new Lex(stream);
			const tokens = new CommonTokenStream(lexer);
			
			const builder = new SemanticTokensBuilder(legend);
			const n = tokens.getNumberOfOnChannelTokens();
			for(let i=0; i<n; i++) {
				const token : Token = tokens.get(i);
				builder.push(token.line-1, token.charPositionInLine, token.text.length, token.type);
			}

			return builder.build();
		}
	};

	const selector = { language: 'hip', scheme: 'file' }; // register for all hip documents from the local file system

	languages.registerDocumentSemanticTokensProvider(selector, provider, legend);





	
	// The server is implemented in node 服务器由node实现
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	// The debug options for the server 服务器的调试信息
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	// --inspect=6009: 服务器运行在node的inspector模式下以便vscode调试服务器
	const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	// 如果插件运行在调试模式下就会使用debug server options，否则使用options。
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};

	// Options to control the language client
	// 控制客户端的选项
	const clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		// 将普通文本文件登记到服务器。
		documentSelector: [{ scheme: 'file', language: 'plaintext' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			// 当工作区中的文件变动时，通知服务器。
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	// Create the language client and start the client.
	// 创建并启动语言客户端。
	client = new LanguageClient(
		'languageServerExample',
		'Language Server Example',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	// 启动客户端，同时也启动了服务器。
	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}



