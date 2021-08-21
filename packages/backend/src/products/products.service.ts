import { Injectable } from '@nestjs/common'
import { EntityRepository, ObjectId } from '@mikro-orm/mongodb'
import { IProductEntity, ProductsEntity } from './products.entity'
import { InjectRepository } from '@mikro-orm/nestjs'

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity) private readonly productsRepository: EntityRepository<ProductsEntity>,
    ) {}

    async getById(entityId: string): Promise<ProductsEntity | null> {
        const entity = await this.productsRepository.findOne({
            _id: new ObjectId(entityId),
        })
        if (!entity) return null
        return entity
    }

    async getAll(): Promise<Array<ProductsEntity>> {
        return await this.productsRepository.findAll()
    }

    async create(product: Omit<IProductEntity, '_id'>): Promise<ProductsEntity> {
        const newProduct = this.productsRepository.create({
            ...product,
        })
        await this.productsRepository.persistAndFlush(newProduct)
        return newProduct
    }
}
