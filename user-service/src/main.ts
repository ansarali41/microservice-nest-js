import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4001,
    },
  });
  await app.listen().then(() => {
    console.log('User Service is running on port 4001');
  });
}
bootstrap();
