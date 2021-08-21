import { Test, TestingModule } from '@nestjs/testing'
import { ScrapperService } from './scrapper.service'
import { BadRequestException } from '@nestjs/common'

describe('ScrapperService', () => {
    let service: ScrapperService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ScrapperService],
        }).compile()

        service = module.get<ScrapperService>(ScrapperService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    it('scrap site properly', async () => {
        const testProduct = service.scrapeProductFromUrl(
            'https://www.etsy.com/uk/listing/772695061/brass-or-silver-leaf-bookmark-set',
        )

        await expect(testProduct).resolves.toEqual({
            name: 'Brass or Silver Leaf Bookmark Set',
            image: 'https://i.etsystatic.com/12149676/r/il/b96248/2959017777/il_794xN.2959017777_t44r.jpg',
            price: 9.5,
        })
    })

    it('throw error on invalid site', async () => {
        const testProduct = service.scrapeProductFromUrl('https://www.etsy.com/uk')
        await expect(testProduct).rejects.toThrow(BadRequestException)
    })
})
