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
	const [nextVideoData, setNextVideoData] = useState(null)
	const [activeVideo, setActiveVideo] = useState([]);
	const api_url = `https://project-2-api.herokuapp.com/videos/`

	useEffect(()=>{
		axios
			.get(`${api_url}?api_key=${apiKey}`)
			.then((response)=>{
				setNextVideoData(response.data)
			})
	},[api_url])

	useEffect(() => {
		let activeVideoID = id || nextVideoData[0].id
		if (activeVideoID) {
			axios
			.get(`${api_url}${id}?api_key=${apiKey}`)
			.then((response) => {
				setActiveVideo(response.data);
			})
		}
	}, [api_url, id , nextVideoData]);
	

	return (
		<>
			{activeVideo && <VideoPlayer image={activeVideo.image} />}
			<div className='main-container'>
				<div className='vid-details-comment-container'>
					{activeVideo && <VideoDetails activeVideo={activeVideo} />}
					{activeVideo && <CommentSection commentData={activeVideo} />}
				</div>
				{activeVideo && nextVideoData && <NextVideoSection activeVideo={activeVideo} nextVideoData={nextVideoData} />}
			</div>
		</>
	);
}
