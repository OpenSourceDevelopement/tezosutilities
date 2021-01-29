/**
 * Created by Ratnesh on 18/09/19.
 */


"use strict";
import { apiFailureMessage, genericConstants, httpConstants, stringConstants } from "../common/constants";
import moment from "moment";

export default class Utils {
    static response(res, data, message, success, code) {
        let messageObj = {
            "param": "",
            "msg": message,
        };
        let responseObj = {
            responseData: data,
            message: [messageObj],
            success: success,
            responseCode: code
        };
        res.format({
            json: () => {
                res.send(responseObj);
            }
        });
    }

    static responseForValidation(res, data, errorArray, success, code = 500) {
        let responseObj = {
            responseData: data,
            message: errorArray,
            success: success,
            responseCode: code
        };
        res.format({
            json: () => {
                res.send(responseObj);
            }
        });
    }

    static returnRejection(message, responseCode) {
        const msg = message ? message : apiFailureMessage.INTERNAL_SERVER_ERROR;
        const code = responseCode ? responseCode : httpConstants.RESPONSE_CODES.SERVER_ERROR;
        return Promise.reject({ message: msg, code: code });
    }

    static handleError(err, req, res) {
        if (!res)
            return false;
        err = err || {};
        const msg = err.message ? err.message : apiFailureMessage.INTERNAL_SERVER_ERROR;
        const code = err.code ? err.code : httpConstants.RESPONSE_CODES.SERVER_ERROR;
        this.response(res, {}, msg, httpConstants.RESPONSE_STATUS.FAILURE, code);
    }

    /**
     *              This function is made to handle success and error callback!
     * @param promise
     * @returns {Promise<Promise|Bluebird<*[] | R>|Bluebird<any | R>|*|Promise<T | *[]>>}
     */
    static async parseResponse(promise) {
        return promise.then(data => {
            return [null, data];
        }).catch(err => [err]);
    }

    /**
     *
     * @param title
     * @param data
     */
    static consoleLogger(title, data) {
        console.log("Tezos API Log -> " + title + "  :  ", data);
    }


    /**
     *
     * @param functionName
     * @param message
     * @param payload:should be in object form
     * @param developerAlias
     * @param requestID
     * @param type
     * @param timestamp
     * @constructor
     */
    static lhtLog(functionName, message, payload, developerAlias, type = 'info') {
        let timestamp = moment(new Date()).format('MMM D HH:mm:ss.SSS');
        console.log('[ ' + timestamp + ` ] ${type}: ${functionName}: ${message}: ${JSON.stringify(payload)}: Developer : ${developerAlias}`);
    }


}