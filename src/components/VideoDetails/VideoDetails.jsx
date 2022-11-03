import viewsIcon from '../../assets/images/icons/views.svg';
import likesIcon from '../../assets/images/icons/likes.svg';
import './VideoDetails.scss';

function VideoDetails(props) {
	const { title, channel, timestamp, views, likes, description } =
		props.activeVideo;

	function videoRelativeTime(timestamp) {
		const oneYear = 1000 * 60 * 60 * 24 * 365.25;
		const oneMonth = 1000 * 60 * 60 * 24 * (365.25 / 12);
		const oneDay = 1000 * 60 * 60 * 24;
		const oneHour = 1000 * 60 * 60;
		const oneMinute = 1000 * 60;

		const timeSince = new Date().getTime() - timestamp;

		if (timeSince <= oneMinute) {
			return 'Just now';
		} else if (timeSince < oneHour) {
			return Math.round(timeSince / oneMinute) + ' minutes ago';
		} else if (timeSince < oneDay) {
			return Math.round(timestamp / oneHour) + ' hours ago';
		} else if (timeSince < oneMonth) {
			return Math.round(timeSince / oneDay) + ' days ago';
		} else if (timeSince < oneYear) {
			return Math.round(timestamp / oneMonth) + ' months ago';
		} else {
			return Math.round(timeSince / oneYear) + ' years ago';
		}
	}

	return (
		<section className='vid-details'>
			<div className='vid-details__wrapper'>
				<div className='vid-details__title'>{title}</div>
				<div className='vid-details__info-wrapper'>
					<div className='vid-details__info-left'>
						<div className='vid-details__info-left--by'>
							<p className='vid-details__info-left--by-info'>
								{channel}
							</p>
						</div>
						<div className='vid-details__info-left--date'>
							<p className='vid-details__info-left--date-info'>
								{videoRelativeTime(timestamp)}
							</p>
						</div>
					</div>
					<div className='vid-details__info-right'>
						<div className='vid-details__info-right--views'>
							<img
								className='vid-details__info-right--views-icon'
								src={viewsIcon}
								alt='views icon'
							/>
							<p className='vid-details__info-right--views-info'>
								{views}
							</p>
						</div>
						<div className='vid-details__info-right--likes'>
							<img
								className='vid-details__info-right--likes-icon'
								src={likesIcon}
								alt='like icon'
							/>
							<p className='vid-details__info-right--likes-info'>
								{likes}
							</p>
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
