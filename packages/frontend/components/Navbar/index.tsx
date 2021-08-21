import React from 'react'
import UINavbar from '../../ui/Navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar: React.FunctionComponent = () => {
    const router = useRouter()
    return (
        <UINavbar.Container>
            <UINavbar.Nav>
                <Link href={'/'} passHref>
                    <UINavbar.LinkButton data-active={router.pathname === '/'}>Input Page</UINavbar.LinkButton>
                </Link>
                <Link href={'/products'} passHref>
                    <UINavbar.LinkButton data-active={router.pathname === '/products'}>
                        Product List
                    </UINavbar.LinkButton>
                </Link>
            </UINavbar.Nav>
        </UINavbar.Container>
    )
}

export default Navbar
