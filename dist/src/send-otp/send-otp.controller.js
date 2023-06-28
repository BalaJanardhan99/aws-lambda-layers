"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendOtpController = void 0;
const common_1 = require("@nestjs/common");
const otpLayer = require("../../otp-layer/myFunction");
const redisService = require("../../otp-layer/redisFunction");
let SendOtpController = class SendOtpController {
    sendOTP(mobile_number) {
        var exp = /^(0|91)?[6-9][0-9]{9}$/;
        if (!exp.test(mobile_number)) {
            return 'please enter a valid mobile number';
        }
        else {
            let otp = otpLayer.myFunction();
            console.log(otp);
            console.log(mobile_number);
            return redisService.setOtp(mobile_number, otp);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('mobile_number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], SendOtpController.prototype, "sendOTP", null);
SendOtpController = __decorate([
    (0, common_1.Controller)('send-otp')
], SendOtpController);
exports.SendOtpController = SendOtpController;
//# sourceMappingURL=send-otp.controller.js.map