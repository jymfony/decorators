import { Annotation } from "../annotation";

export class AfterEach {
    /**
     * Constructor.
     */
    __construct() {
    }
}

export function afterEach() {
    return function (value) {
        return Annotation(new AfterEach())(value);
    }
}
