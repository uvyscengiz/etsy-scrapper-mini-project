import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { ObjectId } from '@mikro-orm/mongodb'

export interface IProductEntity {
    _id: ObjectId
    name: string
    image: string
    price: number
}

@Entity({
    collection: 'products',
})
export class ProductsEntity extends BaseEntity<IProductEntity, '_id'> implements IProductEntity {
    @PrimaryKey()
    _id: ObjectId

    @Property()
    name: string

    @Property()
    image: string

    @Property()
    price: number
}
