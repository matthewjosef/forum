/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/mwc-notched-outline/mwc-notched-outline.js';
import '@material/mwc-menu/mwc-menu.js';
import '@material/mwc-icon/mwc-icon.js';
import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation.js';
import { MDCLineRippleFoundation } from '@material/line-ripple/foundation.js';
import * as typeahead from '@material/list/typeahead.js';
import { MDCListTextAndIndex } from '@material/list/types.js';
import { FormElement } from '@material/mwc-base/form-element.js';
import { FloatingLabel } from '@material/mwc-floating-label/mwc-floating-label-directive.js';
import { LineRipple } from '@material/mwc-line-ripple/mwc-line-ripple-directive.js';
import { ListItemBase } from '@material/mwc-list/mwc-list-item-base.js';
import { Menu } from '@material/mwc-menu/mwc-menu.js';
import { NotchedOutline } from '@material/mwc-notched-outline/mwc-notched-outline.js';
import { MDCSelectAdapter } from '@material/select/adapter.js';
import MDCSelectFoundation from '@material/select/foundation.js';
import { nothing } from 'lit';
declare global {
    interface Element {
        floatingLabelFoundation?: MDCFloatingLabelFoundation;
        lineRippleFoundation?: MDCLineRippleFoundation;
    }
}
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires opened
 * @fires closed
 * @fires change
 * @fires invalid
 */
export declare abstract class SelectBase extends FormElement {
    protected mdcFoundation: MDCSelectFoundation;
    protected readonly mdcFoundationClass: typeof MDCSelectFoundation;
    protected mdcRoot: HTMLElement;
    protected formElement: HTMLInputElement;
    protected slotElement: HTMLSlotElement | null;
    protected nativeSelectElement: HTMLSelectElement | null;
    protected nativeInputElement: HTMLInputElement | null;
    protected lineRippleElement: LineRipple | null;
    protected labelElement: FloatingLabel | null;
    protected outlineElement: NotchedOutline | null;
    protected menuElement: Menu | null;
    protected anchorElement: HTMLDivElement | null;
    disabled: boolean;
    outlined: boolean;
    label: string;
    protected outlineOpen: boolean;
    protected outlineWidth: number;
    value: string;
    name: string;
    protected selectedText: string;
    icon: string;
    protected menuOpen: boolean;
    helper: string;
    validateOnInitialRender: boolean;
    validationMessage: string;
    required: boolean;
    naturalMenuWidth: boolean;
    protected isUiValid: boolean;
    fixedMenuPosition: boolean;
    protected typeaheadState: typeahead.TypeaheadState;
    protected sortedIndexByFirstChar: Map<string, MDCListTextAndIndex[]>;
    protected menuElement_: Menu | null;
    get items(): ListItemBase[];
    get selected(): ListItemBase | null;
    get index(): number;
    protected listeners: ({
        target: Element;
        name: string;
        cb: EventListenerOrEventListenerObject;
    })[];
    protected onBodyClickBound: (evt: MouseEvent) => void;
    protected _menuUpdateComplete: null | Promise<unknown>;
    protected get shouldRenderHelperText(): boolean;
    protected valueSetDirectly: boolean;
    validityTransform: ((value: string, nativeValidity: ValidityState) => Partial<ValidityState>) | null;
    protected _validity: ValidityState;
    get validity(): ValidityState;
    render(): import("lit-html").TemplateResult<1>;
    protected renderMenu(): import("lit-html").TemplateResult<1>;
    protected getMenuClasses(): {
        'mdc-select__menu': boolean;
        'mdc-menu': boolean;
        'mdc-menu-surface': boolean;
        'mdc-select__menu--invalid': boolean;
    };
    protected renderMenuContent(): import("lit-html").TemplateResult<1>;
    protected renderRipple(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected renderOutline(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected renderLabel(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected renderLeadingIcon(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected renderLineRipple(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected renderHelperText(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected createAdapter(): MDCSelectAdapter;
    checkValidity(): boolean;
    reportValidity(): boolean;
    protected _checkValidity(value: string): boolean;
    setCustomValidity(message: string): void;
    protected getUpdateComplete(): Promise<boolean>;
    protected firstUpdated(): Promise<void>;
    protected onItemsUpdated(): void;
    select(index: number): void;
    protected selectByValue(value: string): void;
    disconnectedCallback(): void;
    focus(): void;
    blur(): void;
    protected onFocus(): void;
    protected onBlur(): void;
    protected onClick(evt: MouseEvent | TouchEvent): void;
    protected onKeydown(evt: KeyboardEvent): void;
    protected handleTypeahead(event: KeyboardEvent): void;
    protected onSelected(event: CustomEvent<{
        index: number;
    }>): Promise<void>;
    protected onOpened(): void;
    protected onClosed(): void;
    protected setFormData(formData: FormData): void;
    layout(updateItems?: boolean): Promise<void>;
    layoutOptions(): Promise<void>;
}
