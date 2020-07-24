import styled from 'styled-components'
import {Link as LinkRouter} from '@reach/router'
import {FaHeart, FaReply} from 'react-icons/fa'

export const CommentContainer = styled.div`
    margin: 15px 15px;
    width: 92%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 55px;
`

export const List = styled.ul`
    list-style-type: none;
    position: relative;
    margin: 10px 0;
`
export const ListItem = styled.li`
    margin-bottom: 15px;
    display: block;
    position: relative;
    display: flex;

    &:after {
        content: '';
        display: block;
        clear: both;
        height: 0;
        width: 0;
    }
`
// Avatar
export const UserImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-position: center;
`
export const AvatarDiv = styled.div`
    position: relative;
    z-index: 99;
    border: 3px solid #FFF;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0,0,0, 0.2);
`
export const CommentBox = styled.div`
    width: 80%;
    float: right;
    position: relative;
    width: 100%;
`

export const CommentHeader = styled.div`
    height: 35px;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    border-top: 1px solid rgba(0,0,0, 0.1);
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`
export const Link = styled(LinkRouter)`
    color: #03658c;
    text-decoration: none;
    font-weight: 700;
    padding: 0;
    font-size: 14px;
    margin: 0 10px;
`
export const Span = styled.span`
    font-size: 10px;
    font-weight: 500;
    font-style: italic;
`
export const Heart = styled(FaHeart)`
    margin: 0 10px;
`
export const HeartLiked = styled(FaHeart)`
    margin: 0 10px;
    color: red;
`
export const Reply = styled(FaReply)`
    margin: 0 10px;

`

export const CommentText = styled.div`
    width: 95%;
    margin: auto;
`