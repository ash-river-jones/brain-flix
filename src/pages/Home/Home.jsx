// node module imports

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// import components

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentSection from '../../components/CommentSection/CommentSection';
import NextVideoSection from '../../components/NextVideoSection/NextVideoSection';

const apiKey = `b43d4e54-fde8-4fb4-8f9a-b9e7193d1f66`;

export default function Home() {
	const { id } = useParams();
	const [nextVideoData, setNextVideoData] = useState(null);
	const [activeVideo, setActiveVideo] = useState([]);
	const defaultVideoID = `84e96018-4022-434e-80bf-000ce4cd12b8`

	function getVideoListData () {
		axios
		.get(
			`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`
		)
		.then((response) => {
			setNextVideoData(response.data);
			// console.log(response.data)
		});	
	}

	function getSingleVideo (videoID) {
		// console.log(nextVideoData)
		let activeVideoID = videoID || defaultVideoID
		if (activeVideoID) {
			axios
				.get(
					`https://project-2-api.herokuapp.com/videos/${activeVideoID}?api_key=${apiKey}`
				)
				.then((response) => {
					setActiveVideo(response.data);
					// console.log(response.data)
				});
		}
	}

	useEffect(() => {
		getVideoListData()
	}, []);

	useEffect(() => {
		getSingleVideo(id)
	}, [id]);

	return (
		<>
			{activeVideo ? (
				<>
					<VideoPlayer image={activeVideo.image} />
					<div className='main-container'>
						<div className='vid-details-comment-container'>
							<VideoDetails activeVideo={activeVideo} />
							<CommentSection
								commentData={activeVideo.comments}
							/>
						</div>
						<NextVideoSection
							activeVideo={activeVideo}
							nextVideoData={nextVideoData}
						/>
					</div>
				</>
			) : (
				'loading data ...'
			)}
		</>
	);
}
