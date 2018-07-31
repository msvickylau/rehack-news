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
      saves: this.props.saves
    };
  }

  onDismiss = (story) => {
    const url = `http://localhost:3001/api/v1/saves/${story.id}`

    let data = {
      id: story.id,
    }

    fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'text'
      }
    })
    .then(response => response.text())
    .catch(error => console.error(`This is the fetch error message=\n`, error));
  }

  render() {
    return (
      <BodyStyle>
        <SavesList
          saves={this.props.saves}
          onDismiss={this.onDismiss}
        />
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
