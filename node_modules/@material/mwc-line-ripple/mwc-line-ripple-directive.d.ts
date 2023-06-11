/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MDCLineRippleFoundation } from '@material/line-ripple/foundation.js';
import { AttributePart, Directive, DirectiveParameters, PartInfo } from 'lit/directive.js';
export interface LineRipple extends HTMLElement {
    lineRippleFoundation: MDCLineRippleFoundation;
}
export declare class LineRippleDirective extends Directive {
    private previousPart;
    protected foundation: MDCLineRippleFoundation | null;
    constructor(partInfo: PartInfo);
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part: AttributePart, _params: DirectiveParameters<this>): MDCLineRippleFoundation | null;
    render(): MDCLineRippleFoundation | null;
}
export declare const lineRipple: () => import("lit-html/directive").DirectiveResult<typeof LineRippleDirective>;
