import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Microservices API')
    .setDescription('The Microservices API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 4000;
  await app.listen(PORT, () => {
    console.log(
      `API Gateway is running on port ${PORT}, Swagger on http://localhost:${PORT}/api`,
    );
  });
}
bootstrap();
