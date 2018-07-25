import React, { Component } from 'react';
import { LoginWrapper, LoginButton, StyledNavBar, Logo, LoginBkrd } from '../style';

const authorizeUrl = 'https://github.com/login/oauth/authorize'
const clientId = '1ce2374b913d6fb1b1ab'
const scope = 'user'

class Login extends Component {

  render() {
    return (
      <LoginWrapper>
        <LoginBkrd>

          <StyledNavBar>
            <Logo>HN</Logo>
          </StyledNavBar>

          <h2>HELLO THERE</h2>
          <h4>login to browse and save stories</h4>

          <LoginButton
            target="_blank"
            href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}
          >
            <i className="fab fa-github"></i>{'  '}
            LOGIN WITH GITHUB
          </LoginButton>

        </LoginBkrd>
      </LoginWrapper>
    )
  }
}

export default Login;
