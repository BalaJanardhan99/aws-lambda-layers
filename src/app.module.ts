import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendOtpModule } from './send-otp/send-otp.module';
import { VerifyOtpController } from './verify-otp/verify-otp.controller';
import { VerifyOtpModule } from './verify-otp/verify-otp.module';

@Module({
  imports: [SendOtpModule, VerifyOtpModule],
  controllers: [AppController, VerifyOtpController],
  providers: [AppService],
})
export class AppModule {}
