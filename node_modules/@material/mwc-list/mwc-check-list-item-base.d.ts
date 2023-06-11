/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/mwc-checkbox/mwc-checkbox.js';
import { Checkbox } from '@material/mwc-checkbox/mwc-checkbox.js';
import { GraphicType, ListItemBase } from './mwc-list-item-base.js';
export declare class CheckListItemBase extends ListItemBase {
    protected slotElement: HTMLSlotElement | null;
    protected checkboxElement: Checkbox;
    left: boolean;
    graphic: GraphicType;
    render(): import("lit-html").TemplateResult<1>;
    protected onChange(evt: Event): Promise<void>;
}
