/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '@material/mwc-ripple/mwc-ripple.js';
import { Ripple } from '@material/mwc-ripple/mwc-ripple.js';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers.js';
import { LitElement } from 'lit';
export declare type SelectionSource = 'interaction' | 'property';
export interface RequestSelectedDetail {
    selected: boolean;
    source: SelectionSource;
}
export interface Layoutable {
    layout: (updateItems?: boolean) => void;
    debouncedLayout?: (updateItems?: boolean) => void | undefined;
}
export declare type GraphicType = 'avatar' | 'icon' | 'medium' | 'large' | 'control' | null;
/**
 * @fires request-selected {RequestSelectedDetail}
 * @fires list-item-rendered
 */
export declare class ListItemBase extends LitElement {
    protected slotElement: HTMLSlotElement | null;
    ripple: Promise<Ripple | null>;
    value: string;
    group: string | null;
    tabindex: number;
    disabled: boolean;
    twoline: boolean;
    activated: boolean;
    graphic: GraphicType;
    multipleGraphics: boolean;
    hasMeta: boolean;
    noninteractive: boolean;
    selected: boolean;
    protected shouldRenderRipple: boolean;
    _managingList: Layoutable | null;
    protected boundOnClick: () => void;
    protected _firstChanged: boolean;
    protected _skipPropRequest: boolean;
    protected rippleHandlers: RippleHandlers;
    protected listeners: ({
        target: Element;
        eventNames: string[];
        cb: EventListenerOrEventListenerObject;
    })[];
    get text(): string;
    render(): import("lit-html").TemplateResult<1>;
    protected renderRipple(): import("lit-html").TemplateResult<1> | "";
    protected renderGraphic(): import("lit-html").TemplateResult<1>;
    protected renderMeta(): import("lit-html").TemplateResult<1>;
    protected renderText(): import("lit-html").TemplateResult<1>;
    protected renderSingleLine(): import("lit-html").TemplateResult<1>;
    protected renderTwoline(): import("lit-html").TemplateResult<1>;
    protected onClick(): void;
    protected onDown(upName: string, evt: Event): void;
    protected fireRequestSelected(selected: boolean, source: SelectionSource): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
}
