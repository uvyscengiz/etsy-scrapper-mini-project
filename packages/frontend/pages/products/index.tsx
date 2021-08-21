import { GetServerSideProps, NextPage } from 'next'
import UIProductListPage from '../../ui/ProductListPage'
import { IProduct } from '../../types'
import { getProductList } from '../../lib/api'
import Link from 'next/link'
import UICommonPage from '../../ui/CommonPage'
import Head from 'next/head'
import React from 'react'

interface Props {
    productList: Array<IProduct>
}

const ProductListPage: NextPage<Props> = ({ productList }) => {
    return (
        <>
            <Head>
                <title>Etsy Scrapper - Product List Page</title>
            </Head>
            <UICommonPage.PageTitleContainer>
                <UICommonPage.PageTitle>Product List Page</UICommonPage.PageTitle>
                <UICommonPage.PageDescription>
                    You can view all the added products as table
                </UICommonPage.PageDescription>
            </UICommonPage.PageTitleContainer>
            <UIProductListPage.Container>
                <UIProductListPage.Table>
                    <UIProductListPage.TableHead>
                        <UIProductListPage.TableRow>
                            <UIProductListPage.TableHeader>ID</UIProductListPage.TableHeader>
                            <UIProductListPage.TableHeader>Name</UIProductListPage.TableHeader>
                            <UIProductListPage.TableHeader>Image</UIProductListPage.TableHeader>
                            <UIProductListPage.TableHeader>Price</UIProductListPage.TableHeader>
                        </UIProductListPage.TableRow>
                    </UIProductListPage.TableHead>
                    <UIProductListPage.TableBody>
                        {productList.map((product) => (
                            <UIProductListPage.TableRow key={product.id}>
                                <UIProductListPage.TableCell title={product.id}>
                                    <Link href={'/products/' + product.id} passHref>
                                        <UIProductListPage.TableLink>
                                            {`${product.id.slice(0, 4)}...${product.id.slice(20, 24)}`}
                                        </UIProductListPage.TableLink>
                                    </Link>
                                </UIProductListPage.TableCell>
                                <UIProductListPage.TableCell>{product.name}</UIProductListPage.TableCell>
                                <UIProductListPage.TableCell title={product.id}>
                                    <UIProductListPage.TableLink href={product.image} target={'_blank'}>
                                        {`.../${product.image.split('/').pop()}`}
                                    </UIProductListPage.TableLink>
                                </UIProductListPage.TableCell>
                                <UIProductListPage.TableCell>{`$${product.price}`}</UIProductListPage.TableCell>
                            </UIProductListPage.TableRow>
                        ))}
                    </UIProductListPage.TableBody>
                </UIProductListPage.Table>
            </UIProductListPage.Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {
        props: {
            productList: await getProductList(),
        },
    }
}

export default ProductListPage
