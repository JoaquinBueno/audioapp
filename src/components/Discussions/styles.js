import styled from 'styled-components'
import {Link as LinkRouter} from '@reach/router'


export const DebContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
`
export const DebItem = styled.div`
    /* width: 90%;
    background: rgba(232, 232, 232, 1);
    box-shadow: 2px 2px 4px rgba(0,0,0, 0.3);
    border-radius: 10px;
    margin: 1em 0;
    padding: 10px; */
    padding: 0;
    position: relative;
    margin: 1em 0;
    
`
export const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: bottom;
    border-radius: 10px;
    /* margin: 1em 0; */
    /* padding: 0; */
    
`
export const Link = styled(LinkRouter)`
    text-decoration: none;
`
// export const P = styled.p`
//     text-decoration: none;
//     color: #151E21;
//     text-align: center;
//     font-size: 16px;
//     font-weight: 700;
    
// `