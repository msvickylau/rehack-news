import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as saveActions from '../../actions/saveActions';
import SavesList from './SavesList'

import {
  BodyStyle
} from '../style';

class SavesContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      save :this.props.save
    };

  }
  render() {
    return (
      <BodyStyle>
        <SavesList saves={this.props.saves} />
        {/* {console.log(this.props.saves)} */}
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
    saves: state.saves
  };
}

// The connect function is provided by Redux. It subscribes our container component to the store, so that it will be alerted when state changes.
export default connect(mapStateToProps)(SavesContainer);
