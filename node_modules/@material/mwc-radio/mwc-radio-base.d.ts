/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/mwc-ripple/mwc-ripple.js';
import { FormElement } from '@material/mwc-base/form-element.js';
import { SingleSelectionController } from '@material/mwc-radio/single-selection-controller.js';
import { Ripple } from '@material/mwc-ripple/mwc-ripple.js';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers.js';
import { MDCRadioAdapter } from '@material/radio/adapter.js';
import MDCRadioFoundation from '@material/radio/foundation.js';
import { TemplateResult } from 'lit';
/**
 * @fires checked
 * @soyCompatible
 */
export declare class RadioBase extends FormElement {
    protected mdcRoot: HTMLElement;
    protected formElement: HTMLInputElement;
    protected _checked: boolean;
    protected useStateLayerCustomProperties: boolean;
    global: boolean;
    get checked(): boolean;
    /**
     * We define our own getter/setter for `checked` because we need to track
     * changes to it synchronously.
     *
     * The order in which the `checked` property is set across radio buttons
     * within the same group is very important. However, we can't rely on
     * UpdatingElement's `updated` callback to observe these changes (which is
     * also what the `@observer` decorator uses), because it batches changes to
     * all properties.
     *
     * Consider:
     *
     *   radio1.disabled = true;
     *   radio2.checked = true;
     *   radio1.checked = true;
     *
     * In this case we'd first see all changes for radio1, and then for radio2,
     * and we couldn't tell that radio1 was the most recently checked.
     */
    set checked(isChecked: boolean);
    disabled: boolean;
    value: string;
    _handleUpdatedValue(newValue: string): void;
    name: string;
    /**
     * Touch target extends beyond visual boundary of a component by default.
     * Set to `true` to remove touch target added to the component.
     * @see https://material.io/design/usability/accessibility.html
     */
    reducedTouchTarget: boolean;
    protected mdcFoundationClass: typeof MDCRadioFoundation;
    protected mdcFoundation: MDCRadioFoundation;
    protected _selectionController?: SingleSelectionController;
    /**
     * input's tabindex is updated based on checked status.
     * Tab navigation will be removed from unchecked radios.
     */
    formElementTabIndex: number;
    protected focused: boolean;
    protected shouldRenderRipple: boolean;
    ripple: Promise<Ripple | null>;
    /** @soyPrefixAttribute */
    ariaLabel: string;
    /** @soyPrefixAttribute */
    ariaLabelledBy: string;
    protected rippleElement: Ripple | null;
    protected rippleHandlers: RippleHandlers;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    get isRippleActive(): any;
    connectedCallback(): void;
    disconnectedCallback(): void;
    focus(): void;
    protected createAdapter(): MDCRadioAdapter;
    protected handleFocus(): void;
    protected handleClick(): void;
    protected handleBlur(): void;
    protected setFormData(formData: FormData): void;
    /**
     * @soyTemplate
     * @soyAttributes radioAttributes: input
     * @soyClasses radioClasses: .mdc-radio
     */
    protected render(): TemplateResult;
    protected handleRippleMouseDown(event: Event): void;
    protected handleRippleTouchStart(event: Event): void;
    protected handleRippleDeactivate(): void;
    protected handleRippleMouseEnter(): void;
    protected handleRippleMouseLeave(): void;
    protected handleRippleFocus(): void;
    protected changeHandler(): void;
}
