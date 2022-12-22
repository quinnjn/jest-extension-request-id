"use strict";

var _withMessage = _interopRequireDefault(require("./withMessage"));

var _testWithMessage = _interopRequireDefault(require("./testWithMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.expect = (0, _withMessage.default)(global.expect);
global.test = (0, _testWithMessage.default)(global.test);