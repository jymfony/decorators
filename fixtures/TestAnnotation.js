import { @Annotation } from "../src";

export class TestAnnotation {
    __construct(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }
}

export decorator @TestAnnotation(value) {
    @Annotation(TestAnnotation, new TestAnnotation(value))
}
