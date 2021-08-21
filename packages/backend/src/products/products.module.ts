import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { ProductsEntity } from './products.entity'
import { ScrapperModule } from '../scrapper/scrapper.module'

@Module({
    imports: [MikroOrmModule.forFeature([ProductsEntity]), ScrapperModule],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
