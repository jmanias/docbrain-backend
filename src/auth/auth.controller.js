"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AuthController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var guards_1 = require("../common/guards");
var decorators_1 = require("../common/decorators");
var AuthController = /** @class */ (function () {
    function AuthController(authService) {
        this.authService = authService;
    }
    AuthController.prototype.signupLocal = function (createUserDto) {
        return this.authService.signupLocal(createUserDto);
    };
    AuthController.prototype.signinLocal = function (loginDto) {
        return this.authService.signinLocal(loginDto);
    };
    AuthController.prototype.logout = function (userId) {
        return this.authService.logout(userId);
    };
    AuthController.prototype.refreshTokens = function (userId, refreshToken) {
        return this.authService.refreshTokens(userId, refreshToken);
    };
    __decorate([
        (0, decorators_1.Public)(),
        (0, common_1.Post)('local/signup'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Body)())
    ], AuthController.prototype, "signupLocal");
    __decorate([
        (0, decorators_1.Public)(),
        (0, common_1.Post)('local/signin'),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        __param(0, (0, common_1.Body)())
    ], AuthController.prototype, "signinLocal");
    __decorate([
        (0, common_1.Post)('logout'),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
        __param(0, (0, decorators_1.GetCurrentUserId)())
    ], AuthController.prototype, "logout");
    __decorate([
        (0, decorators_1.Public)(),
        (0, common_1.UseGuards)(guards_1.RtGuard),
        (0, common_1.Post)('refresh'),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
        __param(0, (0, decorators_1.GetCurrentUserId)()),
        __param(1, (0, decorators_1.GetCurrentUser)('refreshToken'))
    ], AuthController.prototype, "refreshTokens");
    AuthController = __decorate([
        (0, swagger_1.ApiTags)('auth'),
        (0, common_1.Controller)('auth')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
