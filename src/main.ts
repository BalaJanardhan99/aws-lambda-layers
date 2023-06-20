import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createServer, proxy } from 'aws-serverless-express';
import { Context } from 'aws-lambda';

let expressApp;

async function bootstrap() {
  expressApp = await NestFactory.create(AppModule);
  await expressApp.init();
}

bootstrap();

export const handler = (event: any, context: Context) => {
  if (!expressApp) {
    bootstrap().then(() => {
      const server = createServer(expressApp.getHttpAdapter().getInstance());
      proxy(server, event, context);
    });
  } else {
    const server = createServer(expressApp.getHttpAdapter().getInstance());
    proxy(server, event, context);
  }
};
