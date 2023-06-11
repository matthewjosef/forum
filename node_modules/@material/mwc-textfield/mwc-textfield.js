/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
import { customElement } from 'lit/decorators.js';
import { TextFieldBase } from './mwc-textfield-base.js';
import { styles } from './mwc-textfield.css.js';
/** @soyCompatible */
let TextField = class TextField extends TextFieldBase {
};
TextField.styles = [styles];
TextField = __decorate([
    customElement('mwc-textfield')
], TextField);
export { TextField };
//# sourceMappingURL=mwc-textfield.js.map