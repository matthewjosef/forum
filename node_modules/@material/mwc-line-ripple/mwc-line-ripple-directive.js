/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MDCLineRippleFoundation } from '@material/line-ripple/foundation.js';
import { directive, Directive, PartType } from 'lit/directive.js';
const createAdapter = (lineElement) => {
    return {
        addClass: (className) => lineElement.classList.add(className),
        removeClass: (className) => lineElement.classList.remove(className),
        hasClass: (className) => lineElement.classList.contains(className),
        setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
        registerEventHandler: (evtType, handler) => {
            lineElement.addEventListener(evtType, handler);
        },
        deregisterEventHandler: (evtType, handler) => {
            lineElement.removeEventListener(evtType, handler);
        },
    };
};
export class LineRippleDirective extends Directive {
    constructor(partInfo) {
        super(partInfo);
        this.previousPart = null;
        this.foundation = null;
        switch (partInfo.type) {
            case PartType.ATTRIBUTE:
            case PartType.PROPERTY:
                return;
            default:
                throw new Error('LineRipple only support attribute and property parts.');
        }
    }
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part, _params) {
        if (this.previousPart !== part) {
            if (this.foundation) {
                this.foundation.destroy();
            }
            this.previousPart = part;
            const lineElement = part.element;
            lineElement.classList.add('mdc-line-ripple');
            const adapter = createAdapter(lineElement);
            this.foundation = new MDCLineRippleFoundation(adapter);
            this.foundation.init();
        }
        return this.render();
    }
    render() {
        return this.foundation;
    }
}
export const lineRipple = directive(LineRippleDirective);
//# sourceMappingURL=mwc-line-ripple-directive.js.map