import { getMetadataTarget } from '../metadata';

export const Processor = Symbol('Processor');
export decorator @Processor(T) {
    @register((target, prop, parameterIndex = null) => {
        if (null === parameterIndex) {
            throw new Exception('Processor decorator could be used on parameters only');
        }

        MetadataStorage.defineMetadata(Processor, T, getMetadataTarget(target, prop), parameterIndex)
    })
}
