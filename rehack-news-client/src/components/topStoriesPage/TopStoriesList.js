import React from 'react';
import PropTypes from 'prop-types';

import {
  WrapperBar,
  PointsContainerBar,
  CommentsButtonBar,
  SaveContainerBar,
  StoryContainerBar,
  Wrapper,
  PointsContainer,
  CommentsButton,
  StoryContainer,
  TitleLink,
  FooterLink,
  XButton,
  HeartButton
} from '../style';

const TopStoriesList = ({topStories, onDismiss, onSave }) =>
  <div className="topStories">
    <WrapperBar>
      <PointsContainerBar>PTs</PointsContainerBar>
      <CommentsButtonBar>CMTs</CommentsButtonBar>
      <SaveContainerBar>SAVE</SaveContainerBar>
      <StoryContainerBar>STORY</StoryContainerBar>
    </WrapperBar>


    {topStories.map(item =>
      <Wrapper key={item.id}>
        <PointsContainer>{item.points}</PointsContainer>

        <CommentsButton
          target="_blank"
          href={'https://news.ycombinator.com/item?id=' + item.id }> num
            {/* {item.num_comments} */}
        </CommentsButton>

        <HeartButton onClick={() => onSave(item)}>
          <i className="fas fa-heart"></i>
        </HeartButton>

        <StoryContainer>
          <TitleLink href={item.url}>{item.title}</TitleLink>
          <FooterLink href={item.url}>{item.url}</FooterLink>
        </StoryContainer>


        <XButton onClick={() => onDismiss(item.id)}>
          &#10006;
        </XButton>

      </Wrapper>
    )}

  </div>

TopStoriesList.propTypes = {
  topStories: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default TopStoriesList;
