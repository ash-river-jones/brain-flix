import views from '../../assets/images/icons/views.svg';
import likes from '../../assets/images/icons/likes.svg';
import './VideoDetails.scss'

function VideoDetails() {
	return (
		<section className='vid-details'>
			<div className='vid-details__title'>
				BMX Rampage: 2021 Highlights
			</div>
			<div className='vid-details__info-wrapper'>
				<div className='vid-details__info-left'>
					<div className='vid-details__info-left--by'>
						<p className='vid-details__info-left--by-info'>
							By Red Crow
						</p>
					</div>
					<div className='vid-details__info-left--date'>
						<p className='vid-details__info-left--date-info'>
							07/11/2021
						</p>
					</div>
				</div>
				<div className='vid-details__info-right'>
					<div className='vid-details__info-right--views'>
						<img
							className='vid-details__info-right--views-icon'
							src={views}
							alt='views icon'
						/>
						<p className='vid-details__info-right--views-info'>
							1,001,023
						</p>
					</div>
					<div className='vid-details__info-right--likes'>
						<img
							className='vid-details__info-right--likes-icon'
							src={likes}
							alt='like icon'
						/>
						<p className='vid-details__info-right--likes-info'>
							110,985
						</p>
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
	);
}

export default VideoDetails