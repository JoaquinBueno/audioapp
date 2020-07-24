import styled from 'styled-components'

export const SearchInput = styled.input`
    width: 75%;
    height: 22px;
    border: none;
    border: 1px ridge #e0e0e0;
    margin-right: 10px;
`

export const SearchContainer = styled.div`
    padding: .5em 0;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FilterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: .5em 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
`