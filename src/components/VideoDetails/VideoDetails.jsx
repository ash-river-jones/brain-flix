import viewsIcon from '../../assets/images/icons/views.svg';
import likesIcon from '../../assets/images/icons/likes.svg';
import './VideoDetails.scss';
import relativeTime from '../../utils/utils';
import axios from 'axios';

function VideoDetails(props) {
	const { title, channel, timestamp, views, likes, description, id } = props.activeVideo;
	const api_url = props.api_url

	const handelVideoLike = () => {
			axios
				.put(`${api_url}/videos/${id}/likes`)
				.then(() => {})
				.catch((error)=>{console.log(error)})
	};

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
							<p className='vid-details__info-right--views-info'>{views.toLocaleString("en-US")}</p>
						</div>
						<div className='vid-details__info-right--likes'>
							<img className='vid-details__info-right--likes-icon' src={likesIcon} alt='like icon' onClick={handelVideoLike}/>
							<p className='vid-details__info-right--likes-info'>{likes.toLocaleString("en-US")}</p>
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
