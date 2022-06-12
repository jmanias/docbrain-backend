"use strict";
exports.__esModule = true;
exports.GetCurrentUserId = void 0;
var common_1 = require("@nestjs/common");
exports.GetCurrentUserId = (0, common_1.createParamDecorator)(function (data, context) {
    var request = context.switchToHttp().getRequest();
    return request.user['sub'];
});
