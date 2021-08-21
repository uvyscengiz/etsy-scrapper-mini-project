import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppConfig } from './types'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['content-type'],
    })

    const configService = app.get<ConfigService<AppConfig>>(ConfigService)

    await app.listen(parseInt(configService.get('PORT') ?? '4005', 10))
}

bootstrap()
