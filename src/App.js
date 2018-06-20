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

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Stories</h2>
        {stories.map(item =>
          <div key={item.id}>
            <a href={item.url}>{item.title}</a>
            <p>by: {item.by} </p>
            <p>comments: {item.descendants}</p>
            <p>score: {item.score}</p>
            <hr/>
          </div>
        )}
      </div>
    );
  }
}

export default App;
