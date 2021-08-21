import { NextPage } from 'next'
import UIIndexPage from '../ui/IndexPage'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { postProduct } from '../lib/api'
import { IProduct } from '../types'
import { useRouter } from 'next/router'
import UICommonPage from '../ui/CommonPage'
import Head from 'next/head'

interface IErrorBox {
    errorCode: string
    errorMessage: string
}

const IndexPage: NextPage = () => {
    const router = useRouter()
    const [errorBox, setErrorBox] = useState<IErrorBox | undefined>()
    const [urlInput, setUrlInput] = useState<string>('')

    const mutation = useMutation(postProduct, {
        onError: (err: any) => {
            setErrorBox({
                errorCode: err.response.statusText,
                errorMessage: err.message,
            })
        },
        onSuccess: (product: IProduct) => {
            router.replace('/products/' + product.id)
        },
    })

    return (
        <>
            <Head>
                <title>Etsy Scrapper - Input Page</title>
            </Head>
            <UICommonPage.PageTitleContainer>
                <UICommonPage.PageTitle>Input Page</UICommonPage.PageTitle>
                <UICommonPage.PageDescription>
                    Enter your etsy product link to input box below
                </UICommonPage.PageDescription>
            </UICommonPage.PageTitleContainer>
            <UIIndexPage.Container>
                <UIIndexPage.Input value={urlInput} onChange={({ target }) => setUrlInput(target.value)} type={'url'} />
                <UIIndexPage.AddButton
                    type={'button'}
                    disabled={mutation.isLoading}
                    onClick={() => {
                        if (!new RegExp('^https://(www.)?etsy.com').test(urlInput))
                            setErrorBox({
                                errorCode: 'InvalidUrl',
                                errorMessage: 'Entered url must starts with "https:/etsy.com"',
                            })
                        setErrorBox(undefined)
                        mutation.mutate(urlInput)
                    }}
                >
                    {mutation.isLoading ? <UIIndexPage.SpinnerIcon /> : 'Add'}
                </UIIndexPage.AddButton>
                {errorBox && (
                    <UIIndexPage.ErrorContainer>
                        <UIIndexPage.ErrorIcon />
                        <UIIndexPage.ErrorCode>{errorBox.errorCode}:</UIIndexPage.ErrorCode>
                        <UIIndexPage.ErrorMessage>{errorBox.errorMessage}</UIIndexPage.ErrorMessage>
                    </UIIndexPage.ErrorContainer>
                )}
            </UIIndexPage.Container>
        </>
    )
}

export default IndexPage
