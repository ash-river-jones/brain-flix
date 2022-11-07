import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentSection from '../../components/CommentSection/CommentSection';
import NextVideoSection from '../../components/NextVideoSection/NextVideoSection';
import videoData from '../../data/video-details.json';


import { useState } from 'react';

export default function Home() {

    const [activeVideo, setActiveVideo] = useState(videoData[0]);

	const handelVideoClick = (id) => {
		const foundVideo = videoData.find(
			(videoObject) => videoObject.id === id
		);
		setActiveVideo(foundVideo);
	};

	return (
		<>
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
		</>
	);
}
