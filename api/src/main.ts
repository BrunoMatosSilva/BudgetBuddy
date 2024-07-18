import 'dotenv/config'

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: '*'
  })

  const port = process.env.PORT || 3000; // Usa a variável de ambiente PORT ou 3000 como padrão
  await app.listen(port);
}
bootstrap();
