import TezosController from "../app/modules/tezos";


const upload = require("../middleware/fileUpload")


module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('<div style="display: flex; flex:1; height: 100% ; justify-content: center; align-items: center; min-height: 100vh !important; font-size: 24px !important;\">Micro Service is working fine</div>');
    });

    app.post('/getAccount', new TezosController().getAccount);

    app.post('/uploadFile', upload.single('upl'), new TezosController().uploadFile)



};