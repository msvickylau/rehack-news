import React, { Component } from 'react';
import { StyledInput, StyledForm, SearchButton } from '../style';

// the 'this' object references the DOM node with the ref attribute.
// focuses on the input feild when the component mounted.
class Search extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      value,
      onChange,
      children,
      onSubmit,
    } = this.props;

    return (
      <StyledForm onSubmit={onSubmit}>

        <StyledInput
          type="text"
          value={value}
          onChange={onChange}
          innerRef={(node) => { this.input = node; }}
        />

        <SearchButton type="submit">
          {children}
        </SearchButton>

      </StyledForm>
    );
  }
}

export default Search;
