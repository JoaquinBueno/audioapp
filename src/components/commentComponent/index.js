import React from 'react'
import {UserImage, Link, List, CommentHeader, Reply, Span, CommentText,
     CommentContainer, ListItem, AvatarDiv, CommentBox} from './styles'
import {LikeButton} from '../likeToggleBtn'

export const CommentComponent = ({user, imgSrc, userLink, commentUser}) => {
    return(
        <>
            <CommentContainer>
                <List>
                    <ListItem>
                            <AvatarDiv>
                                <UserImage src={imgSrc} alt=''/>
                            </AvatarDiv> 
                            <CommentBox>
                                <CommentHeader>
                                        <div>
                                            
                                            <Link to={userLink} className='author'>{user}</Link>
                                            <Span>Hace N Minutos</Span>
                                            
                                        </div>
                                        <div>
                                            <LikeButton/>
                                            <Reply size='16px'/>
                                        </div>

                                    
                                </CommentHeader>
                                <CommentText className='Comment content'>
                                    {commentUser}
                                </CommentText>
                            </CommentBox>
                    </ListItem>
                </List>
            </CommentContainer>
        </>
    )
}