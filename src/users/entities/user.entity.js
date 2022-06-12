"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserSchema = exports.User = void 0;
var openapi = require("@nestjs/swagger");
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var class_validator_1 = require("class-validator");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User._OPENAPI_METADATA_FACTORY = function () {
        return { firstName: { required: true, type: function () { return String; } }, lastName: { required: true, type: function () { return String; } }, email: { required: true, type: function () { return String; } }, password: { required: true, type: function () { return String; }, minLength: 6 }, role: { required: true, type: function () { return String; } }, language: { required: true, type: function () { return String; } }, active: { required: true, type: function () { return Boolean; } }, hashedRt: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, mongoose_1.Prop)()
    ], User.prototype, "firstName");
    __decorate([
        (0, mongoose_1.Prop)()
    ], User.prototype, "lastName");
    __decorate([
        (0, mongoose_1.Prop)({ unique: true })
    ], User.prototype, "email");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, class_validator_1.MinLength)(6, { message: 'Your Password should be at least 6 characters' })
    ], User.prototype, "password");
    __decorate([
        (0, mongoose_1.Prop)()
    ], User.prototype, "role");
    __decorate([
        (0, mongoose_1.Prop)()
    ], User.prototype, "language");
    __decorate([
        (0, mongoose_1.Prop)()
    ], User.prototype, "active");
    __decorate([
        (0, mongoose_1.Prop)()
    ], User.prototype, "hashedRt");
    User = __decorate([
        (0, mongoose_1.Schema)({ timestamps: true })
    ], User);
    return User;
}(mongoose_2.Document));
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
