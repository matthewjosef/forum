/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { BaseElement } from '@material/mwc-base/base-element.js';
import { MDCNotchedOutlineAdapter } from '@material/notched-outline/adapter.js';
import { MDCNotchedOutlineFoundation } from '@material/notched-outline/foundation.js';
export declare class NotchedOutlineBase extends BaseElement {
    protected mdcRoot: HTMLElement;
    protected mdcFoundation: MDCNotchedOutlineFoundation;
    protected readonly mdcFoundationClass: typeof MDCNotchedOutlineFoundation;
    width: number;
    open: boolean;
    protected lastOpen: boolean;
    protected notchElement: HTMLDivElement;
    protected createAdapter(): MDCNotchedOutlineAdapter;
    protected openOrClose(shouldOpen: boolean, width?: number): void;
    render(): import("lit-html").TemplateResult<1>;
}
