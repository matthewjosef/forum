/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation.js';
import { AttributePart, Directive, DirectiveParameters, PartInfo } from 'lit/directive.js';
export interface FloatingLabel extends HTMLLabelElement {
    floatingLabelFoundation: MDCFloatingLabelFoundation;
}
declare class FloatingLabelDirective extends Directive {
    private foundation;
    private previousPart;
    constructor(partInfo: PartInfo);
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part: AttributePart, [label]: DirectiveParameters<this>): MDCFloatingLabelFoundation | null;
    render(_label: string): MDCFloatingLabelFoundation | null;
}
export declare const floatingLabel: (_label: string) => import("lit-html/directive").DirectiveResult<typeof FloatingLabelDirective>;
export {};
