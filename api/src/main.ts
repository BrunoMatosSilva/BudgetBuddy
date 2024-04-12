import 'dotenv/config'

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    allowedHeaders: ['content-type', 'authorization'],
    origin: ['http://localhost:5173', 'https://budgetbuddy-x2wz.onrender.com/'],
    credentials: true,
  })


  await app.listen(3000);
}
bootstrap();
