import React, { Component } from 'react';
import './App.css';


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
      <div className="App">
        <form>
            <p>filter by term: <input
              type="text"
              value={searchTerm}
              onChange={this.onSearchChange}
            />
          </p>
        </form>

        <h2>Stories</h2>
          {stories.filter(isSearched(searchTerm)).map(item =>
          <div key={item.id}>
            <a href={item.url}>{item.title}</a>
            <p>by: {item.by} </p>
            <p>comments: {item.descendants}</p>
            <p>score: {item.score}</p>
            <span>
              <button
                onClick={() => this.onDismiss(item.id)}
                type="button"
              >
                X
              </button>
            </span>
            <hr/>
          </div>
        )}
      </div>
    );
  }
}

export default App;
