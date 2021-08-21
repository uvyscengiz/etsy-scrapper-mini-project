import styled from 'styled-components'
import { darken } from 'polished'

const Container = styled.div`
    width: 100%;
    height: 4rem;
    background: #50c878;
    padding: 0.75rem 0;
`

const Nav = styled.nav`
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const LinkButton = styled.a<{ 'data-active'?: boolean }>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.75rem;
    height: 100%;
    color: whitesmoke;
    font-size: 1.1rem;
    border-radius: 0.5rem;
    background: ${darken(0.15, '#50c878')};
    margin: 0 0.5rem;
    font-weight: 700;
    text-decoration: ${(props) => (props['data-active'] ? 'underline' : 'none')};

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
`

const UINavbar = {
    Container,
    Nav,
    LinkButton,
}

export default UINavbar
