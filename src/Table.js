import React from 'react';
import PropTypes from 'prop-types';

import {
  WrapperBar,
  PointsContainerBar,
  CommentsButtonBar,
  StoryContainerBar,
  Wrapper,
  PointsContainer,
  CommentsButton,
  StoryContainer,
  TitleLink,
  FooterLink,
  XButton,
} from './style';

const Table = ({ stories, onDismiss }) =>
  <div className="table">
    <WrapperBar>
      <PointsContainerBar>PTs</PointsContainerBar>
      <CommentsButtonBar>CMTs</CommentsButtonBar>
      <StoryContainerBar>STORY</StoryContainerBar>
    </WrapperBar>

    {stories.map(item =>
      <Wrapper>
        <PointsContainer>{item.points}</PointsContainer>

        {/* <CommentsButton href={'/stories/' + item.objectID + '/comments'}> */}
        <CommentsButton
          target="_blank"
          href={'https://news.ycombinator.com/item?id=' + item.objectID }>
            {item.num_comments}
        </CommentsButton>

        <StoryContainer>
          <TitleLink href={item.url}>{item.title}</TitleLink>
          <FooterLink href={item.url}>{item.url}</FooterLink>
        </StoryContainer>

        <XButton onClick={() => onDismiss(item.objectID)}>
          &#10006;
        </XButton>
      </Wrapper>
    )}

  </div>

Table.propTypes = {
  stories: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Table;
