import { useState } from 'react';

import './App.scss';

import Header from './components/Header/Header';
import './components/Header/Header.scss';

import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import './components/VideoPlayer/VideoPlayer.scss';

import VideoDetails from './components/VideoDetails/VideoDetails';
import './components/VideoDetails/VideoDetails.scss';

import CommentSection from './components/CommentSection/CommentSection';
import './components/CommentSection/CommentSection.scss';

import NextVideoSection from './components/NextVideoSection/NextVideoSection';
import './components/NextVideoSection/NextVideoSection.scss';

import videoData from './data/video-details.json';
import nextVideoData from './data/videos.json';

function App() {
	const [activeVideo, setActiveVideo] = useState(videoData[0]);

	const handelVideoClick = (id) => {
		const foundVideo = nextVideoData.find(
			(videoObject) => videoObject.id === id
		);
		setActiveVideo(foundVideo);
		console.log(id);
		console.log(foundVideo);
	};

	return (
		<div className='App'>
			<Header />
			<VideoPlayer image={activeVideo.image} />
			<VideoDetails activeVideo={activeVideo} />
			<CommentSection commentData={activeVideo.comments} />
			<NextVideoSection
				activeVideo={activeVideo}
				handelVideoClick={handelVideoClick}
			/>
		</div>
	);
}

export default App;
