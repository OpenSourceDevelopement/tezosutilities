import APP from 'express';
import Utils from "./app/utils";
import Config from "./config";
import routes from './routes';
import { httpConstants } from './app/common/constants';

let app = new APP();
require('./config/express')(app);

global.lhtWebLog = Utils.lhtLog;

class Server {
    static listen() {
        app.listen(Config.PORT);
        lhtWebLog('listen', `Server Started on port ${Config.PORT}`, {}, httpConstants.LOG_LEVEL_TYPE.INFO);
        routes(app);
    }
}

Server.listen();