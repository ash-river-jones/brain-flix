import avatar from '../../assets/images/images/Mohan-muruge.jpg';
import './NewCommentForm.scss';

function NewCommentForm() {
	return (
		<div className='new-comment'>
			<div className='new-comment__avatar-section'>
				<img className='new-comment__avatar' src={avatar} alt='' />
			</div>
			<form className='new-comment__form' id='comment-form'>
				<label className='new-comment__subheader' htmlFor='comment'>
					JOIN THE CONVERSATION
				</label>{' '}
				<br />
				<div className='new-comment__wrap'>
					<textarea
						className='new-comment__comment-input'
						name='comment'
						id='comment'
						placeholder='Add a new comment'
					></textarea>
					<button className='new-comment__btn' type='submit' id='commentBtn'>
						COMMENT
					</button>
				</div>
			</form>
		</div>
	);
}

export default NewCommentForm;
