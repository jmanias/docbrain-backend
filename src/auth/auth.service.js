"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var user_entity_1 = require("../users/entities/user.entity");
var argon = require("argon2");
var app_config_1 = require("../config/app.config");
var AuthService = /** @class */ (function () {
    function AuthService(jwtService) {
        this.jwtService = jwtService;
    }
    AuthService.prototype.signupLocal = function (createUserDto) {
        return __awaiter(this, void 0, Promise, function () {
            var hash, isUserExists, existingUsers, newUser, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, argon.hash(createUserDto.password)];
                    case 1:
                        hash = _a.sent();
                        return [4 /*yield*/, this.userModel
                                .findOne({ email: createUserDto.email })
                                .exec()];
                    case 2:
                        isUserExists = _a.sent();
                        if (isUserExists) {
                            throw new common_1.BadRequestException('Email already exists');
                        }
                        createUserDto.password = hash;
                        return [4 /*yield*/, this.userModel.countDocuments()];
                    case 3:
                        existingUsers = _a.sent();
                        if (existingUsers === 0) {
                            createUserDto.active = true;
                        }
                        return [4 /*yield*/, new this.userModel(createUserDto)];
                    case 4:
                        newUser = _a.sent();
                        return [4 /*yield*/, newUser.save()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.getTokens(newUser.id, newUser.email)];
                    case 6:
                        tokens = _a.sent();
                        return [4 /*yield*/, this.updateRtHash(newUser.id, tokens.refresh_token)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, tokens];
                }
            });
        });
    };
    AuthService.prototype.signinLocal = function (loginDto) {
        return __awaiter(this, void 0, Promise, function () {
            var user, passwordMatches, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userModel.findOne({ email: loginDto.email }).exec()];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw new common_1.ForbiddenException('Access Denied');
                        return [4 /*yield*/, argon.verify(user.password, loginDto.password)];
                    case 2:
                        passwordMatches = _a.sent();
                        if (!passwordMatches)
                            throw new common_1.ForbiddenException('Access Denied');
                        return [4 /*yield*/, this.getTokens(user.id, user.email)];
                    case 3:
                        tokens = _a.sent();
                        return [4 /*yield*/, this.updateRtHash(user.id, tokens.refresh_token)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, tokens];
                }
            });
        });
    };
    AuthService.prototype.logout = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userModel.updateMany({
                            id: userId,
                            hashedRt: { $ne: null }
                        }, { $set: { hashedRt: null } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.refreshTokens = function (userId, rt) {
        return __awaiter(this, void 0, void 0, function () {
            var user, rtMatches, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userModel.findById(userId).exec()];
                    case 1:
                        user = _a.sent();
                        if (!user || !user.hashedRt)
                            throw new common_1.ForbiddenException('Access Denied');
                        return [4 /*yield*/, argon.verify(user.hashedRt, rt)];
                    case 2:
                        rtMatches = _a.sent();
                        if (!rtMatches)
                            throw new common_1.ForbiddenException('Access Denied');
                        return [4 /*yield*/, this.getTokens(user.id, user.email)];
                    case 3:
                        tokens = _a.sent();
                        return [4 /*yield*/, this.updateRtHash(user.id, tokens.refresh_token)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, tokens];
                }
            });
        });
    };
    AuthService.prototype.updateRtHash = function (userId, rt) {
        return __awaiter(this, void 0, void 0, function () {
            var hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, argon.hash(rt)];
                    case 1:
                        hash = _a.sent();
                        return [4 /*yield*/, this.userModel
                                .findOneAndUpdate({ _id: userId }, { hashedRt: hash }, { "new": true })
                                .exec()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getTokens = function (userId, email) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, at, rt;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.jwtService.signAsync({
                                sub: userId,
                                email: email
                            }, {
                                secret: (0, app_config_1["default"])().jwtSecretAt,
                                expiresIn: 60 * 15
                            }),
                            this.jwtService.signAsync({
                                sub: userId,
                                email: email
                            }, {
                                secret: (0, app_config_1["default"])().jwtSecretRt,
                                expiresIn: 60 * 60 * 24 * 7
                            }),
                        ])];
                    case 1:
                        _a = _b.sent(), at = _a[0], rt = _a[1];
                        return [2 /*return*/, {
                                access_token: at,
                                refresh_token: rt
                            }];
                }
            });
        });
    };
    __decorate([
        (0, mongoose_1.InjectModel)(user_entity_1.User.name)
    ], AuthService.prototype, "userModel");
    AuthService = __decorate([
        (0, common_1.Injectable)()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
