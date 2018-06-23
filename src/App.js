import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';


// https://github.com/HackerNews/API
// by	  The username of the item's author.
// descendants	 In the case of stories or polls, the total comment count.
// id	  The item's unique id.
// kids	  The ids of the item's comments, in ranked display order.
// score	 The story's score, or the votes for a pollopt.
// time	  Creation date of the item, in Unix Time.
// title	 The title of the story, poll or job.
// type	  The type of item. One of "job", "story", "comment", "poll", or "pollopt".
// url	 The URL of the story.
const stories = [
  {
    "by" : "dhouston",
    "descendants" : 2,
    "rank": 1,
    "id" : 0,
    "kids" : [11, 12],
    "score" : 6,
    "time" : 1175714200,
    "title" : "My YC app: Dropbox",
    "type" : "story",
    "url" : "http://www.getdropbox.com/"
  },
  {
    "by" : "probable",
    "descendants" : 1,
    "rank": 2,
    "id" : 1,
    "kids" : [13],
    "score" : 2,
    "time" : 1245744200,
    "title" : "styled-components",
    "type" : "story",
    "url" : "https://www.styled-components.com/"
  },
];


function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.id !== id;
    const updatedStories = this.state.stories.filter(isNotId);
    this.setState({ stories: updatedStories})
  }

  render() {
    const { searchTerm, stories } = this.state;
    return (
      <BodyStyle>
        <div>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          >
            filter by term:
          </Search>
        </div>
        <Table
          stories={stories}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </BodyStyle>
    );
  }
}

const Search = ({ value, onChange, children }) =>
  <form>
    {children} <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>


const Table = ({ stories, pattern, onDismiss }) =>
  <div className="table">
    <WrapperBar>
      <RankContainerBar>RANK</RankContainerBar>
      <ScoreContainerBar>PTs</ScoreContainerBar>
      <CommentsButtonBar>CMTs</CommentsButtonBar>
      <StoryContainerBar>STORY</StoryContainerBar>
    </WrapperBar>
    {stories.filter(isSearched(pattern)).map(item =>
      <div key={item.id}>
        <Wrapper>
          <RankContainer>{item.rank}</RankContainer>
          <ScoreContainer>{item.score}</ScoreContainer>
          <CommentsButton>{item.descendants}</CommentsButton>

          <StoryContainer>
            <TitleLink href={item.url}>{item.title}</TitleLink>
            <FooterLink href={item.url}>{item.url}</FooterLink>
          </StoryContainer>

          <XButton onClick={() => onDismiss(item.id)}>
            &#10006;
          </XButton>
        </Wrapper>
      </div>
    )}
  </div>

const Button = ({ onClick, className= '', children }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>



const BodyStyle = styled.div`
  background-color: #f5f5f5;
`

/////////////////// BAR ///////////////////
const WrapperBar = styled.div`
  /* border: 1px solid red;  /* For debugging */
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;
const NumberContainerBar = styled.div`
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
const RankContainerBar = styled(NumberContainerBar)`
  background-color: #f57c00;
`;
const ScoreContainerBar = styled(NumberContainerBar)`
  background-color: #ff9800;
`;
const CommentsButtonBar = styled(NumberContainerBar)`
  background-color: #ffb74d;
`;

const StoryContainerBar = styled.div`
  border: 1px solid blue;  /* For debugging */
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
const Wrapper = styled.div`
  /* border: 1px solid red;  /* For debugging */
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: #FFF;
`;

const NumberContainer = styled.div`
  background-color: #000000;
  height: 2rem;
  width: 2rem;
  min-width: 2rem;
  line-height: 2rem;
  border-radius: 0.25rem;
  font-size: 18px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  margin-right: 15px;
`;
const RankContainer = styled(NumberContainer)`
  background-color: #f57c00;
`;
const ScoreContainer = styled(NumberContainer)`
  background-color: #ff9800;
`;

const CommentsButton = styled.button`
  background-color: #ffb74d;
  height: 2rem;
  width: 2rem;
  min-width: 2rem;
  line-height: 2rem;
  border: transparent;
  border-radius: 0.25rem;
  font-size: 18px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  margin-right: 15px;
  &:hover{
    background-color: #f57c00;
  }
`;

const XButton = styled(Button)`
  background-color: #FFF;
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
const StoryContainer = styled.div`
  /* border: 1px solid blue;  /* For debugging */
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
  flex-shrink: 1;
  align-items: flex-start;
`;

const TitleLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener"
})`
  color: #424242;
  font-weight: bold;
  font-size: 15px;
`;

const FooterLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener"
})`
  color: #828282;
  font-size: .25rem;
  text-decoration: none;
  margin: 0px 3px;
`;


export default App;
