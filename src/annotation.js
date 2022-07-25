import { metadata } from './metadata';

export const ANNOTATION_TARGET_CLASS = 0x0001;
export const ANNOTATION_TARGET_METHOD = 0x0002;
export const ANNOTATION_TARGET_FIELD = 0x0004;
export const ANNOTATION_TARGET_GETTER = 0x0008;
export const ANNOTATION_TARGET_SETTER = 0x0010;
export const ANNOTATION_TARGET_ACCESSOR = 0x0020;
export const ANNOTATION_TARGET_PARAMETER = 0x0040;
export const ANNOTATION_TARGET_ALL = 0xFFFF;

const verifyTarget = (target, annotationTarget, name, kind) => {
    if (target & annotationTarget === 0) {
        throw new Error('Annotation @' + name + ' is not valid on ' + kind + ' elements');
    }
}

export function Annotation(target = ANNOTATION_TARGET_ALL) {
    return function(value, context) {
        switch (context.kind) {
            case 'class': verifyTarget(ANNOTATION_TARGET_CLASS, target, context.name, context.kind); break;
            case 'method': verifyTarget(ANNOTATION_TARGET_METHOD, target, context.name, context.kind); break;
            case 'field': verifyTarget(ANNOTATION_TARGET_FIELD, target, context.name, context.kind); break;
            case 'getter': verifyTarget(ANNOTATION_TARGET_GETTER, target, context.name, context.kind); break;
            case 'setter': verifyTarget(ANNOTATION_TARGET_SETTER, target, context.name, context.kind); break;
            case 'accessor': verifyTarget(ANNOTATION_TARGET_ACCESSOR, target, context.name, context.kind); break;
            case 'parameter': verifyTarget(ANNOTATION_TARGET_PARAMETER, target, context.name, context.kind); break;
        }

        return function (...args) {
            if (new.target) {
                return Reflect.construct(value, args);
            }

            return metadata(value);
        };
    }
}
