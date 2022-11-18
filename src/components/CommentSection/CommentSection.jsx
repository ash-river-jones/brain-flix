import NewCommentForm from '../NewCommentForm/NewCommentForm';
import '../NewCommentForm/NewCommentForm.scss';
import './CommentSection.scss';

import Comments from '../Comments/Comments';
import '../Comments/Comments.scss';

function CommentSection({ commentData, api_url, activeVideoId }) {
	const numberOfComments = commentData?.length;

	return (
		<section className='comment-section'>
			<div className='comment-section__heading'>
				<h5 className='comment-section__comment-counter'>{numberOfComments} Comments</h5>
			</div>
			<NewCommentForm api_url={api_url} activeVideoId={activeVideoId} />
			<div className='comment__container'>
				{commentData?.map((comment) => (
					<Comments
						key={comment.id}
						name={comment.name}
						timestamp={comment.timestamp}
						comment={comment.comment}
						api_url={api_url}
						activeVideoId={activeVideoId}
						commentId={comment.id}
					/>
				))}
			</div>
		</section>
	);
}

export default CommentSection;
