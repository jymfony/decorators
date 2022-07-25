import { @Annotation } from "../annotation";
import {AfterEach} from "./after-each";

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

export function dataProvider(provider) {
    return function (value) {
        return Annotation(new DataProvider(provider))(value);
    };
}
