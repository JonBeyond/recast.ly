import exampleVideoData from "../data/exampleVideoData.js"; //exampleVideoData object.
//We need to replace this with search results eventually.
//this example data will eventually be sent into videoList.jsx
import searchYouTube from "../lib/searchYouTube.js";
import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import VideoListEntry from "./VideoListEntry.js";
import YOUR_API_KEY from "../config/youtube.js";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
    };

    // this.changeVideo = this.changeVideo.bind(this); //use the arrow function instead
  }


  changeVideo(video) { //move to App???
    this.setState({
      currentVideo: video
    });
  }

  changeLists(videos) {
    this.setState({
      currentVideo: videos[0],
      videoList: videos
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5> click for search</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList videos={this.state.videoList} changeVideo={this.changeVideo}/></h5></div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() { //this is invoked immediately after render()
    //in here we want to call the search results from the search function,
    //and then change the state of videoList after the search has completed.
    //Important to keep in mind that this operation is async, so I may need to
    //utilize callbacks
    //searchYouTube = (options, callback)
    //need to define some initial options, or pass null
    //the callback function will receive the video lists
    console.log('all components mounted');
    var searchCallback = (videos) => {
      console.log('component callback initiated; changing state')
      this.changeLists(videos.items);
    }
    searchYouTube(null, searchCallback);
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
