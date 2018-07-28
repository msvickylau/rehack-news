import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as saveActions from '../../actions/topStoriesActions';
// import TopStoriesList from './TopStoriesList'

import {
  BodyStyle, Wrapper, StoryContainer, TitleLink, FooterLink
} from '../style';

class TopStoriesContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      topStories :this.props.topStories
    };
  }

  render() {
    return (
      <BodyStyle>
        {console.log(this.props.topStories)}

        {this.props.topStories.map(item =>
          <Wrapper key={item.id}>
            <StoryContainer>
              <TitleLink href={item.url}>{item.title}</TitleLink>
              <FooterLink href={item.url}>{item.url}</FooterLink>
            </StoryContainer>
          </Wrapper>

        )}



        {/* <TopStoriesList
          topStories={this.props.topStories}
          onDismiss={this.onDismiss}
          onSave={this.saveStory}
        /> */}


      </BodyStyle>
    );
  }

}

TopStoriesContainer.propTypes = {
  topStories: PropTypes.array.isRequired
};

//The mapStateToProps function recieves state from the store whenever state has changed and make data from that data available to the component as props.
function mapStateToProps(state, ownProps) {
  return {
    topStories: state.topStories
  };
}

// The connect function is provided by Redux. It subscribes our container component to the store, so that it will be alerted when state changes.
export default connect(mapStateToProps)(TopStoriesContainer);
