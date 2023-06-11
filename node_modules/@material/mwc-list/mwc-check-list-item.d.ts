/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CheckListItemBase } from './mwc-check-list-item-base.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-check-list-item': CheckListItem;
    }
}
export declare class CheckListItem extends CheckListItemBase {
    static styles: import("lit").CSSResult[];
}
