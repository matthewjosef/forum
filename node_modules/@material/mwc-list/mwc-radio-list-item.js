/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
import { customElement } from 'lit/decorators.js';
import { styles as controlStyle } from './mwc-control-list-item.css.js';
import { styles } from './mwc-list-item.css.js';
import { RadioListItemBase } from './mwc-radio-list-item-base.js';
let RadioListItem = class RadioListItem extends RadioListItemBase {
};
RadioListItem.styles = [styles, controlStyle];
RadioListItem = __decorate([
    customElement('mwc-radio-list-item')
], RadioListItem);
export { RadioListItem };
//# sourceMappingURL=mwc-radio-list-item.js.map