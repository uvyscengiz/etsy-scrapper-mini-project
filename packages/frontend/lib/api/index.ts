import axios from 'axios'
import { IProduct } from '../../types'

const getBasePath = () => {
    // Server Side
    if (typeof window === 'undefined') return process.env.INTERNAL_API_URL
    // Client Side
    else return process.env.API_URL
}

export const postProduct = (productUrl: string): Promise<IProduct> =>
    axios.post<IProduct>(`${getBasePath()}/products`, { productUrl }).then((result) => result.data)

export const getProduct = (id: string): Promise<IProduct> =>
    axios.get<IProduct>(`${getBasePath()}/products/${id}`).then((result) => result.data)

export const getProductList = (): Promise<Array<IProduct>> =>
    axios.get<Array<IProduct>>(`${getBasePath()}/products`).then((result) => result.data)
