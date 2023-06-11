/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ListBase } from './mwc-list-base.js';
export { ActionDetail, createSetFromIndex, IndexDiff, isEventMulti, isIndexSet, MultiSelectedEvent, MWCListIndex, SelectedDetail, SelectedEvent, SingleSelectedEvent } from './mwc-list-foundation.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-list': List;
    }
}
export declare class List extends ListBase {
    static styles: import("lit").CSSResult[];
}
