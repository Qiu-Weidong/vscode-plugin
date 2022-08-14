// token不要依赖于token

lexer grammar Lex;

fragment BasicChineseCharacter: '\u{4e00}' ..'\u{9fa5}';
fragment BasicChineseCharacterSupplement:
	'\u{9fa6}' ..'\u{9fff}';
fragment ExtensionA: '\u{3400}' ..'\u{4DBF}';
fragment ExtensionB: '\u{20000}' ..'\u{2A6DF}';
fragment ExtensionC: '\u{2A700}' ..'\u{2B738}';
fragment ExtensionD: '\u{2B740}' ..'\u{2B81D}';
fragment ExtensionE: '\u{2B820}' ..'\u{2CEA1}';
fragment ExtensionF: '\u{2CEB0}' ..'\u{2EBE0}';
fragment ExtensionG: '\u{30000}' ..'\u{3134A}';
fragment CompatibleChineseCharacter: '\u{F900}' ..'\u{FAD9}';
fragment ZeroChineseCharacter: '\u{3007}';

fragment ChineseCharacter:
	BasicChineseCharacter
	| BasicChineseCharacterSupplement
	| ExtensionA
	| ExtensionB
	| ExtensionC
	| ExtensionD
	| ExtensionE
	| ExtensionF
	| ExtensionG
	| CompatibleChineseCharacter
	| ZeroChineseCharacter;



// 關鍵字符
fragment CharZhu: '注' | '澍' | '註';
fragment CharPi: '批' | '𢱧';
fragment CharShi: '醳' | '釋' | '释' | '釈';
fragment CharZan: '赞' | '贊' | '賛';
fragment CharJian: '㮍' | '䇳' | '揃' | '椾' | '牋' | '笺' | '箋'; 
fragment CharShu: '疎' | '𥿇' | '踈' | '䟽' | '𤴚' | '疏';
fragment CharYou: '有' | '𪠥';
fragment CharFinish: '㪤' | '毕' | '𧫤' | '縪' | '𠦒' | '畢' | '𤲃' | '𤲜';
fragment CharZhe: '者' | '者' | '者' ;
fragment CharFn: '術' | '术' | '𧗱';
fragment CharYe: '也' | '𠃟' | '𦫴' | '𦬀' | '𠔄';
fragment CharName: '詺' | '名';
fragment CharIs: '是' | '昰' | '𣊒' | '𣆞';
fragment CharCi: '此' | '𣥅';
fragment CharZhi: '之' | '𠔇' | '𡳿' | '㞢';
fragment CharWei: '𧬴' | '谓' | '謂';
fragment CharWu:
	'𤍍'
	| '無'
	| '无'
	| '𤀢'
	| '橆'
	| '亡'
	| '𠘩'
	| '𣑨'
	| '𡙻'
	| '𣚨'
	| '𣞤'
	| '𣟒'
	| '𣠮'
	| '𣞣'
	| '㷻';

fragment CharParam: '㕘' | '參' | '叅' | '曑' | '参' | '𠫭' | '𠫵' | '𠻝' | '參';
fragment CharYi: '以' | '𠙋' | '㠯' | '已';
fragment CharDo: '𦥮' | '𤓸' | '𢏽' | '𨤒' | '为' | '爲' | '為' | '𫞟';
fragment CharFu: '𧥱' | '夫';
fragment CharDeng: '䒭' | '䓁' | '𠚤' | '𡬝' | '𡬦' | '𢌭' | '等';
fragment CharReturn:
	'㱕'
	| '䢜'
	| '帰'
	| '归'
	| '皈'
	| '𡚖'
	| '𢅦'
	| '𢅨'
	| '𣦨'
	| '𤾤'
	| '𨓼'
	| '𨺔'
	| '𨺜'
	| '歸';
