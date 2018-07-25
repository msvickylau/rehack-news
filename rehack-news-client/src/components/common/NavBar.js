import React from 'react';

import {
  StyledNavBar,
  Logo,
  StyledLink,
  LogoStyledLink
} from '../style';

const NavBar = () =>
  <StyledNavBar>
    <Logo>
      <LogoStyledLink to="/">
        HN
      </LogoStyledLink>
    </Logo>

    <StyledLink to="/saves">
      <i className="fas fa-heart"></i>
    </StyledLink>

    <StyledLink to="/signOut">
      Signout
    </StyledLink>
  </StyledNavBar>
;
export default NavBar;
