import 'dotenv/config'

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'https://budget-buddy-api.up.railway.app/',
    credentials: true,
  })

  await app.listen(3000);
}
bootstrap();
