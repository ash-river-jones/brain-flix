// node module imports

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// import components

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentSection from '../../components/CommentSection/CommentSection';
import NextVideoSection from '../../components/NextVideoSection/NextVideoSection';

const api_url = 'http://localhost:2000';

export default function Home() {
	const { id } = useParams();
	const [nextVideoData, setNextVideoData] = useState(null);
	const [activeVideo, setActiveVideo] = useState(null);
	const [defaultVideoId, setDefaultVideoId] = useState(null);

	function getVideoListData() {
			axios.get(`${api_url}/videos`).then((response) => {
			setNextVideoData(response.data);
			setDefaultVideoId(response.data[0].id);
		});
	}

	function getSingleVideo(videoID) {
			axios.get(`${api_url}/videos/${videoID}`).then((response) => {
				setActiveVideo(response.data);
			});
	}

	useEffect(() => {
		getVideoListData();
	}, []);

	useEffect(() => {
		if(id){
			getSingleVideo(id);
		} else if (defaultVideoId) {
			getSingleVideo(defaultVideoId);
		}
		
	}, [id, defaultVideoId]);

	return (
		<>
			{activeVideo && nextVideoData &&
			<>
				<VideoPlayer image={activeVideo.image} />
				<div className='main-container'>
					<div className='vid-details-comment-container'>
						<VideoDetails activeVideo={activeVideo} />
						<CommentSection commentData={activeVideo.comments} />
					</div>
					<NextVideoSection activeVideo={activeVideo} nextVideoData={nextVideoData} />
				</div>
			</>
			}
		</>
	);
}
