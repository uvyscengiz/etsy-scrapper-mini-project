import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ProductsModule } from './products/products.module'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { AppConfig } from './types'
import { ScrapperModule } from './scrapper/scrapper.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
        MikroOrmModule.forRootAsync({
            useFactory: (configService: ConfigService<AppConfig>) => ({
                clientUrl: configService.get('MONGODB_URL'),
                autoLoadEntities: true,
                type: 'mongo',
            }),
            inject: [ConfigService],
        }),
        ProductsModule,
        ScrapperModule,
    ],
})
export class AppModule {}
