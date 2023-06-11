/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
import { customElement } from 'lit/decorators.js';
import { SelectBase } from './mwc-select-base.js';
import { styles } from './mwc-select.css.js';
let Select = class Select extends SelectBase {
};
Select.styles = [styles];
Select = __decorate([
    customElement('mwc-select')
], Select);
export { Select };
//# sourceMappingURL=mwc-select.js.map