import './NextVideoSection.scss'
import NextVideo from '../NextVideo/NextVideo'
import '../NextVideo/NextVideo.scss'

function NextVideoSection(){
    return(
        <section className='next-video__section'>
				<div className='next-video__heading'>NEXT VIDEOS</div>
				<div className='next-video__list'>
					<div className="next-video__list-wrapper">
						<NextVideo />
						<NextVideo />
						<NextVideo />
					</div>
				</div>
			</section>
    )
}

export default NextVideoSection