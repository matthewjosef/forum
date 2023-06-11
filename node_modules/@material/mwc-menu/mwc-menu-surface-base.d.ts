/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MDCMenuSurfaceAdapter } from '@material/menu-surface/adapter.js';
import { Corner as CornerEnum } from '@material/menu-surface/constants.js';
import MDCMenuSurfaceFoundation from '@material/menu-surface/foundation.js';
import { BaseElement } from '@material/mwc-base/base-element.js';
export declare type Corner = keyof typeof CornerEnum;
export declare type AnchorableElement = HTMLElement & {
    anchor: Element | null;
};
export declare type MenuCorner = 'START' | 'END';
/**
 * @fires opened
 * @fires closed
 */
export declare abstract class MenuSurfaceBase extends BaseElement {
    protected mdcFoundation: MDCMenuSurfaceFoundation;
    protected readonly mdcFoundationClass: typeof MDCMenuSurfaceFoundation;
    mdcRoot: HTMLDivElement;
    slotElement: HTMLSlotElement | null;
    absolute: boolean;
    fullwidth: boolean;
    fixed: boolean;
    x: number | null;
    y: number | null;
    quick: boolean;
    open: boolean;
    stayOpenOnBodyClick: boolean;
    protected bitwiseCorner: CornerEnum;
    protected previousMenuCorner: MenuCorner | null;
    menuCorner: MenuCorner;
    corner: Corner;
    protected styleTop: string;
    protected styleLeft: string;
    protected styleRight: string;
    protected styleBottom: string;
    protected styleMaxHeight: string;
    protected styleTransformOrigin: string;
    anchor: HTMLElement | null;
    protected previouslyFocused: HTMLElement | Element | null;
    protected previousAnchor: HTMLElement | null;
    protected onBodyClickBound: (evt: MouseEvent) => void;
    render(): import("lit-html").TemplateResult<1>;
    protected renderSurface(): import("lit-html").TemplateResult<1>;
    protected getRootClasses(): {
        'mdc-menu-surface': boolean;
        'mdc-menu-surface--fixed': boolean;
        'mdc-menu-surface--fullwidth': boolean;
    };
    protected getRootStyles(): {
        top: string;
        left: string;
        right: string;
        bottom: string;
        'max-height': string;
        'transform-origin': string;
    };
    protected renderContent(): import("lit-html").TemplateResult<1>;
    createAdapter(): MDCMenuSurfaceAdapter;
    protected onKeydown(evt: KeyboardEvent): void;
    protected onBodyClick(evt: MouseEvent): void;
    protected registerBodyClick(): void;
    protected deregisterBodyClick(): void;
    protected onOpenChanged(isOpen: boolean, wasOpen: boolean): void;
    close(): void;
    show(): void;
}
