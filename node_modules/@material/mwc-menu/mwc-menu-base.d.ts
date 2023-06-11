/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/mwc-list/mwc-list.js';
import './mwc-menu-surface.js';
import { MDCMenuAdapter } from '@material/menu/adapter.js';
import { DefaultFocusState as DefaultFocusStateEnum } from '@material/menu/constants.js';
import MDCMenuFoundation from '@material/menu/foundation.js';
import { BaseElement } from '@material/mwc-base/base-element.js';
import { ActionDetail } from '@material/mwc-list/mwc-list-foundation.js';
import { ListItemBase } from '@material/mwc-list/mwc-list-item-base.js';
import { List, MWCListIndex } from '@material/mwc-list/mwc-list.js';
import { Corner, MenuCorner } from './mwc-menu-surface-base.js';
import { MenuSurface } from './mwc-menu-surface.js';
export { ActionDetail, createSetFromIndex, isEventMulti, isIndexSet, MWCListIndex, SelectedDetail } from '@material/mwc-list/mwc-list-foundation.js';
export { Corner, MenuCorner } from './mwc-menu-surface-base.js';
export declare type DefaultFocusState = keyof typeof DefaultFocusStateEnum;
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 * @fires opened
 * @fires closed
 */
export declare abstract class MenuBase extends BaseElement {
    protected mdcFoundation: MDCMenuFoundation;
    protected readonly mdcFoundationClass: typeof MDCMenuFoundation;
    protected listElement_: List | null;
    mdcRoot: MenuSurface;
    slotElement: HTMLSlotElement | null;
    anchor: HTMLElement | null;
    open: boolean;
    quick: boolean;
    wrapFocus: boolean;
    innerRole: 'menu' | 'listbox';
    innerAriaLabel: string | null;
    corner: Corner;
    x: number | null;
    y: number | null;
    absolute: boolean;
    multi: boolean;
    activatable: boolean;
    fixed: boolean;
    forceGroupSelection: boolean;
    fullwidth: boolean;
    menuCorner: MenuCorner;
    stayOpenOnBodyClick: boolean;
    defaultFocus: DefaultFocusState;
    protected _listUpdateComplete: null | Promise<unknown>;
    protected get listElement(): List | null;
    get items(): ListItemBase[];
    get index(): MWCListIndex;
    get selected(): ListItemBase | ListItemBase[] | null;
    render(): import("lit-html").TemplateResult<1>;
    protected renderSurface(): import("lit-html").TemplateResult<1>;
    protected getSurfaceClasses(): {
        'mdc-menu': boolean;
        'mdc-menu-surface': boolean;
    };
    protected renderList(): import("lit-html").TemplateResult<1>;
    protected renderListClasses(): {
        'mdc-deprecated-list': boolean;
    };
    protected createAdapter(): MDCMenuAdapter;
    protected onKeydown(evt: KeyboardEvent): void;
    protected onAction(evt: CustomEvent<ActionDetail>): void;
    protected onOpened(): void;
    protected onClosed(): void;
    protected getUpdateComplete(): Promise<boolean>;
    protected firstUpdated(): Promise<void>;
    select(index: MWCListIndex): void;
    close(): void;
    show(): void;
    getFocusedItemIndex(): number;
    focusItemAtIndex(index: number): void;
    layout(updateItems?: boolean): void;
}
