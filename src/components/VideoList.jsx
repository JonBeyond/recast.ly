import VideoListEntry from "../components/VideoListEntry.js" //we may need to move this to App.jsx.

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(item =>
      <VideoListEntry video={item}/>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

/*
    <div><h5><em></em>  view goes here</h5></div>
    <div><h5><em><VideoListEntry video={videos[0]}/></em> view goes here</h5></div>
    <div><h5><em>{props.videos[2].snippet.title}</em> view goes here</h5></div>
    <div><h5><em>{props.videos[3].snippet.title}</em> view goes here</h5></div>
    <div><h5><em>{props.videos[4].snippet.title}</em> view goes here</h5></div>
*/