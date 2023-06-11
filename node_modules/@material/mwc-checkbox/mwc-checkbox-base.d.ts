/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/mwc-ripple/mwc-ripple.js';
import { FormElement } from '@material/mwc-base/form-element.js';
import { Ripple } from '@material/mwc-ripple/mwc-ripple.js';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers.js';
import { PropertyValues, TemplateResult } from 'lit';
/** @soyCompatible */
export declare class CheckboxBase extends FormElement {
    protected mdcRoot: HTMLElement;
    protected formElement: HTMLInputElement;
    checked: boolean;
    indeterminate: boolean;
    disabled: boolean;
    name: string;
    value: string;
    /** @soyPrefixAttribute */
    ariaLabel: string;
    /** @soyPrefixAttribute */
    ariaLabelledBy: string;
    /** @soyPrefixAttribute */
    ariaDescribedBy: string;
    /**
     * Touch target extends beyond visual boundary of a component by default.
     * Set to `true` to remove touch target added to the component.
     * @see https://material.io/design/usability/accessibility.html
     */
    reducedTouchTarget: boolean;
    protected animationClass: string;
    protected shouldRenderRipple: boolean;
    protected focused: boolean;
    ripple: Promise<Ripple | null>;
    protected mdcFoundationClass: undefined;
    protected mdcFoundation: undefined;
    protected createAdapter(): {};
    protected update(changedProperties: PropertyValues): void;
    protected calculateAnimationStateName(checked: boolean, indeterminate: boolean, disabled: boolean): string;
    protected rippleElement: Ripple | null;
    protected rippleHandlers: RippleHandlers;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    /** @soyTemplate */
    protected renderRippleTemplate(): TemplateResult;
    /**
     * @soyTemplate
     * @soyAttributes checkboxAttributes: input
     * @soyClasses checkboxClasses: .mdc-checkbox
     */
    protected render(): TemplateResult;
    protected setFormData(formData: FormData): void;
    protected handleFocus(): void;
    protected handleBlur(): void;
    protected handleRippleMouseDown(event: Event): void;
    protected handleRippleTouchStart(event: Event): void;
    protected handleRippleDeactivate(): void;
    protected handleRippleMouseEnter(): void;
    protected handleRippleMouseLeave(): void;
    protected handleRippleFocus(): void;
    protected handleRippleBlur(): void;
    protected handleChange(): void;
    protected resetAnimationClass(): void;
    get isRippleActive(): any;
}
