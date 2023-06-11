/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
import { customElement } from 'lit/decorators.js';
import { FormfieldBase } from './mwc-formfield-base.js';
import { styles } from './mwc-formfield.css.js';
let Formfield = class Formfield extends FormfieldBase {
};
Formfield.styles = [styles];
Formfield = __decorate([
    customElement('mwc-formfield')
], Formfield);
export { Formfield };
//# sourceMappingURL=mwc-formfield.js.map