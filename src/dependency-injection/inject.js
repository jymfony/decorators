import {
    Annotation,
    ANNOTATION_TARGET_FIELD,
    ANNOTATION_TARGET_METHOD,
    ANNOTATION_TARGET_PARAMETER,
    ANNOTATION_TARGET_SETTER
} from '../annotation';

@Annotation(ANNOTATION_TARGET_PARAMETER | ANNOTATION_TARGET_FIELD | ANNOTATION_TARGET_SETTER | ANNOTATION_TARGET_METHOD)
export class Inject {
    __construct(serviceId, invalidBehavior) {
        this._serviceId = serviceId;
        this._invalidBehavior = invalidBehavior;
    }

    get serviceId() {
        return this._serviceId;
    }

    get invalidBehavior() {
        return this._invalidBehavior;
    }
}
