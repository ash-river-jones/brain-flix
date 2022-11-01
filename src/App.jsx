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

function App() {
	return (
		<div className='App'>
			<Header />
			<VideoPlayer />
			<VideoDetails />
			<CommentSection />
			<NextVideoSection />
			
		</div>
	);
}

export default App;
