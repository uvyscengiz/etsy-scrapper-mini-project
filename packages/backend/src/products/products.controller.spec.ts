import { Test, TestingModule } from '@nestjs/testing'
import { ProductsController } from './products.controller'
import { BadRequestException, NotFoundException, Provider } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ObjectId } from '@mikro-orm/mongodb'
import { ScrapperService } from '../scrapper/scrapper.service'

describe('ProductsController', () => {
    const mockId = new ObjectId().toHexString()
    const mockProduct = {
        name: 'Brass or Silver Leaf Bookmark Set',
        image: 'https://i.etsystatic.com/12149676/r/il/b96248/2959017777/il_794xN.2959017777_t44r.jpg',
        price: 9.5,
    }
    let controller: ProductsController

    beforeEach(async () => {
        const ProductionServiceProvider: Provider = {
            provide: ProductsService,
            useFactory: () => ({
                create: jest.fn((entity) => ({
                    ...entity,
                    id: mockId,
                })),
                getById: jest.fn((id) =>
                    id === mockId
                        ? {
                              ...mockProduct,
                              id: mockId,
                          }
                        : null,
                ),
                getAll: jest.fn(() => [
                    {
                        ...mockProduct,
                        id: mockId,
                    },
                ]),
            }),
        }

        const ScrapperServiceProvider: Provider = {
            provide: ScrapperService,
            useFactory: () => ({
                scrapeProductFromUrl: jest.fn(() => mockProduct),
            }),
        }

        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductionServiceProvider, ScrapperServiceProvider],
            controllers: [ProductsController],
        }).compile()

        controller = module.get<ProductsController>(ProductsController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    describe('/products POST', () => {
        it('properly add product', async () => {
            await expect(
                controller.createProduct({
                    productUrl: 'https://www.etsy.com/uk/listing/772695061/brass-or-silver-leaf-bookmark-set',
                }),
            ).resolves.toEqual({
                id: mockId,
                ...mockProduct,
            })
        })

        it('throw error on invalid body', async () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            await expect(controller.createProduct({})).rejects.toThrow(BadRequestException)
        })

        it('throw error on invalid prop type', async () => {
            await expect(
                controller.createProduct({
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    productUrl: true,
                }),
            ).rejects.toThrow(BadRequestException)
        })

        it('throw error on invalid url', async () => {
            await expect(
                controller.createProduct({
                    productUrl: 'https://example.com',
                }),
            ).rejects.toThrow(BadRequestException)
        })
    })

    describe('/products/:id GET', () => {
        it('properly return product', async () => {
            await expect(controller.get(mockId)).resolves.toEqual({
                id: mockId,
                ...mockProduct,
            })
        })

        it('throw on invalid id', async () => {
            await expect(controller.get('invalid')).rejects.toThrow(BadRequestException)
        })

        it('throw on not found id', async () => {
            await expect(controller.get(new ObjectId().toHexString())).rejects.toThrow(NotFoundException)
        })
    })

    describe('/products GET', () => {
        it('properly return product list', async () => {
            await expect(controller.getList()).resolves.toEqual([
                {
                    id: mockId,
                    ...mockProduct,
                },
            ])
        })
    })
})
