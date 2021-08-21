import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ScrapperService } from '../scrapper/scrapper.service'
import { AddProductDto } from './dto/addProduct.dto'
import { ObjectId } from '@mikro-orm/mongodb'

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService, private readonly scrapperService: ScrapperService) {}

    @Get('/:id')
    async get(@Param('id') id: string) {
        if (!ObjectId.isValid(id)) throw new BadRequestException()
        const entity = await this.productsService.getById(id)
        if (!entity) throw new NotFoundException()
        return entity
    }

    @Get('/')
    async getList() {
        return await this.productsService.getAll()
    }

    @Post()
    async createProduct(@Body() body: AddProductDto) {
        if (!body.productUrl) throw new BadRequestException()
        if (!new RegExp('^https://(www.)?etsy.com').test(body.productUrl)) throw new BadRequestException()
        const entityData = await this.scrapperService.scrapeProductFromUrl(body.productUrl)
        return await this.productsService.create(entityData)
    }
}
