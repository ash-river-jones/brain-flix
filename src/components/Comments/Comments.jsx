import './Comments.scss'

function Comments(){
    return(
        <div className='comment'>
            <div className='comment__icon-section'>
                <div className='comment__icon'></div>
            </div>
            <div className='comment__data'>
                <div className="comment__heading">
                    <div className='comment__name'>Micheal Lyons</div>
                    <div className='comment__date'>08/09/2021</div>
                </div>
                <div className='comment__body'>
                    <p>
                        They BLEW the ROOF off at their last event, once
                        everyone started figuring out they were going.
                        This is still simply the greatest opening of an
                        event I have EVER witnessed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments