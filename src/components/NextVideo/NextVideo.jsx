import './NextVideo.scss';

function NextVideo(props) {
	const { id, image, title, channel } = props;

	const nextVideoData = props.data
	
	const handelVideoClick = (id) =>{

		const foundVideo = nextVideoData.find(videoObject => videoObject.id === id)

//	Fix the connection to setActiveVideo - look into how this is passed down and back up

		setActiveVideo(foundVideo)
	}

	return (
		<div onClick={() => handelVideoClick(id)} key={id} className='next-video__container'>
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
