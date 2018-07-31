import React from 'react';
import PropTypes from 'prop-types';

import {
  WrapperBar,
  CommentsButtonBar,
  StoryContainerBar,
  Wrapper,
  CommentsButtonImg,
  StoryContainer,
  TitleLink,
  FooterLink,
  XButton
} from '../style';


const SavesList = ({saves, onDismiss}) => {
  return (
    <div className="saves">
      <WrapperBar>
        <CommentsButtonBar>CMTs</CommentsButtonBar>
        <StoryContainerBar>SAVED STORIES</StoryContainerBar>
      </WrapperBar>

      {saves.map(save =>
        <Wrapper key={save.id}>

          <CommentsButtonImg
            target="_blank"
            href={'https://news.ycombinator.com/item?id=' + save.objectID }>
              <i className="fas fa-comment-dots"></i>
          </CommentsButtonImg>

          <StoryContainer>
            <TitleLink href={save.url}>{save.title}</TitleLink>
            <FooterLink href={save.url}>{save.url}</FooterLink>
          </StoryContainer>

          <XButton onClick={() => onDismiss(save)}>
            &#10006;
          </XButton>

        </Wrapper>
      )}
    </div>
  )
}

SavesList.propTypes = {
  saves: PropTypes.array.isRequired
};


export default SavesList;
