//{props.videos[0].kind}

var VideoList = (props) => (
  <div className="video-list">
    <div><h5><em>{props.videos[0].snippet.title}</em> view goes here</h5></div>
    <div><h5><em>{props.videos[1].snippet.title}</em> view goes here</h5></div>
    <div><h5><em>{props.videos[2].snippet.title}</em> view goes here</h5></div>
    <div><h5><em>{props.videos[3].snippet.title}</em> view goes here</h5></div>
    <div><h5><em>{props.videos[4].snippet.title}</em> view goes here</h5></div>
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