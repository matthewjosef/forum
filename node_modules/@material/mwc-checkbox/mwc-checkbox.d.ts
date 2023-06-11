/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CheckboxBase } from './mwc-checkbox-base.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-checkbox': Checkbox;
    }
}
/** @soyCompatible */
export declare class Checkbox extends CheckboxBase {
    static styles: import("lit").CSSResult[];
}
