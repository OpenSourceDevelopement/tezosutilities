export const httpConstants = {

    METHOD_TYPE: {
        POST: 'POST',
        GET: 'GET',
        PUT: 'PUT'
    },
    HEADER_TYPE: {
        URL_ENCODED: 'application/x-www-form-urlencoded',
        APPLICATION_JSON: 'application/json',
    },
    HEADER_KEYS: {
        DEVICE_TYPE: 'device-type',
        DEVICE_ID: 'device-id',
        SESSION_TOKEN: 'session-token',
        PUSH_TOKEN: 'push-token',
    },
    DEVICE_TYPE: {
        ANDROID: 'android',
        IOS: 'ios',
        WEB: 'web'
    },
    CONTENT_TYPE: {
        URL_ENCODE: 'application/x-www-form-urlencoded'
    },

    RESPONSE_STATUS: {
        SUCCESS: true,
        FAILURE: false
    },
    RESPONSE_CODES: {
        UNAUTHORIZED: 401,
        SERVER_ERROR: 500,
        NOT_FOUND: 404,
        OK: 200,
        NO_CONTENT_FOUND: 204,
        BAD_REQUEST: 400,
        FORBIDDEN: 403,
        GONE: 410,
        UNSUPPORTED_MEDIA_TYPE: 415,
        TOO_MANY_REQUEST: 429
    },
    LIMB_SVC_END_POINT: {
        PERMISSION_LIST_BY_QUERY: '/permission-list-by-query'
    },
    LOG_LEVEL_TYPE: {
        INFO: 'info',
        ERROR: 'error',
        WARN: 'warn',
        VERBOSE: 'verbose',
        DEBUG: 'debug',
        SILLY: 'silly',
        FUNCTIONAL: "functional",
        HTTP_REQUEST: 'http request'
    }
};