fragment CharNum: '数' | '𡢏' | '𢿘' | '𢿙' | '𣀭' | '𣯫' | '數' | '數';
fragment CharSolid: '实' | '実' | '宲' | '𡪲' | '𡾍' | '實';
fragment CharZheng: '整' | '愸' | '𠢦' | '𠢫' | '𢝗' | '𢿫' | '𣦔' | '𢿋';
fragment CharString: '𢍗' | '言' | '𢍬';
fragment CharJia: '叚' | '假' | '𠭊' | '𠖊';
fragment CharYuan: '援' | '𠋠' | '爰';
fragment CharYin: '引' | '㧈' | '𢎢' | '廴' | '𢏂' | '𢪉';
fragment CharYong: '𠂦' | '𠂵' | '𠛁' | '𡶤' | '𤰃' | '𤰆' | '用';
fragment CharArray: '列' | '迾' | '𨔭' | '𨔜' | '𠛱' | '𠜊' | '𠜺' | '列';
fragment CharTi: '体' | '躰' | '軆' | '骵' | '𨉦' | '𩪆' | '體';
fragment CharMatrix: '榘' | '矩';
fragment CharObj: '物' | '𣃦';
fragment CharSuo: '所' | '𠩄' | '𢨷' | '𢩇';
fragment CharAnd: '𠅃' | '𡗕' | '𢂯' | '亦';
fragment CharAll: '皆' | '𣅜'| '偕';
fragment CharJu: '具' | '俱' | '𥟭';


// 數字相關異體字
fragment Digit0:
	'零'
	| ZeroChineseCharacter
	| '霝'
	| '𠏡'
	| '𡈍'
	| '𤅫'
	| '𩃞'
	| '𩆖'
	| '𩆼'
	| '零';
fragment Digit1:
	'一'
	| '弌'
	| '壹'
	| '壱'
	| '夁'
	| '𡔹'
	| '𡔾'
	| '𡕄'
	| '𡕋'
	| '𡕌'
	| '𡕍'
	| '𡘵';
fragment Digit2:
	'二'
	| '貳'
	| '𢎐'
	| '弍'
	| '兩'
	| '两'
	| '兩'
	| '匁'
	| '両'
	| '㒳';
fragment Digit3: '三' | '叁' | '弎' | '𠬅';
fragment Digit4: '四' | '亖' | '肆' | '𠁤' | '𠃢' | '𦉭' | '龱';
fragment Digit5: '五' | '伍' | '㐅' | '𠄡';
fragment Digit6: '六' | '陸' | '陆' | '六' | '𠫪' | '陸';
fragment Digit7: '七' | '柒' | '㭍' | '𠀁';
fragment Digit8: '八' | '丷' | '捌';
fragment Digit9: '九' | '玖' | '𠔀' | '𢌬';
fragment Digit10: '十' | '拾' | '什' | '拾';
fragment Digit20: '廿' | '卄';
fragment Digit30: '卅' | '𠦃' | '𠦄';
fragment Digit40: '卌' | '𠦜' | '𠦌';
fragment Digit50: '圩' | '墟';
fragment Digit60: '圓' | '圎' | '圆';
fragment Digit70: '进' | '進' | '𨗃' | '𨙟';
fragment Digit80: '枯' | '𤖲' | '𣒞';
fragment Digit90: '枠' | '椊';
fragment Digit100: '百' | '佰' | '𦣻';
fragment Digit200: '皕' /* 音 bì */;
fragment Digit1000: '千' | '仟' | '韆';
fragment DigitWan:
	'萬'
	| '万'
	| '𠂍'
	| '𥝅'
	| '𥝄'
	| '𤍚'
	| '𤈬'
	| '𢁭'
	| '𠃡'
	| '㸘';
