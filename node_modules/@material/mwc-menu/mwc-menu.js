/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
import { customElement } from 'lit/decorators.js';
import { MenuBase } from './mwc-menu-base.js';
import { styles } from './mwc-menu.css.js';
export { createSetFromIndex, isEventMulti, isIndexSet } from '@material/mwc-list/mwc-list-foundation.js';
let Menu = class Menu extends MenuBase {
};
Menu.styles = [styles];
Menu = __decorate([
    customElement('mwc-menu')
], Menu);
export { Menu };
//# sourceMappingURL=mwc-menu.js.map