import { Annotation } from "../annotation";

export class BeforeEach {
    /**
     * Constructor.
     */
    __construct() {
    }
}

export function beforeEach() {
    return function (value) {
        return Annotation(new BeforeEach())(value);
    }
}
