import './NextVideo.scss';

function NextVideo(props) {
	const { id, image, title, channel, handelVideoClick } = props;

	const videoClick = (id) => {
		handelVideoClick(id);
	};

	// const nextVideoData = props.data
	// console.log(nextVideoData)

	return (
		<div onClick={() => videoClick(id)} className='next-video__container'>
			<img
				className='next-video__thumbnail'
				src={image}
				alt='thumbnail'
			/>
			<div className='next-video__data'>
				<div className='next-video__title'>{title}</div>
				<div className='next-video__author'>{channel}</div>
			</div>
		</div>
	);
}
export default NextVideo;
