import play from '../../assets/images/icons/play.svg';
import pause from '../../assets/images/icons/pause.svg';
import fullscreen from '../../assets/images/icons/fullscreen.svg';
import volumeUp from '../../assets/images/icons/volume_up.svg';


function VideoPlayer() {

    return(
        <section className='video'>
				<div className='video__playback-controls'>
					<div className='video__play-icon-section'>
						<img
							className='video__play-icon'
							src={play}
							alt='play button'
						/>
						<img
							className='video__pause-icon'
							src={pause}
							alt='pause button'
						/>
					</div>
					<div className='video__time-bar'>
						<div className='video__scrub-bar'></div>
						<div className='video__time-stamp'>0:00/4:01</div>
					</div>
					<div className='video__settings'>
						<img
							className='video__fullscreen-icon'
							src={fullscreen}
							alt='full screen'
						/>
						<img
							className='video__volume-icon'
							src={volumeUp}
							alt='volume up'
						/>
					</div>
				</div>
			</section>
    )
}

export default VideoPlayer