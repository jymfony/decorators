export decorator @metadata(key, value) {
    @register((target, prop, parameterIndex = null) => {
        if (null !== parameterIndex) {
            MetadataStorage.defineMetadata(key, value, target.prototype[prop] || target[prop], parameterIndex)
        } else {
            MetadataStorage.defineMetadata(key, value, target, prop);
        }
    })
}
