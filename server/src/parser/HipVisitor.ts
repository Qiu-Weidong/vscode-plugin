// Generated from ./server/src/parser/Hip.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HipParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HipVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `HipParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.funcDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDef?: (ctx: FuncDefContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.funcHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncHeader?: (ctx: FuncHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.funcBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncBody?: (ctx: FuncBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.funcTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTail?: (ctx: FuncTailContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParams?: (ctx: ParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.paramNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamNames?: (ctx: ParamNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.paramTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamTypes?: (ctx: ParamTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.vararg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVararg?: (ctx: VarargContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.retType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetType?: (ctx: RetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.emptyStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStmt?: (ctx: EmptyStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.exprStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprStmt?: (ctx: ExprStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.whileStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmt?: (ctx: ForStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.defineStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineStmt?: (ctx: DefineStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.assignStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStmt?: (ctx: AssignStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HipParser.split`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSplit?: (ctx: SplitContext) => Result;
}

