/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { RadioBase } from './mwc-radio-base.js';
export { SingleSelectionController } from './single-selection-controller.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-radio': Radio;
    }
}
export declare class Radio extends RadioBase {
    static styles: import("lit").CSSResult[];
}
