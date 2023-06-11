/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MenuBase } from './mwc-menu-base.js';
export { createSetFromIndex, isEventMulti, isIndexSet, MWCListIndex } from '@material/mwc-list/mwc-list-foundation.js';
export { DefaultFocusState } from './mwc-menu-base.js';
export { Corner, MenuCorner } from './mwc-menu-surface-base.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-menu': MenuBase;
    }
}
export declare class Menu extends MenuBase {
    static styles: import("lit").CSSResult[];
}
