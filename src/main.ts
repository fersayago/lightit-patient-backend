import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');

  const port = process.env.PORT || 3000;

  await app.listen(port);
  Logger.log(`Application listening on port ${port}`);
}
bootstrap();
