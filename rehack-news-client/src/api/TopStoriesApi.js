const TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const BASE = 'https://hn.algolia.com/api/v1/items/'

class TopStoriesApi {

  static getAllTopStories() {
    return fetch(`${TOP_STORIES}`)
    .then(response => {
      return response.json();  // all top stories from API
    }).then(allStoriesJson => {
      let topTwentyStoriesArray = allStoriesJson.slice(0, 20);

      return fetchEachStory(topTwentyStoriesArray);
    }).catch(error => {
      return error;
    });
  }
}
export default TopStoriesApi;


function fetchEachStory(array) {
  let storiesArray = []
  // console.log(array)

  for (let i=0; i<array.length; i++) {
    let id = array[i]

    fetch(`${BASE}${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(item) {
      // console.log(item)
      storiesArray.push(item)
    })
  }
  // console.log('here are the top stories')
  // console.log(storiesArray)
  return storiesArray;
}
