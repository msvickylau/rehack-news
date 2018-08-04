import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as saveActions from '../../actions/saveActions';
import * as dismissActions from '../../actions/topStoriesActions';
import TopStoriesList from './TopStoriesList'
import { BodyStyle } from '../style';

class TopStoriesContainer extends Component {
  constructor(props, context) {
    super(props, context);
    console.log("from the container... WHY IS THIS EMPTY :(  ")
    console.log(this.props.topStories)
    this.state = {
      topStories: this.props.topStories,
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.saveStory = this.saveStory.bind(this);
  }

  onDismiss(story) {
    this.props.dismissActions.dismissStory(story);
  }

  saveStory(story) {
    const data = {
      objectID: story.id,
      title: story.title,
      url: story.url
    }
    this.props.saveActions.createSave(data);
    this.props.dismissActions.dismissStory(story);
  }


  render() {
    return (
      <BodyStyle>

        <TopStoriesList
          topStories={this.props.topStories}
          onDismiss={this.onDismiss}
          onSave={this.saveStory}
        />

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
    topStories: state.topStories.topStories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveActions: bindActionCreators(saveActions, dispatch),
    dismissActions: bindActionCreators(dismissActions, dispatch)
  };
}

// The connect function is provided by Redux. It subscribes our container component to the store, so that it will be alerted when state changes.
export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesContainer);
