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
exports.OptionSchema = exports.Options = void 0;
var openapi = require("@nestjs/swagger");
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Options = /** @class */ (function (_super) {
    __extends(Options, _super);
    function Options() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Options._OPENAPI_METADATA_FACTORY = function () {
        return { name: { required: true, type: function () { return String; } }, desc: { required: true, type: function () { return String; } }, phone: { required: true, type: function () { return String; } }, email: { required: true, type: function () { return String; } }, address: { required: true, type: function () { return String; } }, city: { required: true, type: function () { return String; } }, postCode: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, mongoose_1.Prop)()
    ], Options.prototype, "name");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Options.prototype, "desc");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Options.prototype, "phone");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Options.prototype, "email");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Options.prototype, "address");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Options.prototype, "city");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Options.prototype, "postCode");
    Options = __decorate([
        (0, mongoose_1.Schema)()
    ], Options);
    return Options;
}(mongoose_2.Document));
exports.Options = Options;
exports.OptionSchema = mongoose_1.SchemaFactory.createForClass(Options);
