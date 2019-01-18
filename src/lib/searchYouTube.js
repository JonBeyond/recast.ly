import YOUR_API_KEY from "../config/youtube.js  "


var searchYouTube = (options, callback) => {
  // console.log("options:")
  // console.log(options);

  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: 'true'
  }, (videos) => {
    console.log("success!!!")
    console.log(videos);
    callback(videos);
  });

};

export default searchYouTube;

  // https://www.googleapis.com/youtube/v3/search?q=react&maxResults=5&part=snippet&key=AIzaSyC0K5oWiBS7yLWg3AxumE7ZyklDtR1VUps

  // https://www.googleapis.com/youtube/v3/search?q=surfing&maxResults=25&part=snippet&key=AIzaSyC0K5oWiBS7yLWg3AxumE7ZyklDtR1VUps