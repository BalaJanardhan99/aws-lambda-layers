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
exports.VerifyOtpController = void 0;
const common_1 = require("@nestjs/common");
const redisService = require("../../otp-layer/redisFunction");
let VerifyOtpController = class VerifyOtpController {
    verifyotp(mobile_number, otp) {
        var exp = /^(0|91)?[6-9][0-9]{9}$/;
        if (!exp.test(mobile_number)) {
            return 'please enter a valid mobile number';
        }
        else {
            if (redisService.getOtp(mobile_number) == otp) {
                redisService.deleteOtp(mobile_number);
                return `otp verified successfully for number ${mobile_number}`;
            }
            else if (redisService.getOtp(mobile_number) != otp) {
                return 'the OTP is incorrect, enter correct OTP';
            }
            else {
                return 'No OTP sent for number, try to resend the OTP';
            }
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('mobile_number')),
    __param(1, (0, common_1.Query)('otp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], VerifyOtpController.prototype, "verifyotp", null);
VerifyOtpController = __decorate([
    (0, common_1.Controller)('verify-otp')
], VerifyOtpController);
exports.VerifyOtpController = VerifyOtpController;
//# sourceMappingURL=verify-otp.controller.js.map