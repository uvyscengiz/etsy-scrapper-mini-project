import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'
import { ExclamationCircle, Spinner } from '@styled-icons/fa-solid'

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 4rem auto;
    max-width: 30rem;
    height: 4rem;
    border-radius: 2rem;
    box-shadow: 0 0 10px 2.5px ${rgba('black', 0.25)};
    background: #ffffff;
`

const Input = styled.input`
    padding: 0 4.5rem 0 1rem;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    border-radius: inherit;
    font-size: 1rem;
`

const AddButton = styled.button`
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: inherit;
    border: none;
    background: #90ee90;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
`

const ErrorContainer = styled.div`
    position: absolute;
    top: 4.75rem;
    left: 0;
    width: 100%;
    background: #ff7f7f;
    padding: 0.5rem;
    border-radius: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ErrorCode = styled.span`
    font-size: 1.1rem;
    font-weight: 700;
    margin-right: 0.25rem;
`

const ErrorMessage = styled.span`
    font-size: 1rem;
    font-weight: 400;
`

const ErrorIcon = styled(ExclamationCircle)`
    width: 1.5rem;
    color: red;
    height: auto;
    margin-right: 0.5rem;
`

const SpinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const SpinnerIcon = styled(Spinner)`
    animation: ${SpinAnimation} 1s linear infinite;
    width: 1.75rem;
    height: 1.75rem;
    margin: auto;
`

const UIIndexPage = {
    Container,
    Input,
    AddButton,
    ErrorContainer,
    ErrorIcon,
    ErrorCode,
    ErrorMessage,
    SpinnerIcon,
}

export default UIIndexPage
