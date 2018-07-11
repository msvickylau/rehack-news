import styled from 'styled-components';
import Button from './Button';

export const BodyStyle = styled.div`
  background-color: #f5f5f5;
  border-radius: 0.25rem;
  font-size: 13px;
`

/////////////////// BAR ///////////////////
export const WrapperBar = styled.div`
  /* border: 1px solid red;  /* For debugging */
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;
export const NumberContainerBar = styled.div`
  background-color: #000000;
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
// eslint-disable-next-line
export const RankContainerBar = styled(NumberContainerBar)`
  background-color: #f57c00;
`;
export const PointsContainerBar = styled(NumberContainerBar)`
  background-color: #ff9800;
`;
export const CommentsButtonBar = styled(NumberContainerBar)`
  background-color: #ffb74d;
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
`;


/////////////////// MAIN ///////////////////
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
// eslint-disable-next-line
export const RankContainer = styled(NumberContainer)`
  background-color: #f57c00;
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

export const XButton = styled(Button)`
  background-color: transparent;
  height: 1.6rem;
  width: 1.6rem;
  line-height: 1.6rem;
  border: transparent;
  border-radius: 1rem;
  align-items: center;
  color: #424242;
  font-size: .8rem;
  &:hover{
    background-color: #f57c00;
    color: #FFF;
  }
`

/////////////////// Story Component ///////////////////
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
  font-size: 14px;
  text-decoration: none;
`;

export const FooterLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener"
})`
  color: #828282;
  font-size: 10px;
  text-decoration: none;
`;

/////////////////// FOOTER, ie: loading and more ///////////////////

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
