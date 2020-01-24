import { @Annotation } from '../annotation';

export class Parameter {
    __construct(parameterName) {
        this._parameterName = parameterName;
    }

    get parameterName() {
        return this._parameterName;
    }
}

export decorator @Parameter(serviceId) {
    @Annotation(new Parameter(serviceId))
}
