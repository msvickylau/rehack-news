import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const DEFAULT_QUERY = 'react';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }


  // 1. get the hits and page from the result.
  // 2. check if there are already old hits. True if !==0, show hits.
    // If page is 0, it is a new swearch request from componentDidMount or onSearchSubmit.
  // 3. merge old and new hits from the recent API request with spread operator
  // 4. set the merged hits and page in the local component state.
  setSearchTopStories(result) {
    const { hits, page } = result;

    const oldHits = page !== 0
    ? this.state.result.hits
    : [];

    const updatedHits = [
      ...oldHits,
      ...hits
    ];

    this.setState({
      result: { hits: updatedHits, page}
    });
  }

  //Every additional fetch should fetch the next page by providing the second argument. The page argument uses the JavaScript ES6 default parameter to introduce the fallback to page 0 in case no defined page argument is provided for the function.
  fetchSearchTopStories(searchTerm, page=0) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}\
${page}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  componentDidMount() {
    const { searchTerm } = this.state; this.fetchSearchTopStories(searchTerm);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

//fetches results from the HackerNews API when execuiting a search in the Search Component.
//this method uses the same functionality as the componentDidMount() lifecycle method, but with a modified search term from the local state and not with the initial default search term.
  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotId);
    this.setState({
      result: { ...this.state.result, hits: updatedHits }
    });
  }

  render() {
    const { searchTerm, result } = this.state;
    //defauly page to 0 since render() method is called before the data is fetched asynchronously in the componentDidMount() lifecycle method.
    const page = (result && result.page) || 0;
    return (
      <BodyStyle>
        <div>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            search
          </Search>
        </div>
        { result &&
          <Table
            stories={result.hits}
            onDismiss={this.onDismiss}
          />
        }
        <div className="interactions">
          <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
            More Stories
          </Button>
        </div>
      </BodyStyle>
    );
  }
}
export default App;


const Search = ({
  value,
  onChange,
  onSubmit,
  children
}) =>
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <button type="submit">
      {children}
    </button>
</form>


const Table = ({ stories, onDismiss }) =>
  <div className="table">
    <WrapperBar>
      {/* // eslint-disable-next-line */}
      {/* <RankContainerBar>RANK</RankContainerBar> */}
      <PointsContainerBar>PTs</PointsContainerBar>
      <CommentsButtonBar>CMTs</CommentsButtonBar>
      <StoryContainerBar>STORY</StoryContainerBar>
    </WrapperBar>
    {stories.map(item =>
      <div key={item.objectID}>
        <Wrapper>
          {/* // eslint-disable-next-line */}
          {/* <RankContainer>{item.rank}</RankContainer> */}
          <PointsContainer>{item.points}</PointsContainer>
          <CommentsButton>{item.num_comments}</CommentsButton>

          <StoryContainer>
            <TitleLink href={item.url}>{item.title}</TitleLink>
            <FooterLink href={item.url}>{item.url}</FooterLink>
          </StoryContainer>

          <XButton onClick={() => onDismiss(item.objectID)}>
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
// eslint-disable-next-line
const RankContainerBar = styled(NumberContainerBar)`
  background-color: #f57c00;
`;
const PointsContainerBar = styled(NumberContainerBar)`
  background-color: #ff9800;
`;
const CommentsButtonBar = styled(NumberContainerBar)`
  background-color: #ffb74d;
`;

const StoryContainerBar = styled.div`
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
const RankContainer = styled(NumberContainer)`
  background-color: #f57c00;
`;
const PointsContainer = styled(NumberContainer)`
  background-color: #ff9800;
`;

const CommentsButton = styled.div`
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
  &:hover{
    background-color: #f57c00;
  }
`;

const XButton = styled(Button)`
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
  font-size: 1rem;
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
