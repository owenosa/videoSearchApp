import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetails';

class App extends React.Component {
    // APP STATE: video array, eventually filled by array. Selected Video, the item clicked by the user
    state = { videos: [], selectedVideo: null };
    
    // When Page Loads, Nigeria is the default term pulled from the API
    componentDidMount() {
        this.onTermSubmit('nigeria');
    }

    // When search bar term is submitted, the data pulled from the api and stored in "response". The state is then updated with an array of video items returned,
    // and the default selected video, is the first one in the array. 
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response);

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
    }); 

    };

    // When user clicks a video item, the selected video state is updated. 
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            <div className="wrapper ui container">
                {/* passing our call back function down as a prop to "SearchBar.js", to recieve "term" information */}
                <SearchBar onFormSubmit={ this.onTermSubmit }/>
                <div className = "ui grid">
                    <div className = "ui row">

                        <div className="eleven wide column"> 
                        {/* passing our state down as a prop to "VideoDetail.js", to recieve users clicked "selectedVideo" information */}
                            <VideoDetail video={ this.state.selectedVideo }/>
                        </div>

                        <div className="five wide column">
                            {/* passing our state down as a prop to "VideoList" so the VideoList Component can have access 
                            and then passing our callback function "onVideoSelect to "VideoList"*/}
                            <VideoList videos={ this.state.videos } 
                            onVideoSelect={ this.onVideoSelect } />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App