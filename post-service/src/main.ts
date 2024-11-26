import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4002,
    },
  });
  await app.listen().then(() => {
    console.log('Post Service is running on port 4002');
  });
}
bootstrap();
