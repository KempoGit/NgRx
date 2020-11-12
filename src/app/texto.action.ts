import { Action } from '@ngrx/store';

export const SPANISH = '[Texto] Spanish';
export const ENGLISH = '[Texto] English';

export class SpanishTexto implements Action {
    readonly type = SPANISH;

    constructor(public payload : string) {}
}

export class EnglishTexto implements Action {
    readonly type = ENGLISH;

    constructor(public payload : string) {}
}

export type TextoActions = SpanishTexto | EnglishTexto;