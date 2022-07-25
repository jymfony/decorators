import { Annotation, ANNOTATION_TARGET_CLASS, ANNOTATION_TARGET_METHOD } from '../annotation';

@Annotation(ANNOTATION_TARGET_CLASS | ANNOTATION_TARGET_METHOD)
export class Route {
    /**
     * Route annotation.
     *
     * @param {object} options
     * @param {string | Object.<string, string>} options.path
     * @param {string} [options.name]
     * @param {Object.<string, string>} [options.requirements = {}]
     * @param {Object.<string, string>} [options.options = {}]
     * @param {Object.<string, string>} [options.defaults = {}]
     * @param {string} [options.host]
     * @param {string[]} [options.methods = ['GET', 'POST']]
     * @param {string[]} [options.schemes = ['http', 'https']]
     * @param {string} [options.condition]
     * @param {string} [options.locale]
     * @param {string} [options.format]
     */
    __construct(options) {
        if (isString(options)) {
            options = { path: options };
        }

        const {
            path,
            name,
            requirements,
            routeOptions,
            defaults,
            host,
            methods,
            schemes,
            condition,
            locale,
            format,
        } = options;

        if (isObjectLiteral(path)) {
            this._localizedPaths = path;
        } else {
            this._path = path;
        }

        this._name = name;
        this._requirements = requirements;
        this._options = routeOptions;
        this._defaults = defaults;
        this._host = host;
        this._methods = methods;
        this._schemes = schemes;
        this._condition = condition;

        if (locale) {
            this._defaults = (this._defaults || {});
            this._defaults._locale = locale;
        }

        if (format) {
            this._defaults = (this._defaults || {});
            this._defaults._format = format;
        }
    }

    get path() {
        return this._path;
    }

    get localizedPaths() {
        return this._localizedPaths;
    }

    get name() {
        return this._name;
    }

    get requirements() {
        return this._requirements;
    }

    get options() {
        return this._options;
    }

    get defaults() {
        return this._defaults;
    }

    get host() {
        return this._host;
    }

    get methods() {
        return this._methods;
    }

    get schemes() {
        return this._schemes;
    }

    get condition() {
        return this._condition;
    }
}

/**
 * GET Route annotation.
 *
 * @param {object} options
 * @param {string | Object.<string, string>} options.path
 * @param {string} [options.name]
 * @param {Object.<string, string>} [options.requirements = {}]
 * @param {Object.<string, string>} [options.options = {}]
 * @param {Object.<string, string>} [options.defaults = {}]
 * @param {string} [options.host]
 * @param {string[]} [options.schemes = ['http', 'https']]
 * @param {string} [options.condition]
 * @param {string} [options.locale]
 * @param {string} [options.format]
 */
export class Get extends Route {
    __construct(options) {
        super.__construct(isString(options) ? { path: options, methods: [ 'GET' ] } : { ...options, methods: [ 'GET' ] });
    }
}

/**
 * POST Route annotation.
 *
 * @param {object} options
 * @param {string | Object.<string, string>} options.path
 * @param {string} [options.name]
 * @param {Object.<string, string>} [options.requirements = {}]
 * @param {Object.<string, string>} [options.options = {}]
 * @param {Object.<string, string>} [options.defaults = {}]
 * @param {string} [options.host]
 * @param {string[]} [options.schemes = ['http', 'https']]
 * @param {string} [options.condition]
 * @param {string} [options.locale]
 * @param {string} [options.format]
 */
export class Post extends Route {
    __construct(options) {
        super.__construct(isString(options) ? { path: options, methods: [ 'POST' ] } : { ...options, methods: [ 'POST' ] });
    }
}

/**
 * PUT Route annotation.
 *
 * @param {object} options
 * @param {string | Object.<string, string>} options.path
 * @param {string} [options.name]
 * @param {Object.<string, string>} [options.requirements = {}]
 * @param {Object.<string, string>} [options.options = {}]
 * @param {Object.<string, string>} [options.defaults = {}]
 * @param {string} [options.host]
 * @param {string[]} [options.schemes = ['http', 'https']]
 * @param {string} [options.condition]
 * @param {string} [options.locale]
 * @param {string} [options.format]
 */
export class Put extends Route {
    __construct(options) {
        super.__construct(isString(options) ? { path: options, methods: [ 'PUT' ] } : { ...options, methods: [ 'PUT' ] });
    }
}

/**
 * DELETE Route annotation.
 *
 * @param {object} options
 * @param {string | Object.<string, string>} options.path
 * @param {string} [options.name]
 * @param {Object.<string, string>} [options.requirements = {}]
 * @param {Object.<string, string>} [options.options = {}]
 * @param {Object.<string, string>} [options.defaults = {}]
 * @param {string} [options.host]
 * @param {string[]} [options.schemes = ['http', 'https']]
 * @param {string} [options.condition]
 * @param {string} [options.locale]
 * @param {string} [options.format]
 */
export class Delete extends Route {
    __construct(options) {
        super.__construct(isString(options) ? { path: options, methods: [ 'DELETE' ] } : { ...options, methods: [ 'DELETE' ] });
    }
}

/**
 * PATCH Route annotation.
 *
 * @param {object} options
 * @param {string | Object.<string, string>} options.path
 * @param {string} [options.name]
 * @param {Object.<string, string>} [options.requirements = {}]
 * @param {Object.<string, string>} [options.options = {}]
 * @param {Object.<string, string>} [options.defaults = {}]
 * @param {string} [options.host]
 * @param {string[]} [options.schemes = ['http', 'https']]
 * @param {string} [options.condition]
 * @param {string} [options.locale]
 * @param {string} [options.format]
 */
export class Patch extends Route {
    __construct(options) {
        super.__construct(isString(options) ? { path: options, methods: [ 'PATCH' ] } : { ...options, methods: [ 'PATCH' ] });
    }
}
