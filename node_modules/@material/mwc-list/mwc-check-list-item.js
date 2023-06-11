/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
import { customElement } from 'lit/decorators.js';
import { CheckListItemBase } from './mwc-check-list-item-base.js';
import { styles as controlStyle } from './mwc-control-list-item.css.js';
import { styles } from './mwc-list-item.css.js';
let CheckListItem = class CheckListItem extends CheckListItemBase {
};
CheckListItem.styles = [styles, controlStyle];
CheckListItem = __decorate([
    customElement('mwc-check-list-item')
], CheckListItem);
export { CheckListItem };
//# sourceMappingURL=mwc-check-list-item.js.map