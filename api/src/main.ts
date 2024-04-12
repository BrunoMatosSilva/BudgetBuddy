import 'dotenv/config'

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Request-With', 'Accept'],
    exposedHeaders: ['Authorization'],
    origin: ['http://localhost:5173', 'https://budgetbuddy-x2wz.onrender.com/'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })

  await app.listen(3000);
}
bootstrap();
