import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Alymente - API Documentation')
    .setDescription('')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addServer('http://localhost')
    .build();

  const options = {
    customSiteTitle: 'Alymente - Swagger',
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document, options);
}
bootstrap();
