import { @Annotation } from "../annotation";

export class DataProvider {
    /**
     * Constructor.
     *
     * @param {string} provider
     */
    __construct(provider) {
        this._provider = provider;
    }

    /**
     * Gets the provider method name.
     *
     * @returns {string}
     */
    get provider() {
        return this._provider;
    }
}

export decorator @dataProvider(provider) {
    @Annotation(new DataProvider(provider))
}
