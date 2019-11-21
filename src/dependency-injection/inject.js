import { @Annotation } from '../annotation';

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

export decorator @Inject(serviceId, invalidBehavior) {
    @Annotation(Inject, new Inject(serviceId, invalidBehavior))
}
