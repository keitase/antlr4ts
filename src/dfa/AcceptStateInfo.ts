﻿/*
 * [The "BSD license"]
 *  Copyright (c) 2014 Terence Parr
 *  Copyright (c) 2014 Sam Harwell
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions
 *  are met:
 *
 *  1. Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *  3. The name of the author may not be used to endorse or promote products
 *     derived from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 *  IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 *  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 *  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 *  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// ConvertTo-TS run at 2016-10-04T11:26:38.1172076-07:00

import { LexerActionExecutor } from '../atn/LexerActionExecutor';

/**
 * Stores information about a {@link DFAState} which is an accept state under
 * some condition. Certain settings, such as
 * {@link ParserATNSimulator#getPredictionMode()}, may be used in addition to
 * this information to determine whether or not a particular state is an accept
 * state.
 *
 * @author Sam Harwell
 */
export class AcceptStateInfo {
	private prediction: number;
	private lexerActionExecutor?: LexerActionExecutor;

	constructor(prediction: number);
	constructor(prediction: number, lexerActionExecutor: LexerActionExecutor | undefined);
	constructor(prediction: number, lexerActionExecutor?: LexerActionExecutor) {
		this.prediction = prediction;
		this.lexerActionExecutor = lexerActionExecutor;
	}

	/**
	 * Gets the prediction made by this accept state. Note that this value
	 * assumes the predicates, if any, in the {@link DFAState} evaluate to
	 * {@code true}. If predicate evaluation is enabled, the final prediction of
	 * the accept state will be determined by the result of predicate
	 * evaluation.
	 */
	getPrediction(): number {
		return this.prediction;
	}

	/**
	 * Gets the {@link LexerActionExecutor} which can be used to execute actions
	 * and/or commands after the lexer matches a token.
	 */
	getLexerActionExecutor(): LexerActionExecutor | undefined {
		return this.lexerActionExecutor;
	}
}
