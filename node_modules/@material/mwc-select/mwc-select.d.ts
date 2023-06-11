/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { SelectBase } from './mwc-select-base.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-select': Select;
    }
}
export declare class Select extends SelectBase {
    static styles: import("lit").CSSResult[];
}
