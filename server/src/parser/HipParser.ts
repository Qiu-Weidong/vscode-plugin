// Generated from ./server/src/parser/Hip.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { HipListener } from "./HipListener";
import { HipVisitor } from "./HipVisitor";


export class HipParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly BoolLiteral = 3;
	public static readonly IntegerLiteral = 4;
	public static readonly FloatLiteral = 5;
	public static readonly StringLiteral = 6;
	public static readonly CharacterLiteral = 7;
	public static readonly Identify = 8;
	public static readonly SPACES = 9;
	public static readonly LINE_COMMENT = 10;
	public static readonly BLOCK_COMMENT = 11;
	public static readonly KW_Zhe = 12;
	public static readonly KW_Ye = 13;
	public static readonly KW_Yi3 = 14;
	public static readonly KW_Fu = 15;
	public static readonly KW_Yi4 = 16;
	public static readonly KW_ALL = 17;
	public static readonly KW_Varg = 18;
	public static readonly KW_AsParam = 19;
	public static readonly KW_NoParam = 20;
	public static readonly KW_ReturnVoid = 21;
	public static readonly KW_FnBegin = 22;
	public static readonly KW_FnEnd1 = 23;
	public static readonly KW_FnEnd2 = 24;
	public static readonly KW_JYSM = 25;
	public static readonly KW_Return = 26;
	public static readonly KW_Return2 = 27;
	public static readonly KW_ThisFn = 28;
	public static readonly KW_Int = 29;
	public static readonly KW_Float = 30;
	public static readonly KW_String = 31;
	public static readonly KW_Fn = 32;
	public static readonly KW_Comma = 33;
	public static readonly KW_Colon = 34;
	public static readonly KW_SemiColon = 35;
	public static readonly KW_Period = 36;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_funcDef = 1;
	public static readonly RULE_funcHeader = 2;
	public static readonly RULE_funcBody = 3;
	public static readonly RULE_funcTail = 4;
	public static readonly RULE_params = 5;
	public static readonly RULE_paramNames = 6;
	public static readonly RULE_paramTypes = 7;
	public static readonly RULE_vararg = 8;
	public static readonly RULE_retType = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_stmt = 11;
	public static readonly RULE_emptyStmt = 12;
	public static readonly RULE_exprStmt = 13;
	public static readonly RULE_ifStmt = 14;
	public static readonly RULE_whileStmt = 15;
	public static readonly RULE_forStmt = 16;
	public static readonly RULE_returnStmt = 17;
	public static readonly RULE_defineStmt = 18;
	public static readonly RULE_assignStmt = 19;
	public static readonly RULE_expr = 20;
	public static readonly RULE_literal = 21;
	public static readonly RULE_split = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "funcDef", "funcHeader", "funcBody", "funcTail", "params", 
		"paramNames", "paramTypes", "vararg", "retType", "type", "stmt", "emptyStmt", 
		"exprStmt", "ifStmt", "whileStmt", "forStmt", "returnStmt", "defineStmt", 
		"assignStmt", "expr", "literal", "split",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\u3001'", "'todo'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "BoolLiteral", "IntegerLiteral", "FloatLiteral", 
		"StringLiteral", "CharacterLiteral", "Identify", "SPACES", "LINE_COMMENT", 
		"BLOCK_COMMENT", "KW_Zhe", "KW_Ye", "KW_Yi3", "KW_Fu", "KW_Yi4", "KW_ALL", 
		"KW_Varg", "KW_AsParam", "KW_NoParam", "KW_ReturnVoid", "KW_FnBegin", 
		"KW_FnEnd1", "KW_FnEnd2", "KW_JYSM", "KW_Return", "KW_Return2", "KW_ThisFn", 
		"KW_Int", "KW_Float", "KW_String", "KW_Fn", "KW_Comma", "KW_Colon", "KW_SemiColon", 
		"KW_Period",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HipParser._LITERAL_NAMES, HipParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HipParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Hip.g4"; }

	// @Override
	public get ruleNames(): string[] { return HipParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return HipParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(HipParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, HipParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HipParser.Identify || _la === HipParser.KW_JYSM) {
				{
				{
				this.state = 46;
				this.funcDef();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
			this.match(HipParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcDef(): FuncDefContext {
		let _localctx: FuncDefContext = new FuncDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, HipParser.RULE_funcDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.funcHeader();
			this.state = 55;
			this.funcBody();
			this.state = 56;
			this.funcTail();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcHeader(): FuncHeaderContext {
		let _localctx: FuncHeaderContext = new FuncHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, HipParser.RULE_funcHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HipParser.Identify:
				{
				this.state = 58;
				this.match(HipParser.Identify);
				this.state = 59;
				this.match(HipParser.KW_Zhe);
				this.state = 60;
				this.match(HipParser.KW_Comma);
				this.state = 61;
				this.match(HipParser.KW_Fn);
				this.state = 62;
				this.match(HipParser.KW_Ye);
				this.state = 63;
				this.match(HipParser.KW_Period);
				}
				break;
			case HipParser.KW_JYSM:
				{
				this.state = 64;
				this.match(HipParser.KW_JYSM);
				this.state = 65;
				this.match(HipParser.Identify);
				this.state = 66;
				this.match(HipParser.KW_Zhe);
				this.state = 67;
				this.match(HipParser.KW_Comma);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HipParser.KW_ThisFn) {
				{
				this.state = 70;
				this.match(HipParser.KW_ThisFn);
				this.state = 71;
				this.match(HipParser.KW_Comma);
				}
			}

			this.state = 74;
			this.params();
			this.state = 75;
			this.retType();
			this.state = 76;
			this.match(HipParser.KW_FnBegin);
			this.state = 77;
			this.match(HipParser.KW_Colon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcBody(): FuncBodyContext {
		let _localctx: FuncBodyContext = new FuncBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, HipParser.RULE_funcBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HipParser.T__1) | (1 << HipParser.BoolLiteral) | (1 << HipParser.IntegerLiteral) | (1 << HipParser.FloatLiteral) | (1 << HipParser.StringLiteral) | (1 << HipParser.CharacterLiteral))) !== 0) || _la === HipParser.KW_SemiColon) {
				{
				{
				this.state = 79;
				this.stmt();
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcTail(): FuncTailContext {
		let _localctx: FuncTailContext = new FuncTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HipParser.RULE_funcTail);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(HipParser.KW_FnEnd1);
			this.state = 86;
			this.match(HipParser.Identify);
			this.state = 87;
			this.match(HipParser.KW_FnEnd2);
			this.state = 88;
			this.match(HipParser.KW_Period);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public params(): ParamsContext {
		let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HipParser.RULE_params);
		let _la: number;
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HipParser.KW_NoParam:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this.match(HipParser.KW_NoParam);
				this.state = 91;
				this.split();
				}
				break;
			case HipParser.KW_Yi3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.match(HipParser.KW_Yi3);
				this.state = 93;
				this.paramNames();
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HipParser.KW_Varg) {
					{
					this.state = 94;
					this.vararg();
					}
				}

				this.state = 97;
				this.match(HipParser.KW_AsParam);
				this.state = 98;
				this.split();
				this.state = 104;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HipParser.KW_Fu:
					{
					this.state = 99;
					this.paramTypes();
					}
					break;
				case HipParser.KW_ALL:
					{
					this.state = 100;
					this.match(HipParser.KW_ALL);
					this.state = 101;
					this.type();
					this.state = 102;
					this.match(HipParser.KW_Ye);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 106;
				this.match(HipParser.KW_Period);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramNames(): ParamNamesContext {
		let _localctx: ParamNamesContext = new ParamNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HipParser.RULE_paramNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(HipParser.Identify);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HipParser.T__0 || _la === HipParser.KW_Comma) {
				{
				{
				this.state = 111;
				_la = this._input.LA(1);
				if (!(_la === HipParser.T__0 || _la === HipParser.KW_Comma)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 112;
				this.match(HipParser.Identify);
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramTypes(): ParamTypesContext {
		let _localctx: ParamTypesContext = new ParamTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HipParser.RULE_paramTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(HipParser.KW_Fu);
			this.state = 119;
			this.match(HipParser.Identify);
			this.state = 120;
			this.match(HipParser.KW_Comma);
			this.state = 121;
			this.type();
			this.state = 122;
			this.match(HipParser.KW_Ye);
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HipParser.KW_Comma) {
				{
				{
				this.state = 123;
				this.match(HipParser.KW_Comma);
				this.state = 124;
				this.match(HipParser.Identify);
				this.state = 125;
				this.match(HipParser.KW_Comma);
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HipParser.KW_Yi4) {
					{
					this.state = 126;
					this.match(HipParser.KW_Yi4);
					}
				}

				this.state = 129;
				this.type();
				this.state = 130;
				this.match(HipParser.KW_Ye);
				}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vararg(): VarargContext {
		let _localctx: VarargContext = new VarargContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HipParser.RULE_vararg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(HipParser.KW_Varg);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public retType(): RetTypeContext {
		let _localctx: RetTypeContext = new RetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HipParser.RULE_retType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HipParser.KW_ReturnVoid:
				{
				this.state = 139;
				this.match(HipParser.KW_ReturnVoid);
				}
				break;
			case HipParser.KW_Return:
				{
				this.state = 140;
				this.match(HipParser.KW_Return);
				this.state = 141;
				this.type();
				}
				break;
			case HipParser.KW_Yi3:
			case HipParser.KW_Int:
			case HipParser.KW_Float:
			case HipParser.KW_String:
				{
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HipParser.KW_Yi3) {
					{
					this.state = 142;
					this.match(HipParser.KW_Yi3);
					}
				}

				this.state = 145;
				this.type();
				this.state = 146;
				this.match(HipParser.KW_Return2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 150;
			this.match(HipParser.KW_Period);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, HipParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HipParser.KW_Int) | (1 << HipParser.KW_Float) | (1 << HipParser.KW_String))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, HipParser.RULE_stmt);
		try {
			this.state = 162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.emptyStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.exprStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 156;
				this.ifStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 157;
				this.whileStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 158;
				this.forStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 159;
				this.returnStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 160;
				this.defineStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 161;
				this.assignStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStmt(): EmptyStmtContext {
		let _localctx: EmptyStmtContext = new EmptyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, HipParser.RULE_emptyStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(HipParser.KW_SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprStmt(): ExprStmtContext {
		let _localctx: ExprStmtContext = new ExprStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, HipParser.RULE_exprStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.expr();
			this.state = 167;
			this.match(HipParser.KW_SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, HipParser.RULE_ifStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(HipParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStmt(): WhileStmtContext {
		let _localctx: WhileStmtContext = new WhileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, HipParser.RULE_whileStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(HipParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, HipParser.RULE_forStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.match(HipParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, HipParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(HipParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defineStmt(): DefineStmtContext {
		let _localctx: DefineStmtContext = new DefineStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, HipParser.RULE_defineStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(HipParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStmt(): AssignStmtContext {
		let _localctx: AssignStmtContext = new AssignStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, HipParser.RULE_assignStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(HipParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, HipParser.RULE_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, HipParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HipParser.BoolLiteral) | (1 << HipParser.IntegerLiteral) | (1 << HipParser.FloatLiteral) | (1 << HipParser.StringLiteral) | (1 << HipParser.CharacterLiteral))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public split(): SplitContext {
		let _localctx: SplitContext = new SplitContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, HipParser.RULE_split);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			_la = this._input.LA(1);
			if (!(_la === HipParser.KW_Comma || _la === HipParser.KW_Period)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\xBE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04G\n\x04\x03\x04\x03\x04" +
		"\x05\x04K\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x07\x05" +
		"S\n\x05\f\x05\x0E\x05V\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07b\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07k\n\x07\x03\x07\x03\x07\x05" +
		"\x07o\n\x07\x03\b\x03\b\x03\b\x07\bt\n\b\f\b\x0E\bw\v\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x82\n\t\x03\t\x03\t\x03\t" +
		"\x07\t\x87\n\t\f\t\x0E\t\x8A\v\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\x92\n\v\x03\v\x03\v\x03\v\x05\v\x97\n\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xA5\n\r\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x02\x02\x02\x19\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02\x02" +
		"\x06\x04\x02\x03\x03##\x03\x02\x1F!\x03\x02\x05\t\x04\x02##&&\x02\xBA" +
		"\x023\x03\x02\x02\x02\x048\x03\x02\x02\x02\x06F\x03\x02\x02\x02\bT\x03" +
		"\x02\x02\x02\nW\x03\x02\x02\x02\fn\x03\x02\x02\x02\x0Ep\x03\x02\x02\x02" +
		"\x10x\x03\x02\x02\x02\x12\x8B\x03\x02\x02\x02\x14\x96\x03\x02\x02\x02" +
		"\x16\x9A\x03\x02\x02\x02\x18\xA4\x03\x02\x02\x02\x1A\xA6\x03\x02\x02\x02" +
		"\x1C\xA8\x03\x02\x02\x02\x1E\xAB\x03\x02\x02\x02 \xAD\x03\x02\x02\x02" +
		"\"\xAF\x03\x02\x02\x02$\xB1\x03\x02\x02\x02&\xB3\x03\x02\x02\x02(\xB5" +
		"\x03\x02\x02\x02*\xB7\x03\x02\x02\x02,\xB9\x03\x02\x02\x02.\xBB\x03\x02" +
		"\x02\x0202\x05\x04\x03\x0210\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02" +
		"\x02\x0234\x03\x02\x02\x0246\x03\x02\x02\x0253\x03\x02\x02\x0267\x07\x02" +
		"\x02\x037\x03\x03\x02\x02\x0289\x05\x06\x04\x029:\x05\b\x05\x02:;\x05" +
		"\n\x06\x02;\x05\x03\x02\x02\x02<=\x07\n\x02\x02=>\x07\x0E\x02\x02>?\x07" +
		"#\x02\x02?@\x07\"\x02\x02@A\x07\x0F\x02\x02AG\x07&\x02\x02BC\x07\x1B\x02" +
		"\x02CD\x07\n\x02\x02DE\x07\x0E\x02\x02EG\x07#\x02\x02F<\x03\x02\x02\x02" +
		"FB\x03\x02\x02\x02GJ\x03\x02\x02\x02HI\x07\x1E\x02\x02IK\x07#\x02\x02" +
		"JH\x03\x02\x02\x02JK\x03\x02\x02\x02KL\x03\x02\x02\x02LM\x05\f\x07\x02" +
		"MN\x05\x14\v\x02NO\x07\x18\x02\x02OP\x07$\x02\x02P\x07\x03\x02\x02\x02" +
		"QS\x05\x18\r\x02RQ\x03\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02" +
		"TU\x03\x02\x02\x02U\t\x03\x02\x02\x02VT\x03\x02\x02\x02WX\x07\x19\x02" +
		"\x02XY\x07\n\x02\x02YZ\x07\x1A\x02\x02Z[\x07&\x02\x02[\v\x03\x02\x02\x02" +
		"\\]\x07\x16\x02\x02]o\x05.\x18\x02^_\x07\x10\x02\x02_a\x05\x0E\b\x02`" +
		"b\x05\x12\n\x02a`\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x03\x02\x02\x02" +
		"cd\x07\x15\x02\x02dj\x05.\x18\x02ek\x05\x10\t\x02fg\x07\x13\x02\x02gh" +
		"\x05\x16\f\x02hi\x07\x0F\x02\x02ik\x03\x02\x02\x02je\x03\x02\x02\x02j" +
		"f\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x07&\x02\x02mo\x03\x02\x02\x02n" +
		"\\\x03\x02\x02\x02n^\x03\x02\x02\x02o\r\x03\x02\x02\x02pu\x07\n\x02\x02" +
		"qr\t\x02\x02\x02rt\x07\n\x02\x02sq\x03\x02\x02\x02tw\x03\x02\x02\x02u" +
		"s\x03\x02\x02\x02uv\x03\x02\x02\x02v\x0F\x03\x02\x02\x02wu\x03\x02\x02" +
		"\x02xy\x07\x11\x02\x02yz\x07\n\x02\x02z{\x07#\x02\x02{|\x05\x16\f\x02" +
		"|\x88\x07\x0F\x02\x02}~\x07#\x02\x02~\x7F\x07\n\x02\x02\x7F\x81\x07#\x02" +
		"\x02\x80\x82\x07\x12\x02\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02\x02" +
		"\x02\x82\x83\x03\x02\x02\x02\x83\x84\x05\x16\f\x02\x84\x85\x07\x0F\x02" +
		"\x02\x85\x87\x03\x02\x02\x02\x86}\x03\x02\x02\x02\x87\x8A\x03\x02\x02" +
		"\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x11\x03\x02\x02" +
		"\x02\x8A\x88\x03\x02\x02\x02\x8B\x8C\x07\x14\x02\x02\x8C\x13\x03\x02\x02" +
		"\x02\x8D\x97\x07\x17\x02\x02\x8E\x8F\x07\x1C\x02\x02\x8F\x97\x05\x16\f" +
		"\x02\x90\x92\x07\x10\x02\x02\x91\x90\x03\x02\x02\x02\x91\x92\x03\x02\x02" +
		"\x02\x92\x93\x03\x02\x02\x02\x93\x94\x05\x16\f\x02\x94\x95\x07\x1D\x02" +
		"\x02\x95\x97\x03\x02\x02\x02\x96\x8D\x03\x02\x02\x02\x96\x8E\x03\x02\x02" +
		"\x02\x96\x91\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x07&\x02" +
		"\x02\x99\x15\x03\x02\x02\x02\x9A\x9B\t\x03\x02\x02\x9B\x17\x03\x02\x02" +
		"\x02\x9C\xA5\x05\x1A\x0E\x02\x9D\xA5\x05\x1C\x0F\x02\x9E\xA5\x05\x1E\x10" +
		"\x02\x9F\xA5\x05 \x11\x02\xA0\xA5\x05\"\x12\x02\xA1\xA5\x05$\x13\x02\xA2" +
		"\xA5\x05&\x14\x02\xA3\xA5\x05(\x15\x02\xA4\x9C\x03\x02\x02\x02\xA4\x9D" +
		"\x03\x02\x02\x02\xA4\x9E\x03\x02\x02\x02\xA4\x9F\x03\x02\x02\x02\xA4\xA0" +
		"\x03\x02\x02\x02\xA4\xA1\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA3" +
		"\x03\x02\x02\x02\xA5\x19\x03\x02\x02\x02\xA6\xA7\x07%\x02\x02\xA7\x1B" +
		"\x03\x02\x02\x02\xA8\xA9\x05*\x16\x02\xA9\xAA\x07%\x02\x02\xAA\x1D\x03" +
		"\x02\x02\x02\xAB\xAC\x07\x04\x02\x02\xAC\x1F\x03\x02\x02\x02\xAD\xAE\x07" +
		"\x04\x02\x02\xAE!\x03\x02\x02\x02\xAF\xB0\x07\x04\x02\x02\xB0#\x03\x02" +
		"\x02\x02\xB1\xB2\x07\x04\x02\x02\xB2%\x03\x02\x02\x02\xB3\xB4\x07\x04" +
		"\x02\x02\xB4\'\x03\x02\x02\x02\xB5\xB6\x07\x04\x02\x02\xB6)\x03\x02\x02" +
		"\x02\xB7\xB8\x05,\x17\x02\xB8+\x03\x02\x02\x02\xB9\xBA\t\x04\x02\x02\xBA" +
		"-\x03\x02\x02\x02\xBB\xBC\t\x05\x02\x02\xBC/\x03\x02\x02\x02\x0F3FJTa" +
		"jnu\x81\x88\x91\x96\xA4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HipParser.__ATN) {
			HipParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HipParser._serializedATN));
		}

		return HipParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(HipParser.EOF, 0); }
	public funcDef(): FuncDefContext[];
	public funcDef(i: number): FuncDefContext;
	public funcDef(i?: number): FuncDefContext | FuncDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncDefContext);
		} else {
			return this.getRuleContext(i, FuncDefContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncDefContext extends ParserRuleContext {
	public funcHeader(): FuncHeaderContext {
		return this.getRuleContext(0, FuncHeaderContext);
	}
	public funcBody(): FuncBodyContext {
		return this.getRuleContext(0, FuncBodyContext);
	}
	public funcTail(): FuncTailContext {
		return this.getRuleContext(0, FuncTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_funcDef; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterFuncDef) {
			listener.enterFuncDef(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitFuncDef) {
			listener.exitFuncDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitFuncDef) {
			return visitor.visitFuncDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncHeaderContext extends ParserRuleContext {
	public params(): ParamsContext {
		return this.getRuleContext(0, ParamsContext);
	}
	public retType(): RetTypeContext {
		return this.getRuleContext(0, RetTypeContext);
	}
	public KW_FnBegin(): TerminalNode { return this.getToken(HipParser.KW_FnBegin, 0); }
	public KW_Colon(): TerminalNode { return this.getToken(HipParser.KW_Colon, 0); }
	public Identify(): TerminalNode | undefined { return this.tryGetToken(HipParser.Identify, 0); }
	public KW_Zhe(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Zhe, 0); }
	public KW_Comma(): TerminalNode[];
	public KW_Comma(i: number): TerminalNode;
	public KW_Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HipParser.KW_Comma);
		} else {
			return this.getToken(HipParser.KW_Comma, i);
		}
	}
	public KW_Fn(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Fn, 0); }
	public KW_Ye(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Ye, 0); }
	public KW_Period(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Period, 0); }
	public KW_JYSM(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_JYSM, 0); }
	public KW_ThisFn(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_ThisFn, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_funcHeader; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterFuncHeader) {
			listener.enterFuncHeader(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitFuncHeader) {
			listener.exitFuncHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitFuncHeader) {
			return visitor.visitFuncHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncBodyContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_funcBody; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterFuncBody) {
			listener.enterFuncBody(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitFuncBody) {
			listener.exitFuncBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitFuncBody) {
			return visitor.visitFuncBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncTailContext extends ParserRuleContext {
	public KW_FnEnd1(): TerminalNode { return this.getToken(HipParser.KW_FnEnd1, 0); }
	public Identify(): TerminalNode { return this.getToken(HipParser.Identify, 0); }
	public KW_FnEnd2(): TerminalNode { return this.getToken(HipParser.KW_FnEnd2, 0); }
	public KW_Period(): TerminalNode { return this.getToken(HipParser.KW_Period, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_funcTail; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterFuncTail) {
			listener.enterFuncTail(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitFuncTail) {
			listener.exitFuncTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitFuncTail) {
			return visitor.visitFuncTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamsContext extends ParserRuleContext {
	public KW_NoParam(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_NoParam, 0); }
	public split(): SplitContext {
		return this.getRuleContext(0, SplitContext);
	}
	public KW_Yi3(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Yi3, 0); }
	public paramNames(): ParamNamesContext | undefined {
		return this.tryGetRuleContext(0, ParamNamesContext);
	}
	public KW_AsParam(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_AsParam, 0); }
	public KW_Period(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Period, 0); }
	public paramTypes(): ParamTypesContext | undefined {
		return this.tryGetRuleContext(0, ParamTypesContext);
	}
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_ALL, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public KW_Ye(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Ye, 0); }
	public vararg(): VarargContext | undefined {
		return this.tryGetRuleContext(0, VarargContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_params; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterParams) {
			listener.enterParams(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitParams) {
			listener.exitParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitParams) {
			return visitor.visitParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamNamesContext extends ParserRuleContext {
	public Identify(): TerminalNode[];
	public Identify(i: number): TerminalNode;
	public Identify(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HipParser.Identify);
		} else {
			return this.getToken(HipParser.Identify, i);
		}
	}
	public KW_Comma(): TerminalNode[];
	public KW_Comma(i: number): TerminalNode;
	public KW_Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HipParser.KW_Comma);
		} else {
			return this.getToken(HipParser.KW_Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_paramNames; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterParamNames) {
			listener.enterParamNames(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitParamNames) {
			listener.exitParamNames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitParamNames) {
			return visitor.visitParamNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamTypesContext extends ParserRuleContext {
	public KW_Fu(): TerminalNode { return this.getToken(HipParser.KW_Fu, 0); }
	public Identify(): TerminalNode[];
	public Identify(i: number): TerminalNode;
	public Identify(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HipParser.Identify);
		} else {
			return this.getToken(HipParser.Identify, i);
		}
	}
	public KW_Comma(): TerminalNode[];
	public KW_Comma(i: number): TerminalNode;
	public KW_Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HipParser.KW_Comma);
		} else {
			return this.getToken(HipParser.KW_Comma, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public KW_Ye(): TerminalNode[];
	public KW_Ye(i: number): TerminalNode;
	public KW_Ye(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HipParser.KW_Ye);
		} else {
			return this.getToken(HipParser.KW_Ye, i);
		}
	}
	public KW_Yi4(): TerminalNode[];
	public KW_Yi4(i: number): TerminalNode;
	public KW_Yi4(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HipParser.KW_Yi4);
		} else {
			return this.getToken(HipParser.KW_Yi4, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_paramTypes; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterParamTypes) {
			listener.enterParamTypes(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitParamTypes) {
			listener.exitParamTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitParamTypes) {
			return visitor.visitParamTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarargContext extends ParserRuleContext {
	public KW_Varg(): TerminalNode { return this.getToken(HipParser.KW_Varg, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_vararg; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterVararg) {
			listener.enterVararg(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitVararg) {
			listener.exitVararg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitVararg) {
			return visitor.visitVararg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RetTypeContext extends ParserRuleContext {
	public KW_Period(): TerminalNode { return this.getToken(HipParser.KW_Period, 0); }
	public KW_ReturnVoid(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_ReturnVoid, 0); }
	public KW_Return(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Return, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public KW_Return2(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Return2, 0); }
	public KW_Yi3(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Yi3, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_retType; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterRetType) {
			listener.enterRetType(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitRetType) {
			listener.exitRetType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitRetType) {
			return visitor.visitRetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public KW_Int(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Int, 0); }
	public KW_Float(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Float, 0); }
	public KW_String(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_String, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_type; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public emptyStmt(): EmptyStmtContext | undefined {
		return this.tryGetRuleContext(0, EmptyStmtContext);
	}
	public exprStmt(): ExprStmtContext | undefined {
		return this.tryGetRuleContext(0, ExprStmtContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public whileStmt(): WhileStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public defineStmt(): DefineStmtContext | undefined {
		return this.tryGetRuleContext(0, DefineStmtContext);
	}
	public assignStmt(): AssignStmtContext | undefined {
		return this.tryGetRuleContext(0, AssignStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_stmt; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStmtContext extends ParserRuleContext {
	public KW_SemiColon(): TerminalNode { return this.getToken(HipParser.KW_SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_emptyStmt; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterEmptyStmt) {
			listener.enterEmptyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitEmptyStmt) {
			listener.exitEmptyStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitEmptyStmt) {
			return visitor.visitEmptyStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprStmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public KW_SemiColon(): TerminalNode { return this.getToken(HipParser.KW_SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_exprStmt; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterExprStmt) {
			listener.enterExprStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitExprStmt) {
			listener.exitExprStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitExprStmt) {
			return visitor.visitExprStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_whileStmt; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterWhileStmt) {
			listener.enterWhileStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitWhileStmt) {
			listener.exitWhileStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefineStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_defineStmt; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterDefineStmt) {
			listener.enterDefineStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitDefineStmt) {
			listener.exitDefineStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitDefineStmt) {
			return visitor.visitDefineStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_assignStmt; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterAssignStmt) {
			listener.enterAssignStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitAssignStmt) {
			listener.exitAssignStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitAssignStmt) {
			return visitor.visitAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_expr; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(HipParser.StringLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(HipParser.CharacterLiteral, 0); }
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(HipParser.IntegerLiteral, 0); }
	public FloatLiteral(): TerminalNode | undefined { return this.tryGetToken(HipParser.FloatLiteral, 0); }
	public BoolLiteral(): TerminalNode | undefined { return this.tryGetToken(HipParser.BoolLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_literal; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SplitContext extends ParserRuleContext {
	public KW_Comma(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Comma, 0); }
	public KW_Period(): TerminalNode | undefined { return this.tryGetToken(HipParser.KW_Period, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HipParser.RULE_split; }
	// @Override
	public enterRule(listener: HipListener): void {
		if (listener.enterSplit) {
			listener.enterSplit(this);
		}
	}
	// @Override
	public exitRule(listener: HipListener): void {
		if (listener.exitSplit) {
			listener.exitSplit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HipVisitor<Result>): Result {
		if (visitor.visitSplit) {
			return visitor.visitSplit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


