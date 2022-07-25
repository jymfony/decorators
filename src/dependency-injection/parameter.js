import {
    Annotation,
    ANNOTATION_TARGET_FIELD,
    ANNOTATION_TARGET_PARAMETER,
    ANNOTATION_TARGET_SETTER
} from '../annotation';

@Annotation(ANNOTATION_TARGET_PARAMETER | ANNOTATION_TARGET_FIELD | ANNOTATION_TARGET_SETTER)
export class Parameter {
    __construct(parameterName) {
        this._parameterName = parameterName;
    }

    get parameterName() {
        return this._parameterName;
    }
}

