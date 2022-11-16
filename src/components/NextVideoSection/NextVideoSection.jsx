import NextVideo from '../NextVideo/NextVideo';

function NextVideoSection({ nextVideoData, activeVideo, api_url}) {
	const activeVideoID = activeVideo.id;

	return (
		<section className='next-video__section'>
			<div className='next-video__heading'>NEXT VIDEOS</div>
			<div className='next-video__list'>
				<div className='next-video__list-wrapper'>
					{nextVideoData
						?.filter((video) => video.id !== activeVideoID)
						.map((video) => (
							<NextVideo
								key={video.id}
								image={video.image}
								title={video.title}
								channel={video.channel}
								data={nextVideoData}
								id={video.id}
								api_url={api_url}
							/>
						))}
				</div>
			</div>
		</section>
	);
}

export default NextVideoSection;
