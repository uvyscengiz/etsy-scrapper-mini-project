import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
    }

    img[data-src] {
        filter: blur(5px);
    }

    #__next {
        position: relative;
        min-height: 100vh;
        background: #F5F5F5;
    }
`

export default GlobalStyle
