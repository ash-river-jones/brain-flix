function VideoPlayer({ image }) {
	return (
		<section className='video'>
			<div className='video__wrapper'>
				<video className='video__player' src='' controls poster={image}></video>
			</div>
		</section>
	);
}

export default VideoPlayer;
