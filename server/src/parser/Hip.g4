grammar Hip;
import Lex;
// compilationUnit: (IntegerLiteral | FloatLiteral | BoolLiteral)+ EOF;
compilationUnit: ( funcDef)* EOF;
funcDef: funcHeader funcBody funcTail;

funcHeader: (
		Identify KW_Zhe KW_Comma KW_Fn KW_Ye KW_Period /* xxx者, 術也。 */
		| KW_JYSM Identify KW_Zhe KW_Comma /* (今)有術(名)xxx者, */
	) (KW_ThisFn KW_Comma)? /*是術也, */ params retType KW_FnBegin
		KW_Colon /* 是術曰: */;
funcBody: stmt*;
funcTail: KW_FnEnd1 Identify KW_FnEnd2 KW_Period /* 是謂 ... 之術是也。 */
		;
params:
	KW_NoParam split
	| KW_Yi3 paramNames vararg? KW_AsParam split (paramTypes | KW_ALL type KW_Ye ) KW_Period;
paramNames: Identify ( (KW_Comma | '、') Identify)*;
paramTypes:
	KW_Fu Identify KW_Comma type KW_Ye (
		KW_Comma Identify KW_Comma KW_Yi4? type KW_Ye
	)*;
vararg: KW_Varg;
retType:
	(KW_ReturnVoid
	| KW_Return type
	| KW_Yi3? type KW_Return2) KW_Period;


type:
	KW_Int
	| KW_Float
	// | (type KC_ZHI1 KC_JIA3 | KC_JIA3 type )
	| KW_String;

stmt:
	emptyStmt
	| exprStmt
	| ifStmt
	| whileStmt
	| forStmt
	| returnStmt
	| defineStmt
	| assignStmt;

emptyStmt: KW_SemiColon;
exprStmt: expr KW_SemiColon;
ifStmt: 'todo';
whileStmt: 'todo';
forStmt: 'todo';
returnStmt: 'todo';
defineStmt: 'todo';
assignStmt: 'todo';

expr: literal;
literal:
	StringLiteral
	| CharacterLiteral
	| IntegerLiteral
	| FloatLiteral
	| BoolLiteral;
split: KW_Comma | KW_Period;
// 化而為鳥 强制類型轉換