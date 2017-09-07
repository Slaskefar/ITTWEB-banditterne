"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_controller_1 = require("../controllers/index-controller");
var router = express_1.Router();
router.get('/', index_controller_1.IndexController.Index);
router.post('/', index_controller_1.IndexController.Post);
exports.Index = router;
//# sourceMappingURL=index.js.map