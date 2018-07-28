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
      <LogoStyledLink to="/topStories">
        HN
      </LogoStyledLink>
    </Logo>

    <StyledLink to="/saves">
      <i className="fas fa-heart"></i>
    </StyledLink>

    <StyledLink to="/">
      <i className="fas fa-search"></i>
    </StyledLink>

  </StyledNavBar>
;
export default NavBar;
