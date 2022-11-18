// node module imports

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// import components

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentSection from '../../components/CommentSection/CommentSection';
import NextVideoSection from '../../components/NextVideoSection/NextVideoSection';

const api_url = process.env.REACT_APP_BACKEND_SERVER_API_URL || '';
console.log(api_url);

export default function Home() {
	const { id } = useParams();
	const [nextVideoData, setNextVideoData] = useState(null);
	const [activeVideo, setActiveVideo] = useState(null);
	const [defaultVideoId, setDefaultVideoId] = useState(null);

	function getVideoListData() {
		axios
			.get(`${api_url}/videos`)
			.then((response) => {
				setNextVideoData(response.data);
				setDefaultVideoId(response.data[0].id);
			}).catch((error)=>{console.log(error)});
	}

	function getSingleVideo(videoID) {
		axios
			.get(`${api_url}/videos/${videoID}`)
			.then((response) => {
				setActiveVideo(response.data);
			}).catch((error)=>{console.log(error)});
	}

	useEffect(() => {
		getVideoListData();
	}, []);

	useEffect(() => {
		if (id) {
			getSingleVideo(id);
		} else if (defaultVideoId) {
			getSingleVideo(defaultVideoId);
		}
	}, [id, defaultVideoId, activeVideo]);

	return (
		<>
			{activeVideo && nextVideoData && (
				<>
					<VideoPlayer api_url={api_url} image={activeVideo.image} />
					<div className='main-container'>
						<div className='vid-details-comment-container'>
							<VideoDetails activeVideo={activeVideo} api_url={api_url}/>
							<CommentSection
								commentData={activeVideo.comments}
								api_url={api_url}
								activeVideoId={activeVideo.id}
							/>
						</div>
						<NextVideoSection api_url={api_url} activeVideo={activeVideo} nextVideoData={nextVideoData} />
					</div>
				</>
			)}
		</>
	);
}
