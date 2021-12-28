import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import youtubeapi from "./API/youtubeapi";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: "",
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("Trending");
  }

  onTermSubmit = async (term) => {
    const res = await youtubeapi.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row yt">
            <h1 className="text-center col-md-12">
              <i class="fab fa-youtube"></i>
              &nbsp; Youtube Clone
            </h1>
          </div>
          <div className="row my-2">
            <div className="col-md-8">

              <div className="my-2">
                <SearchBar onFormSubmit={this.onTermSubmit} />
              </div>

              <VideoDetails video={this.state.selectedVideo} />
              
            </div>
            <div className="col-md-4 my-2">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;