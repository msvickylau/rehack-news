import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/saveActions';
import SearchForm from './SearchForm';
import SearchList from './SearchList';
import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
} from '../constants/index.js';
import {
  BodyStyle,
  Wrapper,
  MoreButton,
  Loading,
  WrapperBar
} from '../style';

/*
the searchKey is set before each request is made. It reflects the searchTerm. The searchTerm is a fluctuant variable, because it gets changed everytime you type into the search input field. searchKey isn't fluctuant and is used to determine the recent submitted searh term to the API and used to retrieve the correct reesut from the map of results.
*/
class SearchContainer extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false,
    };

    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.saveStory = this.saveStory.bind(this);
  }

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }


  /*
  1. get the hits and page from the result. retrieve searchKey from the component state. (set on componentDidMount and onSearchSubmit)

  2. check if there are already old hits. True if searchKey, show hits.
    If false it is a new search request from componentDidMount or onSearchSubmit.

  3. merge old and new hits from the recent API request with spread operator.
    The old hits get retrieved from the results map with the searchKey as key.

  4. store the updated result by searchKey in the results map.
  */
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
      },
      isLoading: false
    });
  }

  fetchSearchTopStories(searchTerm, page=0) {
    this.setState({ isLoading: true });

    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => this.setState({ error }));
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

  /*
  fetches results from the HackerNews API when execuiting a search in the Search Component.
  this method uses the same functionality as the componentDidMount() lifecycle method, but with a modified search term from the local state and not with the initial default search term.
  */
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

  saveStory(story) {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = item => item.objectID !== story.objectID;
    const updatedHits = hits.filter(isNotId);

    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
      }
    });

    const data = {
      objectID: story.objectID,
      title: story.title,
      url: story.url
    }
    this.props.actions.createSave(data);
  }

  render() {
    const {
      searchTerm,
      results,
      searchKey,
      error,
      isLoading
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

    return (
      <BodyStyle>
        <WrapperBar>
          <SearchForm
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            <i className="fas fa-search"></i>
          </SearchForm>
        </WrapperBar>

        { error
          ? <Wrapper><p>SORRY! Something went wrong.</p></Wrapper>
          : <SearchList
            stories={stories}
            onDismiss={this.onDismiss}
            onSave={this.saveStory}
            />
        }

        <div className="interactions">
          { isLoading
            ? <Loading>
              L O A D I N G
            </Loading>
            : <MoreButton
              onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
              M O R E
            </MoreButton>
          }
        </div>
      </BodyStyle>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    results: null,
    searchKey: '',
    searchTerm: DEFAULT_QUERY,
    error: null,
    isLoading: false,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
