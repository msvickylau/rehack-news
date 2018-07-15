import React, { Component } from 'react';
import {
  BodyStyle,
  WrapperBar,
  StoryContainerBar,
  Wrapper,
  StoryContainer,
  TitleLink,
  FooterLink,
  XButton
} from './style';

class Saves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saves: [],
    };
  }

  componentDidMount() {
    fetch('/api/users/2')
    .then(response => response.json())
    .then(saves => this.setState({saves: saves})
    )
  }

  render() {
    return (
      <BodyStyle>
        <div className="saves">
          <WrapperBar>
            <StoryContainerBar>SAVED STORIES</StoryContainerBar>
          </WrapperBar>

          {this.state.saves.map(save =>
            <Wrapper key={save.objectID}>

              <StoryContainer>
                <TitleLink href={save.url}>{save.title}</TitleLink>
                <FooterLink href={save.url}>{save.url}</FooterLink>
              </StoryContainer>

              <XButton onClick={() => alert('delete this object')}>
                &#10006;
              </XButton>

            </Wrapper>
          )}
        </div>
      </BodyStyle>
    )
  }
}

export default Saves;
