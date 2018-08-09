const TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const BASE = 'https://hn.algolia.com/api/v1/items/'

class TopStoriesApi {
  static fetchAllTopStories() {
    return fetch(`${TOP_STORIES}`)
    .then((response) => response.json())  // all top stories from API
    .then((allStoriesJson) => {
      let topTwentyStoriesArray = allStoriesJson.slice(0, 20);
      return fetchEachStory(topTwentyStoriesArray);
    }).catch((error) => {
      return error;
    });
  };
}
export default TopStoriesApi;


function fetchEachStory(array) {
  let storiesArray = []

  for (let i=0; i<array.length; i++) {
    let id = array[i]

    fetch(`${BASE}${id}`)
    .then((response) => {
      return response.json();
    }).then((item) => {
      storiesArray.push(item)
    });
  };
  return storiesArray;
}
