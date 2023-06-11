/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
import { customElement } from 'lit/decorators.js';
import { ListBase } from './mwc-list-base.js';
import { styles } from './mwc-list.css.js';
export { createSetFromIndex, isEventMulti, isIndexSet } from './mwc-list-foundation.js';
let List = class List extends ListBase {
};
List.styles = [styles];
List = __decorate([
    customElement('mwc-list')
], List);
export { List };
//# sourceMappingURL=mwc-list.js.map