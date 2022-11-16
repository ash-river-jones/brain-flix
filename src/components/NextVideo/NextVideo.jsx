import { Link } from 'react-router-dom';
import './NextVideo.scss';

function NextVideo({ id, image, title, channel }) {
	console.log(image)
	return (
		<Link to={`/video/${id}`}>
			<div className='next-video__container'>
				<img className='next-video__thumbnail' src={image} alt='thumbnail' />
				<div className='next-video__data'>
					<div className='next-video__title'>{title}</div>
					<div className='next-video__author'>{channel}</div>
				</div>
			</div>
		</Link>
	);
}
export default NextVideo;
