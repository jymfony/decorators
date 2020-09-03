/**
 * GroupSequence annotation.
 *
 * @param {string[]} groups
 */
export decorator @GroupSequence(groups) {
    @register((target, prop, parameterIndex = null) => {
        if (null !== parameterIndex) {
            throw new Exception('GroupSequence decorator cannot be used on parameters');
        }

        const GroupSequence = Jymfony.Component.Validator.Constraints.GroupSequence;
        MetadataStorage.addMetadata(GroupSequence, new GroupSequence(groups), target, prop);
    })
}
