import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../ui/global'
import { QueryClient, QueryClientProvider } from 'react-query'
import Navbar from '../components/Navbar'

const queryClient = new QueryClient()

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <Navbar />
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    )
}

export default MyApp
