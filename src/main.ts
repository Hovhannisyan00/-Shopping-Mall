import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SERVER_CONFIG } from 'configurations/env.config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = SERVER_CONFIG.APP_PORT || 3000;
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('My Project API')
    .setDescription('API documentation for My Project')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
  console.log(`Server is running on port ${PORT}`);
}

bootstrap();
