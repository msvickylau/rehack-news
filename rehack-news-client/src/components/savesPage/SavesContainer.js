import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/saveActions';
import SavesList from './SavesList'
import { BodyStyle } from '../style';

class SavesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saves: this.props.saves
    };
    this.deleteSave = this.deleteSave.bind(this);
  }

  deleteSave(story) {
    this.props.actions.deleteSave(story);
  }

  render() {
    return (
      <BodyStyle>
        <SavesList
          saves={this.props.saves}
          onDismiss={this.deleteSave}
        />
      </BodyStyle>
    )
  }
}

SavesContainer.propTypes = {
  saves: PropTypes.array.isRequired
};

//The mapStateToProps function recieves state from the store whenever state has changed and make data from that data available to the component as props.
function mapStateToProps(state, ownProps) {
  return {
    saves: state.saves.saves
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// The connect function is provided by Redux. It subscribes our container component to the store, so that it will be alerted when state changes.
export default connect(mapStateToProps, mapDispatchToProps)(SavesContainer);
