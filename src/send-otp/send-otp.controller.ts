import { Controller, Get  } from '@nestjs/common';
import { Console } from 'console';
// import  { myFunction } from '../otp-layer/myFunction';
import * as otpLayer from '/opt/nodejs/otp-layer';

@Controller('send-otp')
export class SendOtpController {
    @Get()
    sendOTP(): string {
        let otp = otpLayer.myFunction();
        console.log(otp)
        return `OTP Send Successfully - ${otp}`;
    }

    // myFunction() : any{
    //     return Math.floor(100000 + Math.random() * 900000)
    // }
}