fragment DigitYi: '億' | '亿' | '𠐥' | '𢡃';
fragment DigitZhao: '兆' | '𡉵' | '𠧞' | '𡊥';
fragment DigitJing: '京' | '亰' | '𡬱' | '𢂋' | '𦣿';
fragment DigitGai: '垓' | '陔' | '姟' | '畡';
fragment DigitZi: '秭' | '𥞑';
fragment DigitRang: '穣' | '穰';
fragment DigitJion: CharYou | Digit0 | '又';
fragment DigitFeng: '分';
fragment DigitLi: '釐' | '厘' | '𡪂' | '𨤭' | '𨤲' | '𨤺';
fragment DigitHao: '毫' | '𡨉';
fragment DigitSi: '絲' | '丝' | '糸';
fragment DigitHu: '忽' | '𡯖' | '𢗘';
fragment DigitWei:
	'微'
	| '𧗬'
	| '𢼸'
	| '𢕧'
	| '𢕄'
	| '𠌝'
	| '㣲'
	| '𣁋';
fragment DigitChen:
	'塵'
	| '尘'
	| '𡐪'
	| '𡑁'
	| '𡒲'
	| '𡔚'
	| '𦧄'
	| '𪋻';
fragment DigitAi: '埃';
fragment DigitMiao: '渺' | '𠋝' | '淼' | '眇' | '𢡾' | '𥋐' | '𦕈';
fragment DigitMo: '漠' | '𥕓';
fragment Number1:
	Digit0
	| Digit1
	| Digit2
	| Digit3
	| Digit4
	| Digit5
	| Digit6
	| Digit7
	| Digit8
	| Digit9;
// 兩位數
fragment Number2:
	(
		Digit10
		| Digit20
		| Digit30
		| Digit40
		| Digit50
		| Digit60
		| Digit70
		| Digit80
		| Digit90
		| Number1 Digit10
	) (DigitJion? Number1)?;
fragment Number3: (Digit100 | Digit200 | Number1 Digit100) (
		DigitJion? (Number2 | Number1)
	)?;
fragment Number4:
	Number1 Digit1000 (DigitJion? (Number3 | Number1 | Number2))?;
fragment BaseNumber: Number1 | Number2 | Number3 | Number4;
fragment Number5: BaseNumber DigitWan (DigitJion? BaseNumber)?;
fragment Number6:
	BaseNumber DigitYi (DigitJion? (Number5 | BaseNumber))?;
fragment Number7:
	BaseNumber DigitZhao (
		DigitJion? (Number6 | Number5 | BaseNumber)
	)?;
fragment Number8:
	BaseNumber DigitJing (
		DigitJion? (Number7 | Number6 | Number5 | BaseNumber)
	)?;
fragment Number9:
	BaseNumber DigitGai (
		DigitJion? (
			Number8
			| Number7
			| Number6
			| Number5
			| BaseNumber
		)
	)?;
fragment Number10:
	BaseNumber DigitZi (
		DigitJion? (
			Number9
			| Number8
			| Number7
			| Number6
			| Number5
			| BaseNumber
		)
	)?;
fragment Number11:
	BaseNumber DigitRang (
		DigitJion? (
			Number10
			| Number9
			| Number8
			| Number7
			| Number6
			| Number5
			| BaseNumber
		)
	)?;
fragment Integer:
	BaseNumber
	| Number5
	| Number6
	| Number7
	| Number8
	| Number9
	| Number10
	| Number11;
fragment Float:
	Integer CharYou (DigitJion? Number1 DigitFeng)? (
		DigitJion? Number1 DigitLi
	)? (DigitJion? Number1 DigitHao)? (
		DigitJion? Number1 DigitSi
	)? (DigitJion? Number1 DigitHu)? (
		DigitJion? Number1 DigitWei
	)? (DigitJion? Number1 DigitChen)? (
		DigitJion? Number1 DigitAi
	)? (DigitJion? Number1 DigitMiao)? (
		DigitJion? Number1 DigitMo
	)?;

fragment BoolTrue:
	'陽'
	| '阳'
	| '昜'
	| '𣆄'
	| '氜'
	| '阦'
	| '𥌖'
	| '𨹈'
	| '𨼗'
	| '𨼘'
	| '𨼡'
	| '𨽐';
