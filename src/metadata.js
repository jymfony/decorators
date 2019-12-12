const privateTargets = new WeakMap();
export const getMetadataTarget = (target, prop) => {
    if (typeof prop === 'string' && prop[0] === '#') {
        if (! privateTargets.has(target)) {
            privateTargets.set(target, new Map());
        }

        const storage = privateTargets.get(target);
        if (! storage.has(prop)) {
            const o = Object.create(null);
            o.symbol = Symbol('private ' + prop);

            storage.set(prop, Object.freeze(o));
        }

        return storage.get(prop);
    }

    return target.prototype[prop] || target[prop];
};

export decorator @metadata(key, value) {
    @register((target, prop, parameterIndex = null) => {
        if (null !== parameterIndex) {
            MetadataStorage.defineMetadata(key, value, getMetadataTarget(target, prop), parameterIndex)
        } else {
            MetadataStorage.defineMetadata(key, value, target, prop);
        }
    })
}
