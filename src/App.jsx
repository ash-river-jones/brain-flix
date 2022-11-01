import './App.scss';
import logo from './assets/images/logo/logo.svg';
import avatar from './assets/images/images/Mohan-muruge.jpg';
import play from './assets/images/icons/play.svg';
import pause from './assets/images/icons/pause.svg';
import fullscreen from './assets/images/icons/fullscreen.svg';
import volumeUp from './assets/images/icons/volume_up.svg';
import views from './assets/images/icons/views.svg';
import likes from './assets/images/icons/likes.svg';

function App() {
	return (
		<div className='App'>
			<section className='header'>
				<div className='header__logo-section'>
					<img className='header__logo' src={logo} alt='logo' />
				</div>
				<div className='header__search'>
					<input
						className='header__search-bar'
						placeholder='Search'
					></input>
					<img src={avatar} alt='avatar' className='header__avatar' />
				</div>
				<div className='header__upload-bar'>
					<button className='header__upload-btn' type="submit">UPLOAD</button>
				</div>
			</section>

			<section className='video'>
				<div className='video__play-icon-section'>
					<img className='vide__play-icon' src={play} alt='play button' />
					<img className='vide__pause-icon' src={pause} alt='pause button' />
				</div>
				<div className='video__time-bar'>
					<div className='video__time-stamp'>0:00/4:01</div>
				</div>
				<div className='video__settings'>
					<img className='video__fullscreen-icon' src={fullscreen} alt='full screen' />
					<img className='video__volume-icon' src={volumeUp} alt='volume up' />
				</div>
			</section>

			<section className='vid-details'>
				<div className='vid-details__title'>VIDEO TITLE</div>
				<div className='vid-details__info-wrapper'>
					<div className='vid-details__info-left'>
						<div className='vid-details__info-left--by'>
							<p>By Red Crow</p>
						</div>
						<div className='vid-details__info-left--date'>
							<p> a random date</p>
						</div>
					</div>
					<div className='vid-details__info-right'>
						<div className='vid-details__info-right--views'>
							<img className='vid-details__info-right--views-icon' src={views} alt='views icon' />
							<p>number of views</p>
						</div>
						<div className='vid-details__info-right--likes'>
							<img className='vid-details__info-right--likes-icon' src={likes} alt='like icon' />
							<p>number of likes</p>
						</div>
					</div>
				</div>
				<div className='vid-details__description'>
					<p>
					On a gusty day in Southern Utah, a group of 25 daring
					mountain bikers blew the doors off what is possible on two
					wheels, unleashing some of the biggest moments the sport has
					ever seen. While mother nature only allowed for one full run
					before the conditions made it impossible to ride, that was
					all that was needed for event veteran Kyle Strait, who won
					the event for the second time -- eight years after his first
					Red Cow Rampage title
					</p>
				</div>
			</section>
			<section className='comment-section'>
				<div className='new-comment'>
					<div className='new-comment__avatar-section'>
						<img
							className='new-comment__avatar'
							src={avatar}
							alt=''
						/>
					</div>
					<form className='new-comment__form' id='comment-form'>
						<label className='new-comment__subheader' for='comment'>
							JOIN THE CONVERSATION
						</label>{' '}
						<br />
						<input
							className='new-comment__comment-input'
							name='comment'
							id='comment'
							placeholder='Add a new comment'
						></input>
						<button
							className='new-comment__btn'
							type='submit'
							id='commentBtn'
						>
							COMMENT
						</button>
					</form>
				</div>
				<div className='comment-container'>
					{/* use JS to generate the below from an array of data */}

					<div className='comment'>
						<div className='comment__icon-section'>
							<div className='comment__icon'></div>
						</div>
						<div className='comment__data'>
							<div className='comment__name'>Ash Jones</div>
							<div className='comment_name'>random date here</div>
							<div className='comment__body'>
								<p>This is my comment area - yayayyyyy</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='next-video-section'>
				<div className='next-video__heading'>NEXT VIDEOS</div>
				<div className='next-video__list'>
					{/* use JS to generate the below from an array of data */}

					<div className='next-video__container'>
						<div className='next-video__thumbnail'>
							<img src='#' alt='next video thumbnail' />
						</div>
						<div className='next-video__data'>
							<div className='next-video__title'>
								Becomne a trable pro
							</div>
							<div className='next-video__author'>Ash Jones</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
