import { rgba } from 'polished'
import styled from 'styled-components'

const Container = styled.div`
    margin: 4rem auto;
    border-radius: 2rem;
    width: 85%;
    box-shadow: 0 0 10px 2.5px ${rgba('black', 0.25)};
    background: #ffffff;
    display: flex;
    padding: 1rem;
`

const Table = styled.table`
    width: 100%;
    border-radius: 2rem;
    overflow: hidden;
`

const TableRow = styled.tr`
    display: flex;
    width: 100%;
    padding: 0.5rem 0;
`

const TableHeader = styled.th`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex: 1;
    font-size: 1.2rem;
`

const TableCell = styled.td`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.5rem;
    flex: 1;
    font-size: 1.1rem;
    text-align: center;
`

const TableHead = styled.thead`
    width: 100%;

    ${TableRow} {
        background: #f0fff0;
    }
`

const TableBody = styled.thead`
    width: 100%;

    ${TableRow} {
        &:nth-child(even) {
            background: #f5f5f5;
        }
    }
`

const TableLink = styled.a`
    color: black;
    text-decoration: underline;
`

const UIProductListPage = {
    Container,
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableHeader,
    TableCell,
    TableLink,
}

export default UIProductListPage
