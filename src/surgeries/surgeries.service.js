"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.SurgeriesService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var surgery_entity_1 = require("./entities/surgery.entity");
var SurgeriesService = /** @class */ (function () {
    function SurgeriesService(surgeryModel, patientsService) {
        this.surgeryModel = surgeryModel;
        this.patientsService = patientsService;
    }
    SurgeriesService.prototype.findAll = function (paginationQuery) {
        var limit = paginationQuery.limit, offset = paginationQuery.offset;
        return this.surgeryModel.find().skip(offset).limit(limit).exec();
    };
    SurgeriesService.prototype.findSurgeryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var surgery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id.match(/^[0-9a-fA-F]{24}$/)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.surgeryModel
                                .findById(id)
                                .populate('user', 'firstName lastName email role')
                                .populate('patient')
                                .exec()];
                    case 1:
                        surgery = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!surgery) {
                            throw new common_1.NotFoundException("Surgery ".concat(id, " not found"));
                        }
                        return [2 /*return*/, surgery];
                }
            });
        });
    };
    SurgeriesService.prototype.create = function (createSurgeryDto, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var surgery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.patientsService.findPatientById(createSurgeryDto.patient)];
                    case 1:
                        _a.sent();
                        surgery = new this.surgeryModel(__assign(__assign({}, createSurgeryDto), { user: userId }));
                        return [2 /*return*/, surgery.save()];
                }
            });
        });
    };
    SurgeriesService.prototype.update = function (id, updateSurgeryDto) {
        return __awaiter(this, void 0, void 0, function () {
            var existingSurgery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!updateSurgeryDto.patient) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.patientsService.findPatientById(updateSurgeryDto.patient)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!id.match(/^[0-9a-fA-F]{24}$/)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.surgeryModel
                                .findOneAndUpdate({ _id: id }, { $set: updateSurgeryDto }, { "new": true })
                                .exec()];
                    case 3:
                        existingSurgery = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!existingSurgery) {
                            throw new common_1.NotFoundException("Surgery ".concat(id, " not found"));
                        }
                        return [2 /*return*/, existingSurgery];
                }
            });
        });
    };
    SurgeriesService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var surgery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findSurgeryById(id)];
                    case 1:
                        surgery = _a.sent();
                        if (!surgery) {
                            throw new common_1.NotFoundException("Surgery ".concat(id, " not found"));
                        }
                        return [2 /*return*/, surgery.remove()];
                }
            });
        });
    };
    SurgeriesService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, mongoose_1.InjectModel)(surgery_entity_1.Surgery.name))
    ], SurgeriesService);
    return SurgeriesService;
}());
exports.SurgeriesService = SurgeriesService;
