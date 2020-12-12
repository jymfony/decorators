import { @Annotation } from "../annotation";

export class BeforeEach {
    /**
     * Constructor.
     */
    __construct() {
    }
}

export decorator @beforeEach() {
    @Annotation(new BeforeEach())
}
