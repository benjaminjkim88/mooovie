/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';

import * as serviceAccount from './moovie-5447d-firebase-adminsdk-jioh4-1803e057c6.json';


  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });

  async function bootstrap() {
    
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();