import { getMetadataTarget, getPropName } from './metadata';

export function Type(T) {
    return function(target, context) {
        const parameterIndex = context.parameterIndex === undefined ? null : context.parameterIndex;
        if (null === parameterIndex) {
            throw new Exception('Type decorator could be used on parameters only');
        }

        MetadataStorage.defineMetadata(Type, T, getMetadataTarget(target, getPropName(context)), parameterIndex)
    };
}
