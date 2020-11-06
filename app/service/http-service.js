import request from 'request';
import Utils from '../../app/utils';

/**
 * execute Http Request request
 */
class HttpService {
    static async excuteHTTPRequest(method, hostname, path, data, headers) {
        return await new Promise(function(fulfill, reject) {
            request({
                url: hostname + path,
                method: method,
                headers: headers,
                json: data
            }, function(error, response, body) {
                console.log('body:-', body);
                if (error) {
                    console.log("err" + error);
                    reject(error);
                } else {
                    fulfill(body);
                }
            });
        });
    }

    static httpRequest(method, hostname, path, data = {}, headers = '', requestID = '0') {
        return new Promise(function(fulfill, reject) {
            request({ url: hostname + path, method: method, headers: headers, family: 4, json: data },
                function(error, response, body, ) {
                    if (error) {
                        Utils.consoleLogger("httpRequest : error", error);
                        reject(error);
                    } else {
                        fulfill(body);
                    }
                });
        });
    }
}

module.exports = HttpService;