import styled from 'styled-components';
import Button from './common/Button';
import {  Link  } from 'react-router-dom';

//////////////////////////////////////////////////////////////
//       LOGIN
//////////////////////////////////////////////////////////////
export const LoginButton = styled.a`
  background-color: #ffb74d;
  line-height: 3rem;
  border: transparent;
  border-radius: 0.25rem;
  font-size: 18px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  padding: 15px;
  &:hover{
    background-color: #f57c00;
  }
`;

export const LoginWrapper = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export const LoginBkrd = styled.div`
  background-color: white;
  height: 230px;
  min-width: 300px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;

//////////////////////////////////////////////////////////////
//       NavBar
//////////////////////////////////////////////////////////////
export const StyledNavBar = styled.div`
  background-color: #ff9800;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  /* border: 1px solid green;  /* For debugging */
`;

export const Logo = styled.div`
  height: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  vertical-align: middle;
  margin-right: 15px;
  font-weight: bold;
  display: flex;
  flex-grow: 1;
  color: #fff;
  /* border: 2px solid pink;  /* For debugging */
`;

export const LogoStyledLink = styled(StyledLink)`
  margin-left: 0px;
  font-size: 1.8rem;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  float: right;
  margin-left: 20px;
  font-size: 1.2rem;

  &:hover{
    color: #eee;
  }
`;

//////////////////////////////////////////////////////////////
//       SEARCH FORM
//////////////////////////////////////////////////////////////
export const StyledForm = styled.form`
  /*border: 2px solid pink;  /* For debugging */
  display: flex;
  flex-grow: 1;
`;

export const StyledInput = styled.input`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 1;
  align-items: flex-start;
  outline: none;
  border: none;
  padding-left: .5rem;
  height: 1.8rem;
  line-height: 1.8rem;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  font-size: 13px;
  /* border: 1px solid blue;  /* For debugging */
`;

export const SearchButton = styled.button`
  background-color: #ffb74d;
  line-height: 1.6rem;
  width: 3rem;
  align-items: center;
  color: #424242;
  font-size: .8rem;
  outline: none;
  border: none;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  &:hover{
    background-color: #f57c00;
    color: #FFF;
  }
`

//////////////////////////////////////////////////////////////
//       MAIN BAR
//////////////////////////////////////////////////////////////
export const WrapperBar = styled.div`
  /* border: 1px solid red;  /* For debugging */
  display: flex;
  justify-content: space-between;
  padding: 15px 10px 10px;
  align-items: center;
  background-color: transparent;
`;

export const NumberContainerBar = styled.div`
  height: 1.3rem;
  width: 2rem;
  min-width: 2rem;
  line-height: 1.3rem;
  border-radius: 0.25rem;
  font-size: 10px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  margin-right: 15px;
  font-weight: bold;
`;

export const PointsContainerBar = styled(NumberContainerBar)`
  background-color: #ff9800;
`;
export const CommentsButtonBar = styled(NumberContainerBar)`
  background-color: #ffb74d;
`;

export const SaveContainerBar = styled(NumberContainerBar)`
  background-color: none;
  color: #ffb74d;
`;

export const StoryContainerBar = styled.div`
  /* border: 1px solid blue;  /* For debugging */
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
  flex-shrink: 1;
  align-items: flex-start;
  font-size: 10px;
  font-weight: bold;
  text-align: left;
`;

//////////////////////////////////////////////////////////////
//       MAIN BODY
//////////////////////////////////////////////////////////////
export const BodyStyle = styled.div`
  background-color: #f5f5f5;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  font-size: 13px;
`

export const Wrapper = styled.div`
  /* border: 1px solid red;  /* For debugging */
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: #FFF;
`;

export const NumberContainer = styled.div`
  background-color: #000000;
  height: 2rem;
  width: 2rem;
  min-width: 2rem;
  max-width: 2rem;
  line-height: 2rem;
  border-radius: 0.25rem;
  font-size: 13px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  margin-right: 15px;
`;

export const PointsContainer = styled(NumberContainer)`
  background-color: #ff9800;
`;

export const CommentsButton = styled.a`
  background-color: #ffb74d;
  height: 2rem;
  width: 2em;
  min-width: 2rem;
  max-width: 2rem;
  line-height: 2rem;
  border: transparent;
  border-radius: 0.25rem;
  font-size: 13px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  margin-right: 15px;
  text-decoration: none;
  &:hover{
    background-color: #f57c00;
  }
`;

export const CommentsButtonImg = styled(CommentsButton)`
  font-size: 18px;
`

export const HeartButton = styled(Button)`
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  min-width: 2rem;
  max-width: 2rem;
  line-height: 2rem;
  border: transparent;
  border-radius: 1rem;
  align-items: center;
  outline: none;
  border: none;
  color: #ffb74d;
  font-size: .8rem;
  margin-right: 15px;
  &:hover{
    background-color: #f57c00;
    color: #FFF;
  }
`

export const XButton = styled(HeartButton)`
  color: #424242;
  margin-right: 0px;
`

//////////////////////////////////////////////////////////////
//       Story Component
//////////////////////////////////////////////////////////////
export const StoryContainer = styled.div`
  /* border: 1px solid blue;  /* For debugging */
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
  flex-shrink: 1;
  align-items: flex-start;
`;

export const TitleLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener"
})`
  color: #424242;
  font-weight: bold;
  font-size: 1em;
  text-decoration: none;
  &:hover{
    color: #f57c00;
  }
`;

export const FooterLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener"
})`
  color: #828282;
  font-size: .75em;
  text-decoration: none;
`;

//////////////////////////////////////////////////////////////
//    FOOTER, ie: loading and more
//////////////////////////////////////////////////////////////
export const MoreButton = styled.div`
  background-color: #ffb74d;
  height: 2rem;
  line-height: 2rem;
  border: transparent;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  font-size: 14px;
  color: #fff;
  text-align: center;
  vertical-align: middle;

  &:hover{
    background-color: #f57c00;
  }
`;

export const MoreLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const Loading = styled.div`
  background-color: #ffb74d;
  height: 2rem;
  line-height: 2rem;
  border: transparent;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  font-size: 14px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
`;
