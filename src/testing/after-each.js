import { @Annotation } from "../annotation";

export class AfterEach {
    /**
     * Constructor.
     */
    __construct() {
    }
}

export decorator @afterEach() {
    @Annotation(new AfterEach())
}
