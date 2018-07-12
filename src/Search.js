import React, { Component } from 'react';
import { StyledInput, NavBar, Logo, StyledForm, SearchButton } from './style';

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
      onSubmit,
    } = this.props;

    return (
      <NavBar>
        <Logo>HN</Logo>

        <StyledForm onSubmit={onSubmit}>

          <StyledInput
            type="text"
            value={value}
            onChange={onChange}
            innerRef={(node) => { this.input = node; }}
          />

          <SearchButton type="submit">
            <i class="fas fa-search"></i>
          </SearchButton>

        </StyledForm>

      </NavBar>
    );
  }
}

export default Search;
