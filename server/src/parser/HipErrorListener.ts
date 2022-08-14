import { Recognizer, RecognitionException, Lexer } from 'antlr4ts';
import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver/node';


export class HipErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol>  {
	// 将获取到的错误存储下来
	diagnostics: Diagnostic[];

	constructor(diagnostics: Diagnostic[]) {
		this.diagnostics = diagnostics;
	}


	syntaxError?: <T extends TSymbol>(
		recognizer: Recognizer<T, any>,
		offendingSymbol: T | undefined,
		line: number,
		charPositionInLine: number,
		msg: string,
		e: RecognitionException | undefined) => void
		= (recognizer, offendingSymbol, line, charPositionInLine, msg, e) => {
			console.log('e?.context?.text: ', e?.context?.text);
			const len = e?.context?.text?.length || 1;
			const diagnostic: Diagnostic = {
				severity: DiagnosticSeverity.Error,
				range: { start: { line: line - 1, character: charPositionInLine }, end: { line: line - 1, character: charPositionInLine + len } },
				message: msg
			};
			this.diagnostics.push(diagnostic);
		};

}