fragment BoolFalse:
	'陰'
	| '侌'
	| '阥'
	| '阴'
	| '隂'
	| '𠆭'
	| '𠊺'
	| '𣍤'
	| '𣱙'
	| '𨹉'
	| '𨹩'
	| '𨻔'
	| '𨼖'
	| '𨽙'
	| '𨽭'
	| '𩃬'
	| '霒'
	| '霠';

// 關鍵標點符號
fragment COMMA: ',' | '\u{ff0c}';
fragment PERIOD: '.' | '。';
fragment SEMICOLON: ';' | '\u{ff1b}';
fragment COLON: ':' | '\u{ff1a}';
// fragment LBRACKET: '(' | '\u{ff08}';
// fragment RBRACKET: ')' | '\u{ff09}';
// fragment SQLBRACKET: '[' | '\u{3014}' /* 〔 */;
// fragment SQRBRACKET: ']' | '\u{3015}' /* 〕 */;
// fragment LPARANT: '{';
// fragment RPARANT: '}';
// fragment QUESTION: '?' | '\u{ff1f}';
// fragment LQUOTE: '\'' | '\u{2018}';
// fragment RQUOTE: '\'' | '\u{2019}';
// fragment LDQUOTE: '"' | '“';
// fragment RDQUOTE: '"' | '”';


fragment Name: '『' ChineseCharacter+ '』';

// 字面值
BoolLiteral: BoolFalse | BoolTrue;
IntegerLiteral: Integer;
FloatLiteral: Float;
StringLiteral: '「「' .*? '」」';
CharacterLiteral: '「' . '」';

// 标识符
Identify: Name;

// 注釋和空格
SPACES: [ \r\t\u000C\n]+ -> skip;
LINE_COMMENT: Name? '按' COLON ~[\r\n]* '\r'? '\n' -> skip;
BLOCK_COMMENT: 
	(CharZhu '曰' COLON .*? CharZhu CharFinish PERIOD
	| CharPi '曰' COLON .*? CharPi CharFinish PERIOD
	| CharShi '曰' COLON .*? CharShi CharFinish PERIOD
	| CharZan '曰' COLON .*? CharZan CharFinish PERIOD
	| CharJian '曰' COLON .*? CharJian CharFinish PERIOD
	| CharShu '曰' COLON .*? CharShu CharFinish PERIOD)      ->skip
;

// 關鍵字, 注意，都不帶標點符號
KW_Zhe: CharZhe; /* 者 */
KW_Ye: CharYe; /* 也 */
KW_Yi3: CharYi; /* 以 */
KW_Fu: CharFu; /* 夫 */
KW_Yi4: CharAnd; /* 亦 */
KW_ALL: CharAll | CharJu ; /* 皆、具 */
KW_Varg: CharDeng; /*等 */
KW_AsParam: CharDo CharParam;/*為參 */
KW_NoParam: CharWu CharParam; /*無參 */
KW_ReturnVoid: CharAnd? CharWu CharSuo? CharReturn; /*(亦)無(所)歸 */
KW_FnBegin: CharIs CharFn '曰'; /*是術曰 */
KW_FnEnd1: CharCi CharZhi CharWei | CharIs CharWei | CharIs CharDo; /*此之謂 | 是謂 | 是為 */
KW_FnEnd2: CharZhi CharFn ( CharIs | CharZhe )? CharYe; /*之術[是者]也 */
KW_JYSM: '今'? CharYou CharFn CharName? ; /*(今)有術(名) */
KW_Return: CharReturn CharZhi CharYi; /*歸之以 */
KW_Return2: CharIs CharReturn; /*是歸 */
KW_ThisFn: CharIs CharFn CharYe; /*是術也 */

KW_Int: CharZheng CharNum; /*整數 */
KW_Float: CharSolid CharNum ; /*實數 */
KW_String: CharString; /*言 */
KW_Fn: CharFn;

// 導出需要的標點符號
KW_Comma: COMMA;
KW_Colon: COLON;
KW_SemiColon: SEMICOLON;
KW_Period: PERIOD;
KW_ChineseComma : '、';


