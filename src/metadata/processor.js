import { getMetadataTarget } from '../metadata';

export class Processor {
    constructor() {
        throw new Error('Cannot be constructed');
    }
}

export decorator @Processor(T) {
    @register((target, prop, parameterIndex = null) => {
        if (null !== parameterIndex) {
            throw new Exception('Processor decorator could be used on classes only');
        }

        MetadataStorage.defineMetadata(Processor, T, getMetadataTarget(target, prop), parameterIndex)
    })
}
