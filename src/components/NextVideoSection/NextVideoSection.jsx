import './NextVideoSection.scss';
import NextVideo from '../NextVideo/NextVideo';
import '../NextVideo/NextVideo.scss';

import nextVideoData from '../../data/videos.json';

function NextVideoSection(props) {
	const videoClick = (id) => {
		props.handelVideoClick(id);
	};

	// const handelVideoClick = props.handelVideoClick
	const activeVideoID = props.activeVideo.id;

	return (
		<section className='next-video__section'>
			<div className='next-video__heading'>NEXT VIDEOS</div>
			<div className='next-video__list'>
				<div className='next-video__list-wrapper'>
					{nextVideoData
						.filter((video) => video.id !== activeVideoID)
						.map((video) => (
							<NextVideo
								key={video.id}
								image={video.image}
								title={video.title}
								channel={video.channel}
								data={nextVideoData}
								id={video.id}
								handelVideoClick={videoClick}
							/>
						))}
				</div>
			</div>
		</section>
	);
}

export default NextVideoSection;
