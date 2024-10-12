import { NestFactory } from '@nestjs/core'
import cookieParser from 'cookie-parser'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: process.env['BASE_APP_URL'],
  })
  app.use(cookieParser())

  await app.listen(4000)
}
bootstrap()
