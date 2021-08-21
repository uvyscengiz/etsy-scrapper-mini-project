import { BadRequestException, Injectable } from '@nestjs/common'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { IProductEntity } from '../products/products.entity'

@Injectable()
export class ScrapperService {
    async scrapeProductFromUrl(url: string): Promise<Omit<IProductEntity, '_id'>> {
        const response = await axios.get<string>(url)
        const pageHtml = response.data

        const {
            window: { document },
        } = new JSDOM(pageHtml)

        const productName = document.querySelector('h1[data-buy-box-listing-title="true"]')?.textContent?.trim()
        if (!productName) throw new BadRequestException()

        const productPriceText = document
            .querySelector('div[data-buy-box-region="price"] p')
            ?.textContent?.trim()
            ?.slice(1)
        if (!productPriceText) throw new BadRequestException()

        const priceTextMatchList = /\d+(\.\d+)?/.exec(productPriceText)
        if (!priceTextMatchList) throw new BadRequestException()

        const productPrice = parseFloat(priceTextMatchList[0])
        if (isNaN(productPrice)) throw new BadRequestException()

        const productImage = (
            document.querySelector('div[data-component="listing-page-image-carousel"] img') as HTMLImageElement
        )?.src
        if (!productImage) throw new BadRequestException()

        return {
            name: productName,
            image: productImage,
            price: productPrice,
        }
    }
}
