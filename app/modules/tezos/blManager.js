import { httpConstants, apiFailureMessage, genericConstants, notificationConstants, AMQP_CONSTANTS } from "../../common/constants";
import Utils from "../../utils";

const conseiljssoftsigner = require('conseiljs-softsigner');
const conseiljs = require('conseiljs');
const httpService = require('../../service/http-service');
import * as Config from "../../../config";


export default class TezosTestNetManager {


    async getAccount() {
        let response;
        try {

            const mnemonic = await conseiljssoftsigner.KeyStoreUtils.generateMnemonic();
            const keystore = await conseiljssoftsigner.KeyStoreUtils.restoreIdentityFromMnemonic(mnemonic, '');
            response = {
                phrase: mnemonic,
                pkh: keystore.publicKeyHash,
                publicKey: keystore.publicKey,
                secretKey: keystore.secretKey
            }

        } catch (e) {
            response = {
                err: "Internal Error"
            }

        }
        return response;
    };


    async uploadFile(requestBody) {


        return {
            success: true,
            fileName: requestBody.file.key
        }
    }


}