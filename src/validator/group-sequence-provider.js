export class GroupSequenceProvider {
}

/**
 * GroupSequenceProvider annotation.
 */
export decorator @GroupSequenceProvider() {
@register((target, prop, parameterIndex = null) => {
    if (null !== parameterIndex) {
        throw new Exception('Route decorator cannot be used on parameters');
    }

    MetadataStorage.addMetadata(GroupSequenceProvider, new GroupSequenceProvider(), target, prop);
})
}
