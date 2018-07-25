import React from 'react';

import {
  StyledNavBar,
  Logo,
  LogoStyledLink
} from '../style';

const LogInNavBar = () =>
  <StyledNavBar>
    <Logo>
      <LogoStyledLink to="/login">
        HN
      </LogoStyledLink>
    </Logo>
  </StyledNavBar>
;
export default LogInNavBar;
