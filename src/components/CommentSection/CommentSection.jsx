import NewCommentForm from '../NewCommentForm/NewCommentForm';
import '../NewCommentForm/NewCommentForm.scss';
import './CommentSection.scss';

import Comments from '../Comments/Comments';
import '../Comments/Comments.scss';

function CommentSection(props) {
	const commentList = props.commentData;
	console.log(commentList);
	return (
		<section className='comment-section'>
			<div className='comment-section__heading'>
				<h5 className='comment-section__comment-counter'>3 Comments</h5>
			</div>
			<NewCommentForm />

			<div className='comment-container'>
				{commentList.map((comment) => (
					<Comments
						key={comment.id}
						name={comment.name}
						timestamp={comment.timestamp}
						comment={comment.comment}
					/>
				))}
			</div>

			{/* <CommentContainer commentData={commentList} /> */}
		</section>
	);
}

export default CommentSection;
