export const Type = Symbol('Type');

export decorator @Type(T) {
    @register((target, prop, parameterIndex = null) => {
        if (null === parameterIndex) {
            throw new Exception('Type decorator could be used on parameters only');
        }

        MetadataStorage.defineMetadata(Type, T, target.prototype[prop] || target[prop], parameterIndex)
    })
}
