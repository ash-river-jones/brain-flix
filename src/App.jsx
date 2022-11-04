import { useState } from 'react';
import './App.scss';

//Component Imports
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentSection from './components/CommentSection/CommentSection';
import NextVideoSection from './components/NextVideoSection/NextVideoSection';

//JSON files
import videoData from './data/video-details.json';

function App() {
	const [activeVideo, setActiveVideo] = useState(videoData[0]);

	const handelVideoClick = (id) => {
		const foundVideo = videoData.find(
			(videoObject) => videoObject.id === id
		);
		setActiveVideo(foundVideo);
	};

	return (
		<div className='App'>
			<Header />
			<VideoPlayer image={activeVideo.image} />
			<div className='main-container'>
				<div className='vid-details-comment-container'>
					<VideoDetails activeVideo={activeVideo} />
					<CommentSection commentData={activeVideo.comments} />
				</div>
				<NextVideoSection
					activeVideo={activeVideo}
					handelVideoClick={handelVideoClick}
				/>
			</div>
		</div>
	);
}

export default App;
