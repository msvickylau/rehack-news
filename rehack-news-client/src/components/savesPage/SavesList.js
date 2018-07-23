import React, { Component, PropTypes} from 'react';

import {
  Wrapper,
  CommentsButtonImg,
  StoryContainer,
  TitleLink,
  FooterLink,
  XButton
} from '../style';


const SavesList = ({saves}) => {
  return (
    <div className="saves">
      {saves.map(save =>
        <Wrapper key={save.objectID}>

          <CommentsButtonImg
            target="_blank"
            href={'https://news.ycombinator.com/item?id=' + save.objectID }>
              <i className="fas fa-comment-dots"></i>
          </CommentsButtonImg>

          <StoryContainer>
            <TitleLink href={save.url}>{save.title}</TitleLink>
            <FooterLink href={save.url}>{save.url}</FooterLink>
          </StoryContainer>

          <XButton onClick={() => alert('delete this object')}>
            &#10006;
          </XButton>

        </Wrapper>
      )}
    </div>
  )
}

export default SavesList;  
