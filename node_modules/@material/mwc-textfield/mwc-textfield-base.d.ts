/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/mwc-notched-outline/mwc-notched-outline.js';
import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation.js';
import { MDCLineRippleFoundation } from '@material/line-ripple/foundation.js';
import { FormElement } from '@material/mwc-base/form-element.js';
import { FloatingLabel } from '@material/mwc-floating-label/mwc-floating-label-directive.js';
import { LineRipple } from '@material/mwc-line-ripple/mwc-line-ripple-directive.js';
import { NotchedOutline } from '@material/mwc-notched-outline/mwc-notched-outline.js';
import { MDCTextFieldAdapter, MDCTextFieldInputAdapter, MDCTextFieldLabelAdapter, MDCTextFieldLineRippleAdapter, MDCTextFieldOutlineAdapter, MDCTextFieldRootAdapter } from '@material/textfield/adapter.js';
import MDCTextFieldFoundation from '@material/textfield/foundation.js';
import { PropertyValues, TemplateResult } from 'lit';
declare global {
    interface HTMLElement {
        floatingLabelFoundation?: MDCFloatingLabelFoundation;
        lineRippleFoundation?: MDCLineRippleFoundation;
    }
    interface Element {
        floatingLabelFoundation?: MDCFloatingLabelFoundation;
        lineRippleFoundation?: MDCLineRippleFoundation;
    }
}
/**
 * This is the enumerated typeof HTMLInputElement.type as declared by
 * lit-analyzer.
 */
export declare type TextFieldType = 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'color';
/**
 * This is the enumerated typeof HTMLInputElement.inputMode as declared by
 * lit-analyzer.
 */
export declare type TextFieldInputMode = 'verbatim' | 'latin' | 'latin-name' | 'latin-prose' | 'full-width-latin' | 'kana' | 'kana-name' | 'katakana' | 'numeric' | 'tel' | 'email' | 'url';
export declare type TextAreaCharCounter = 'external' | 'internal';
/** @soyCompatible */
export declare abstract class TextFieldBase extends FormElement {
    protected mdcFoundation: MDCTextFieldFoundation;
    protected readonly mdcFoundationClass: typeof MDCTextFieldFoundation;
    protected mdcRoot: HTMLElement;
    protected formElement: HTMLInputElement;
    protected labelElement: FloatingLabel | null;
    protected lineRippleElement: LineRipple | null;
    protected outlineElement: NotchedOutline | null;
    protected notchElement: HTMLElement;
    value: string;
    type: TextFieldType;
    placeholder: string;
    label: string;
    icon: string;
    iconTrailing: string;
    disabled: boolean;
    required: boolean;
    minLength: number;
    maxLength: number;
    outlined: boolean;
    helper: string;
    validateOnInitialRender: boolean;
    validationMessage: string;
    autoValidate: boolean;
    pattern: string;
    min: number | string;
    max: number | string;
    /**
     * step can be a number or the keyword "any".
     *
     * Use `String` typing to pass down the value as a string and let the native
     * input cast internally as needed.
     */
    step: number | 'any' | null;
    size: number | null;
    helperPersistent: boolean;
    charCounter: boolean | TextAreaCharCounter;
    endAligned: boolean;
    prefix: string;
    suffix: string;
    name: string;
    inputMode: TextFieldInputMode;
    readOnly: boolean;
    autocapitalize: string;
    protected outlineOpen: boolean;
    protected outlineWidth: number;
    protected isUiValid: boolean;
    protected focused: boolean;
    protected _validity: ValidityState;
    get validity(): ValidityState;
    get willValidate(): boolean;
    get selectionStart(): number | null;
    get selectionEnd(): number | null;
    validityTransform: ((value: string, nativeValidity: ValidityState) => Partial<ValidityState>) | null;
    focus(): void;
    blur(): void;
    select(): void;
    setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none'): void;
    update(changedProperties: PropertyValues): void;
    protected setFormData(formData: FormData): void;
    /** @soyTemplate */
    render(): TemplateResult;
    updated(changedProperties: PropertyValues): void;
    /** @soyTemplate */
    protected renderRipple(): TemplateResult | string;
    /** @soyTemplate */
    protected renderOutline(): TemplateResult | string;
    /** @soyTemplate */
    protected renderLabel(): TemplateResult | string;
    /** @soyTemplate */
    protected renderLeadingIcon(): TemplateResult | string;
    /** @soyTemplate */
    protected renderTrailingIcon(): TemplateResult | string;
    /** @soyTemplate */
    protected renderIcon(icon: string, isTrailingIcon?: boolean): TemplateResult;
    /** @soyTemplate */
    protected renderPrefix(): TemplateResult | string;
    /** @soyTemplate */
    protected renderSuffix(): TemplateResult | string;
    /** @soyTemplate */
    protected renderAffix(content: string, isSuffix?: boolean): TemplateResult | string;
    /** @soyTemplate */
    protected renderInput(shouldRenderHelperText: boolean): TemplateResult;
    /** @soyTemplate */
    protected renderLineRipple(): TemplateResult | string;
    /** @soyTemplate */
    protected renderHelperText(shouldRenderHelperText: boolean, shouldRenderCharCounter: boolean): TemplateResult | string;
    /** @soyTemplate */
    protected renderCharCounter(shouldRenderCharCounter: boolean): TemplateResult | string;
    protected onInputFocus(): void;
    protected onInputBlur(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    protected _checkValidity(value: string): boolean;
    setCustomValidity(message: string): void;
    protected handleInputChange(): void;
    protected createAdapter(): MDCTextFieldAdapter;
    protected getRootAdapterMethods(): MDCTextFieldRootAdapter;
    protected getInputAdapterMethods(): MDCTextFieldInputAdapter;
    protected getLabelAdapterMethods(): MDCTextFieldLabelAdapter;
    protected getLineRippleAdapterMethods(): MDCTextFieldLineRippleAdapter;
    protected getUpdateComplete(): Promise<boolean>;
    firstUpdated(): void;
    protected getOutlineAdapterMethods(): MDCTextFieldOutlineAdapter;
    layout(): Promise<void>;
}
