const privateTargets = new WeakMap();
export const getMetadataTarget = (target, context) => {
    if (typeof context.name === 'string' && context.private) {
        if (! privateTargets.has(target)) {
            privateTargets.set(target, new Map());
        }

        const storage = privateTargets.get(target);
        if (! storage.has(context.name)) {
            const o = Object.create(null);
            o.symbol = Symbol('private ' + context.name);

            storage.set(context.name, Object.freeze(o));
        }

        return storage.get(context.name);
    }

    return target.prototype[context.name] || target[context.name];
};

export const getPropName = (context) => {
    switch (context.kind) {
        case 'getter':
            return '#getter ' + String(context.name);

        case 'setter':
            return '#setter ' + String(context.name);

        case 'accessor':
            return '#accessor ' + String(context.name);
    }

    return null;
}

export function metadata(key, value) {
    return function (target, context) {
        if (undefined === value && !! key && typeof key === 'object') {
            value = key;
            key = value.constructor;
        }

        const prop = getPropName(context);
        const parameterIndex = context.parameterIndex === undefined ? null : context.parameterIndex;

        if (null !== parameterIndex) {
            MetadataStorage.defineMetadata(key, value, getMetadataTarget(target, context), parameterIndex)
        } else {
            MetadataStorage.defineMetadata(key, value, target, prop);
        }
    }
}
