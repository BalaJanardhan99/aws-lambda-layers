import { Module } from '@nestjs/common';
import { SendOtpController } from './send-otp.controller';

@Module({
  controllers: [SendOtpController]
})
export class SendOtpModule {}
