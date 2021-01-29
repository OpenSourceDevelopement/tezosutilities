import { apiSuccessMessage, httpConstants } from "../../common/constants";
import Utils from "../../utils";
import BLManager from "./blManager";

export default class TezosTestNetController {

    async getAccount(request, response) {
        // Utils.consoleLogger("request ----> ",request);
        lhtWebLog('Account open', `Incoming conversion Request!`, {}, "Ratnesh", httpConstants.LOG_LEVEL_TYPE.INFO);

        let [error, initTezosTestNetAccountResponse] = await Utils.parseResponse(new BLManager().getAccount(request.body));
        if (error)
            return Utils.handleError(error, request, response);

        return Utils.response(response, initTezosTestNetAccountResponse, "Account Created ", httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    };

    async uploadFile(request, response) {
        // Utils.consoleLogger("request ----> ",request);
        lhtWebLog('buyToken', `Incoming uploadFile Request!`, {}, "Ratnesh", httpConstants.LOG_LEVEL_TYPE.INFO);

        let [error, initTezosTestNetAccountResponse] = await Utils.parseResponse(new BLManager().uploadFile(request));
        if (error)
            return Utils.handleError(error, request, response);

        return Utils.response(response, initTezosTestNetAccountResponse, "uploadFile Done ", httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    };


}