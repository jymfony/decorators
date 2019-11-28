export class Route {
    __construct({
        path,
        localizedPaths = {},
        name = undefined,
        requirements = {},
        options = {},
        defaults = {},
        host = undefined,
        methods = [ 'GET', 'POST' ],
        schemes = [ 'http', 'https' ],
        condition = undefined,
        locale = undefined,
        format = undefined,
    }) {
        this._path = path;
        this._localizedPaths = localizedPaths;
        this._name = name;
        this._requirements = requirements;
        this._options = options;
        this._defaults = defaults;
        this._host = host;
        this._methods = methods;
        this._schemes = schemes;
        this._condition = condition;
        this._locale = locale;
        this._format = format;
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

    get locale() {
        return this._locale;
    }

    get format() {
        return this._format;
    }
}

/**
 * Route annotation.
 *
 * @param {object} options
 * @param {string} options.path
 * @param {Object.<string, string>} [options.localizedPaths = {}]
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
export decorator @Route(options) {
    @register((target, prop) =>
        MetadataStorage.addMetadata(Route, new Route(isString(options) ? { path: options } : options), target, prop)
    )
}

/**
 * GET Route annotation.
 *
 * @param {object} options
 * @param {string} options.path
 * @param {Object.<string, string>} [options.localizedPaths = {}]
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
export decorator @Get(options) {
    @Route(isString(options) ? { path: options, methods: [ 'GET' ] } : { ...options, methods: [ 'GET' ] })
}

/**
 * POST Route annotation.
 *
 * @param {object} options
 * @param {string} options.path
 * @param {Object.<string, string>} [options.localizedPaths = {}]
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
export decorator @Post(options) {
    @Route(isString(options) ? { path: options, methods: [ 'POST' ] } : { ...options, methods: [ 'POST' ] })
}

/**
 * PUT Route annotation.
 *
 * @param {object} options
 * @param {string} options.path
 * @param {Object.<string, string>} [options.localizedPaths = {}]
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
export decorator @Put(options) {
    @Route(isString(options) ? { path: options, methods: [ 'PUT' ] } : { ...options, methods: [ 'PUT' ] })
}

/**
 * DELETE Route annotation.
 *
 * @param {object} options
 * @param {string} options.path
 * @param {Object.<string, string>} [options.localizedPaths = {}]
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
export decorator @Delete(options) {
    @Route(isString(options) ? { path: options, methods: [ 'DELETE' ] } : { ...options, methods: [ 'DELETE' ] })
}

/**
 * PATCH Route annotation.
 *
 * @param {object} options
 * @param {string} options.path
 * @param {Object.<string, string>} [options.localizedPaths = {}]
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
export decorator @Patch(options) {
    @Route(isString(options) ? { path: options, methods: [ 'PATCH' ] } : { ...options, methods: [ 'PATCH' ] })
}
