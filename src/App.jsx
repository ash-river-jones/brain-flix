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
import './components/NextVideoSection/NextVideoSection.scss'

import videoData from './data/video-details.json'

function App() {
	const [activeVideo, setActiveVideo] = useState(videoData[5])

	return (
		<div className='App'>
			<Header />
			<VideoPlayer image={activeVideo.image} />
			<VideoDetails activeVideo={activeVideo} />
			<CommentSection commentData={activeVideo.comments}/>
			<NextVideoSection />
			
		</div>
	);
}

export default App;
