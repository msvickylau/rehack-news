import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DEFAULT_QUERY = 'react';
const DEFAULT_HPP = '50';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

//the searchKey is set before each request is made. It reflects the searchTerm. The searchTerm is a fluctuant variable, because it gets changed everytime you type into the search input field. searchKey isn't fluctuant and is used to determine the recent submitted searh term to the API and used to retrieve the correct reesut from the map of results.
class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
    };

    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }



  // 1. get the hits and page from the result.
  //  -- retrieve searchKey from the component state. (set on componentDidMount and onSearchSubmit)
  // 2. check if there are already old hits. True if searchKey, show hits.
    // If false it is a new search request from componentDidMount or onSearchSubmit.
  // 3. merge old and new hits from the recent API request with spread operator. the old hits get retrieved from the results map with the searchKey as key.
  // 4. store the updated result by searchKey in the results map.
  setSearchTopStories(result) {
    const { hits, page } = result;
    const { searchKey, results } = this.state;

    const oldHits = results && results[searchKey]
      ? results[searchKey].hits
      : [];

    const updatedHits = [
      ...oldHits,
      ...hits
    ];

    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
      }
    });
  }

  //Every additional fetch should fetch the next page by providing the second argument. The page argument uses the JavaScript ES6 default parameter to introduce the fallback to page 0 in case no defined page argument is provided for the function.
  //Axios takes the URL as argument and returns a promise. It wraps the result into a data object in JavaScript.
  //using catch block in the native fetch to store the error object in the local state by using setState(). everytime the API request is not sucessful, the catch block would be execuited.
  fetchSearchTopStories(searchTerm, page=0) {
    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(error => this._isMounted && this.setState({ error }));
  }

  componentDidMount() {
    this._isMounted = true;

    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

//fetches results from the HackerNews API when execuiting a search in the Search Component.
//this method uses the same functionality as the componentDidMount() lifecycle method, but with a modified search term from the local state and not with the initial default search term.
  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }

    event.preventDefault();
  }

  onDismiss(id) {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = item => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);

    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
      }
    });
  }

  render() {
    const {
      searchTerm,
      results,
      searchKey,
      error
    } = this.state;

    //defauly page to 0 since render() method is called before the data is fetched asynchronously in the componentDidMount() lifecycle method.
    const page = (
      results &&
      results[searchKey] &&
      results[searchKey].page
    ) || 0;

    const stories = (
      results &&
      results[searchKey] &&
      results[searchKey].hits
    ) || [];

    if (error) {
      return (
        <BodyStyle>
          <Wrapper><p>SORRY! Something went wrong.</p></Wrapper>
        </BodyStyle>
      )
    }
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

        <Table
          stories={stories}
          onDismiss={this.onDismiss}
        />

        <div className="interactions">
          <Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
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

Table.propTypes = {
  stories: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

const Button = ({ onClick, className, children }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

Button.defaultProps = {
  className: '',
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export {
  Button,
  Search,
  Table,
};


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
