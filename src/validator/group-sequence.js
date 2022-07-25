import { getPropName } from '../metadata';

/**
 * GroupSequence annotation.
 *
 * @param {string[]} groups
 */
export function GroupSequence(groups) {
    return function(target, context) {
        const parameterIndex = context.parameterIndex === undefined ? null : context.parameterIndex;
        if (null !== parameterIndex) {
            throw new Exception('GroupSequence decorator cannot be used on parameters');
        }

        const GroupSequence = Jymfony.Component.Validator.Constraints.GroupSequence;
        MetadataStorage.addMetadata(GroupSequence, new GroupSequence(groups), target, getPropName(context));
    };
}
