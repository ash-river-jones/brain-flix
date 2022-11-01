import NewCommentForm from '../NewCommentForm/NewCommentForm';
import '../NewCommentForm/NewCommentForm.scss';
import './CommentSection.scss';

import CommentContainer from '../CommentContainer/CommentContainer';
import '../CommentContainer/CommentContainer.scss'

function CommentSection() {
	return (
		<section className='comment-section'>
			<div className='comment-section__heading'>
				<h5 className='comment-section__comment-counter'>3 Comments</h5>
			</div>
			<NewCommentForm />
			<CommentContainer />
		</section>
	);
}

export default CommentSection;