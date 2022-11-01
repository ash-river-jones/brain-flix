import './NextVideo.scss'

function NextVideo(){
    return(
        <div className='next-video__container'>
            <div className='next-video__thumbnail-section'>
                <img
                    className='next-video__thumbnail'
                    src='#'
                    alt='next video thumbnail'
                />
            </div>
            <div className='next-video__data'>
                <div className='next-video__title'>
                    Becomne a trable pro
                </div>
                <div className='next-video__author'>Ash Jones</div>
            </div>
        </div>
    )
}
export default NextVideo