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

	useEffect(() => {
		axios
			.get(
				`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`
			)
			.then((response) => {
				setNextVideoData(response.data);
			});
	}, []);

	useEffect(() => {
		let activeVideoID = id || nextVideoData[0].id;
		if (activeVideoID) {
			axios
				.get(
					`https://project-2-api.herokuapp.com/videos/${activeVideoID}?api_key=${apiKey}`
				)
				.then((response) => {
					setActiveVideo(response.data);
				});
		}
	}, [id, nextVideoData]);

	return (
		<>
			{activeVideo && <VideoPlayer image={activeVideo?.image} />}
			<div className='main-container'>
				<div className='vid-details-comment-container'>
					{activeVideo && <VideoDetails activeVideo={activeVideo} />}
					{activeVideo?.comments && (
						<CommentSection commentData={activeVideo?.comments} />
					)}
				</div>
				{activeVideo && nextVideoData && (
					<NextVideoSection
						activeVideo={activeVideo}
						nextVideoData={nextVideoData}
					/>
				)}
			</div>
		</>
	);
}
