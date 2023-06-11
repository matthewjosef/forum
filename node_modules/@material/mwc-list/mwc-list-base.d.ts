/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import './mwc-list-item.js';
import { BaseElement } from '@material/mwc-base/base-element.js';
import { MDCListAdapter } from './mwc-list-adapter.js';
import MDCListFoundation from './mwc-list-foundation.js';
import { MWCListIndex } from './mwc-list-foundation.js';
import { Layoutable, ListItemBase, RequestSelectedDetail } from './mwc-list-item-base.js';
export { ActionDetail, createSetFromIndex, isEventMulti, isIndexSet, MultiSelectedEvent, MWCListIndex, SelectedDetail, SelectedEvent, SingleSelectedEvent } from './mwc-list-foundation.js';
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 */
export declare abstract class ListBase extends BaseElement implements Layoutable {
    protected mdcFoundation: MDCListFoundation;
    protected mdcAdapter: MDCListAdapter | null;
    protected readonly mdcFoundationClass: typeof MDCListFoundation;
    emptyMessage: string | undefined;
    protected mdcRoot: HTMLElement;
    protected assignedElements: HTMLElement[] | null;
    protected tabbableElements: HTMLElement[] | null;
    activatable: boolean;
    multi: boolean;
    wrapFocus: boolean;
    itemRoles: string | null;
    innerRole: string | null;
    innerAriaLabel: string | null;
    rootTabbable: boolean;
    protected previousTabindex: Element | null;
    noninteractive: boolean;
    debouncedLayout: (updateItems?: boolean) => void | undefined;
    protected itemsReadyResolver: (value?: (PromiseLike<never[]> | never[] | undefined)) => void;
    constructor();
    itemsReady: Promise<never[]>;
    protected getUpdateComplete(): Promise<boolean>;
    protected items_: ListItemBase[];
    get items(): ListItemBase[];
    protected updateItems(): void;
    get selected(): ListItemBase | ListItemBase[] | null;
    get index(): MWCListIndex;
    render(): import("lit-html").TemplateResult<1>;
    renderPlaceholder(): import("lit-html").TemplateResult<1> | null;
    firstUpdated(): void;
    protected onFocusIn(evt: FocusEvent): void;
    protected onFocusOut(evt: FocusEvent): void;
    protected onKeydown(evt: KeyboardEvent): void;
    protected onRequestSelected(evt: CustomEvent<RequestSelectedDetail>): void;
    protected getIndexOfTarget(evt: Event): number;
    protected createAdapter(): MDCListAdapter;
    protected selectUi(index: number, activate?: boolean): void;
    protected deselectUi(index: number): void;
    select(index: MWCListIndex): void;
    toggle(index: number, force?: boolean): void;
    protected onListItemConnected(e: CustomEvent): void;
    layout(updateItems?: boolean): void;
    getFocusedItemIndex(): number;
    focusItemAtIndex(index: number): void;
    focus(): void;
    blur(): void;
}
