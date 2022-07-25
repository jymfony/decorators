import { Annotation, ANNOTATION_TARGET_CLASS } from '../src';

@Annotation(ANNOTATION_TARGET_CLASS)
export class TestAnnotation {
    __construct(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }
}
