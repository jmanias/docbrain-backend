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
exports.PatientSchema = exports.Patient = void 0;
var openapi = require("@nestjs/swagger");
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Patient._OPENAPI_METADATA_FACTORY = function () {
        return { firstName: { required: true, type: function () { return String; } }, lastName: { required: true, type: function () { return String; } }, fathersName: { required: true, type: function () { return String; } }, bornDate: { required: true, type: function () { return Date; } }, gender: { required: true, type: function () { return String; } }, address: { required: true, type: function () { return String; } }, city: { required: true, type: function () { return String; } }, state: { required: true, type: function () { return String; } }, postCode: { required: true, type: function () { return String; } }, insuranceType: { required: true, type: function () { return String; } }, insuranceNumber: { required: true, type: function () { return String; } }, phone: { required: true, type: function () { return String; } }, mobilePhone: { required: true, type: function () { return String; } }, email: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "firstName");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "lastName");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "fathersName");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "bornDate");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "gender");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "address");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "city");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "state");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "postCode");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "insuranceType");
    __decorate([
        (0, mongoose_1.Prop)({ unique: true })
    ], Patient.prototype, "insuranceNumber");
    __decorate([
        (0, mongoose_1.Prop)({ unique: true })
    ], Patient.prototype, "phone");
    __decorate([
        (0, mongoose_1.Prop)({ unique: true })
    ], Patient.prototype, "mobilePhone");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Patient.prototype, "email");
    Patient = __decorate([
        (0, mongoose_1.Schema)({ timestamps: true })
    ], Patient);
    return Patient;
}(mongoose_2.Document));
exports.Patient = Patient;
exports.PatientSchema = mongoose_1.SchemaFactory.createForClass(Patient);
