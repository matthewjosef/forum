/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { TextAreaCharCounter, TextFieldBase, TextFieldInputMode, TextFieldType } from './mwc-textfield-base.js';
export { TextAreaCharCounter, TextFieldInputMode, TextFieldType };
declare global {
    interface HTMLElementTagNameMap {
        'mwc-textfield': TextField;
    }
}
/** @soyCompatible */
export declare class TextField extends TextFieldBase {
    static styles: import("lit").CSSResult[];
}
