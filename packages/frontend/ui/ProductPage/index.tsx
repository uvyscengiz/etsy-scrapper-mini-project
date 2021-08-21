import { rgba } from 'polished'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin: 4rem auto;
    border-radius: 2rem;
    max-width: 30rem;
    box-shadow: 0 0 10px 2.5px ${rgba('black', 0.25)};
    background: #ffffff;
    display: flex;
    padding: 1rem;
`

const Image = styled.img`
    height: 100%;
    max-height: 15rem;
    margin: auto 0;
    border-radius: 2rem;
`

const InfoContainer = styled.div`
    height: 100%;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const ProductName = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
`

const ProductPrice = styled.span`
    font-size: 1.3rem;
    margin-top: 0.5rem;
    text-align: center;
`

const UIProductPage = {
    Container,
    Image,
    InfoContainer,
    ProductName,
    ProductPrice,
}

export default UIProductPage
