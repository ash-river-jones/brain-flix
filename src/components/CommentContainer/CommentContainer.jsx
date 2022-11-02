import './CommentContainer.scss'
import Comments from '../Comments/Comments'
import '../Comments/Comments.scss'

function CommentContainer(props){

    const data = props.commentData
    
    return(
        <div className='comment-container'>
            
            {data.map((comment) => (
                <Comments key={comment.id} name={comment.name} timestamp={comment.timestamp} comment={comment.comment} />
            ))}
            
            
            
        </div>
    )
}

export default CommentContainer 