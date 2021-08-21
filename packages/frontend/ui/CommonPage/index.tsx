import styled from 'styled-components'

const PageTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem auto;
    max-width: 40rem;
`

const PageTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
`

const PageDescription = styled.h1`
    font-size: 1.3rem;
    font-weight: 400;
    margin-top: 0.5rem;
`

const UICommonPage = {
    PageTitleContainer,
    PageTitle,
    PageDescription,
}

export default UICommonPage
