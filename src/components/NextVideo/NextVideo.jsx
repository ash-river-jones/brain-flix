import './NextVideo.scss';
import nextVideoData from '../../data/videos.json';

function NextVideo() {
	return (
		<section className='next-video__wrapper'>
			{nextVideoData.map((video) => (
				<div key={video.id} className='next-video__container'>
					<img
						className='next-video__thumbnail'
						src={video.image}
						alt='thumbnail'
					/>
					<div className='next-video__data'>
						<div className='next-video__title'>{video.title}</div>
						<div className='next-video__author'>
							{video.channel}
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
export default NextVideo;
