import './CommentContainer.scss'
import Comments from '../Comments/Comments'
import '../Comments/Comments.scss'

function CommentContainer(){
    return(
        <div className='comment-container'>
            <Comments />
        </div>
    )
}

export default CommentContainer 