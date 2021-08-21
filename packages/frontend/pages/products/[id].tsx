import { GetServerSideProps, NextPage } from 'next'
import { IProduct } from '../../types'
import { getProduct } from '../../lib/api'
import UIProductPage from '../../ui/ProductPage'
import UICommonPage from '../../ui/CommonPage'
import Head from 'next/head'
import React from 'react'

interface Props {
    product: IProduct
}

const ProductDetailsPage: NextPage<Props> = ({ product }) => {
    return (
        <>
            <Head>
                <title>Etsy Scrapper - Product Details Page</title>
            </Head>
            <UICommonPage.PageTitleContainer>
                <UICommonPage.PageTitle>Product Details</UICommonPage.PageTitle>
                <UICommonPage.PageDescription>You can view details of added product</UICommonPage.PageDescription>
            </UICommonPage.PageTitleContainer>
            <UIProductPage.Container>
                <UIProductPage.Image src={product.image} />
                <UIProductPage.InfoContainer>
                    <UIProductPage.ProductName>{product.name}</UIProductPage.ProductName>
                    <UIProductPage.ProductPrice>{`Price: $${product.price}`}</UIProductPage.ProductPrice>
                </UIProductPage.InfoContainer>
            </UIProductPage.Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props, { id: string }> = async ({ params }) => {
    let product: IProduct = undefined as unknown as IProduct
    try {
        if (params) product = await getProduct(params.id)
    } catch {}
    return {
        props: {
            product,
        },
        notFound: !product,
    }
}

export default ProductDetailsPage
