import { Controller, Get } from '@nestjs/common';

@Controller('verify-otp')
export class VerifyOtpController {
    @Get()
    verifyotp(): string {
        return 'OTP Verified Successfully';
    }
}
