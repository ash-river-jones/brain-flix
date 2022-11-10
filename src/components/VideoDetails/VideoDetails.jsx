import viewsIcon from '../../assets/images/icons/views.svg';
import likesIcon from '../../assets/images/icons/likes.svg';
import './VideoDetails.scss';
import relativeTime from '../../utils/utils';

function VideoDetails(props) {
	const { title, channel, timestamp, views, likes, description } = props.activeVideo;

	return (
		<section className='vid-details'>
			<div className='vid-details__wrapper'>
				<div className='vid-details__title'>{title}</div>
				<div className='vid-details__info-wrapper'>
					<div className='vid-details__info-left'>
						<div className='vid-details__info-left--by'>
							<p className='vid-details__info-left--by-info'>{channel}</p>
						</div>
						<div className='vid-details__info-left--date'>
							<p className='vid-details__info-left--date-info'>{relativeTime(timestamp)}</p>
						</div>
					</div>
					<div className='vid-details__info-right'>
						<div className='vid-details__info-right--views'>
							<img className='vid-details__info-right--views-icon' src={viewsIcon} alt='views icon' />
							<p className='vid-details__info-right--views-info'>{views}</p>
						</div>
						<div className='vid-details__info-right--likes'>
							<img className='vid-details__info-right--likes-icon' src={likesIcon} alt='like icon' />
							<p className='vid-details__info-right--likes-info'>{likes}</p>
						</div>
					</div>
				</div>
				<div className='vid-details__description-section'>
					<p className='vid-details__description'>{description}</p>
				</div>
			</div>
		</section>
	);
}

export default VideoDetails;
