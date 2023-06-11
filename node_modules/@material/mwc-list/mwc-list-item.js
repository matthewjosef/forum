/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
import { customElement } from 'lit/decorators.js';
import { ListItemBase } from './mwc-list-item-base.js';
import { styles } from './mwc-list-item.css.js';
let ListItem = class ListItem extends ListItemBase {
};
ListItem.styles = [styles];
ListItem = __decorate([
    customElement('mwc-list-item')
], ListItem);
export { ListItem };
//# sourceMappingURL=mwc-list-item.js.map