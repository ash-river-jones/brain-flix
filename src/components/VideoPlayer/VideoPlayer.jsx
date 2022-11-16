function VideoPlayer({ image, api_url}) {
	return (
		<section className='video'>
			<div className='video__wrapper'>
				<video className='video__player' src='' controls poster={api_url + '/' + image}></video>
			</div>
		</section>
	);
}

export default VideoPlayer;
