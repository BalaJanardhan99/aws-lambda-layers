import { Test, TestingModule } from '@nestjs/testing';
import { SendOtpController } from './send-otp.controller';

describe('SendOtpController', () => {
  let controller: SendOtpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendOtpController],
    }).compile();

    controller = module.get<SendOtpController>(SendOtpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
