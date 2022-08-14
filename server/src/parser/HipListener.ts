// Generated from ./server/src/parser/Hip.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./HipParser";
import { FuncDefContext } from "./HipParser";
import { FuncHeaderContext } from "./HipParser";
import { FuncBodyContext } from "./HipParser";
import { FuncTailContext } from "./HipParser";
import { ParamsContext } from "./HipParser";
import { ParamNamesContext } from "./HipParser";
import { ParamTypesContext } from "./HipParser";
import { VarargContext } from "./HipParser";
import { RetTypeContext } from "./HipParser";
import { TypeContext } from "./HipParser";
import { StmtContext } from "./HipParser";
import { EmptyStmtContext } from "./HipParser";
import { ExprStmtContext } from "./HipParser";
import { IfStmtContext } from "./HipParser";
import { WhileStmtContext } from "./HipParser";
import { ForStmtContext } from "./HipParser";
import { ReturnStmtContext } from "./HipParser";
import { DefineStmtContext } from "./HipParser";
import { AssignStmtContext } from "./HipParser";
import { ExprContext } from "./HipParser";
import { LiteralContext } from "./HipParser";
import { SplitContext } from "./HipParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HipParser`.
 */
export interface HipListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HipParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.funcDef`.
	 * @param ctx the parse tree
	 */
	enterFuncDef?: (ctx: FuncDefContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.funcDef`.
	 * @param ctx the parse tree
	 */
	exitFuncDef?: (ctx: FuncDefContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.funcHeader`.
	 * @param ctx the parse tree
	 */
	enterFuncHeader?: (ctx: FuncHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.funcHeader`.
	 * @param ctx the parse tree
	 */
	exitFuncHeader?: (ctx: FuncHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.funcBody`.
	 * @param ctx the parse tree
	 */
	enterFuncBody?: (ctx: FuncBodyContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.funcBody`.
	 * @param ctx the parse tree
	 */
	exitFuncBody?: (ctx: FuncBodyContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.funcTail`.
	 * @param ctx the parse tree
	 */
	enterFuncTail?: (ctx: FuncTailContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.funcTail`.
	 * @param ctx the parse tree
	 */
	exitFuncTail?: (ctx: FuncTailContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.params`.
	 * @param ctx the parse tree
	 */
	enterParams?: (ctx: ParamsContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.params`.
	 * @param ctx the parse tree
	 */
	exitParams?: (ctx: ParamsContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.paramNames`.
	 * @param ctx the parse tree
	 */
	enterParamNames?: (ctx: ParamNamesContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.paramNames`.
	 * @param ctx the parse tree
	 */
	exitParamNames?: (ctx: ParamNamesContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.paramTypes`.
	 * @param ctx the parse tree
	 */
	enterParamTypes?: (ctx: ParamTypesContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.paramTypes`.
	 * @param ctx the parse tree
	 */
	exitParamTypes?: (ctx: ParamTypesContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.vararg`.
	 * @param ctx the parse tree
	 */
	enterVararg?: (ctx: VarargContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.vararg`.
	 * @param ctx the parse tree
	 */
	exitVararg?: (ctx: VarargContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.retType`.
	 * @param ctx the parse tree
	 */
	enterRetType?: (ctx: RetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.retType`.
	 * @param ctx the parse tree
	 */
	exitRetType?: (ctx: RetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.emptyStmt`.
	 * @param ctx the parse tree
	 */
	enterEmptyStmt?: (ctx: EmptyStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.emptyStmt`.
	 * @param ctx the parse tree
	 */
	exitEmptyStmt?: (ctx: EmptyStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.exprStmt`.
	 * @param ctx the parse tree
	 */
	enterExprStmt?: (ctx: ExprStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.exprStmt`.
	 * @param ctx the parse tree
	 */
	exitExprStmt?: (ctx: ExprStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	enterWhileStmt?: (ctx: WhileStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	exitWhileStmt?: (ctx: WhileStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.forStmt`.
	 * @param ctx the parse tree
	 */
	enterForStmt?: (ctx: ForStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.forStmt`.
	 * @param ctx the parse tree
	 */
	exitForStmt?: (ctx: ForStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.defineStmt`.
	 * @param ctx the parse tree
	 */
	enterDefineStmt?: (ctx: DefineStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.defineStmt`.
	 * @param ctx the parse tree
	 */
	exitDefineStmt?: (ctx: DefineStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt?: (ctx: AssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt?: (ctx: AssignStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `HipParser.split`.
	 * @param ctx the parse tree
	 */
	enterSplit?: (ctx: SplitContext) => void;
	/**
	 * Exit a parse tree produced by `HipParser.split`.
	 * @param ctx the parse tree
	 */
	exitSplit?: (ctx: SplitContext) => void;
}

