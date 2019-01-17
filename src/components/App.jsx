import exampleVideoData from "../data/exampleVideoData.js"; //exampleVideoData object
//this example data will eventually be sent into videoList.jsx
import VideoList from "../components/VideoList.js";
import VideoPlayer from "../components/VideoPlayer.js";

console.log(VideoList);
var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em><VideoPlayer video={exampleVideoData[0]} /></em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em><VideoList videos={exampleVideoData}/></em> view goes here</h5></div>
      </div>
    </div>
  </div>
);


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
