/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/mwc-radio/mwc-radio.js';
import { Radio } from '@material/mwc-radio/mwc-radio.js';
import { GraphicType, ListItemBase } from './mwc-list-item-base.js';
export declare class RadioListItemBase extends ListItemBase {
    protected slotElement: HTMLSlotElement | null;
    protected radioElement: Radio;
    left: boolean;
    graphic: GraphicType;
    protected _changeFromClick: boolean;
    render(): import("lit-html").TemplateResult<1>;
    protected onClick(): void;
    protected onChange(evt: Event): Promise<void>;
}
