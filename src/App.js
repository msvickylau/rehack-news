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
    "id" : 0,
    "kids" : [11, 12],
    "score" : 6,
    "time" : 1175714200,
    "title" : "My YC app: Dropbox - Throw away your USB drive",
    "type" : "story",
    "url" : "http://www.getdropbox.com/u/2/screencast.html"
  },
  {
    "by" : "probable",
    "descendants" : 1,
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
      <div>
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
      </div>
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
    {stories.filter(isSearched(pattern)).map(item =>
      <div key={item.id}>

        <Wrapper>

          <RankContainer>1</RankContainer>
          <ScoreContainer>{item.score}</ScoreContainer>

          <StoryContainer>
            <TitleLink><a href={item.url}>{item.title}</a></TitleLink>
            <FooterWrapper>
              <span>By: {item.by}</span>
              <span>By: {item.time}</span>
            </FooterWrapper>
          </StoryContainer>

          <CommentContainer>{item.descendants}</CommentContainer>

          <Button onClick={() => onDismiss(item.id)}>
            X
          </Button>
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

const Wrapper = styled.div`
  border: 2px solid red;  /* For debugging */
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const ScoreContainer = styled.div`
  background-color: #ffb74d;
  height: 2em;
  width: 2em;
  border-radius: 0.25rem;
  font-size: 14pt;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  line-height: 2em;
`;

const CommentContainer = styled.button`
  background-color: #222;
  border-color: #F39C12;
  border: 1;
    -webkit-box-shadow: 0 0 0 0.1rem;
  height: 2em;
  width: 2em;
  border-radius: 0.25rem;
  font-size: 14pt;
  color: #F39C12;
  text-align: center;
  vertical-align: middle;
  line-height: 2em;
  &:hover{
    background-color: #F39C12;
    color: #222;
  }
`;

const StoryContainer = styled.div`
  border: 2px solid blue;  /* For debugging */
  display: flex;
  flex-grow: 2;
  justify-content: left;
  flex-direction: column;
`;


const RankContainer = styled.div`
  background-color: #ff9800;
  height: 2em;
  width: 2em;
  border-radius: 0.25rem;
  font-size: 14pt;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  line-height: 2em;
`;

const TitleLink = styled.div`
  border: 1px solid red;  /* For debugging */
  font-size: 11pt;
  display: flex;
`;

const FooterWrapper = styled.div`
  border: 1px solid green;  /* For debugging */
  font-size: 8pt;
  color: #828282;
  display: flex;
`;

export default App;
