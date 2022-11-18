import './Comments.scss';
import relativeTime from '../../utils/utils';
import deleteIcon from '../../assets/images/icons/icon-delete.svg'
import axios from 'axios';

function Comments({ name, timestamp, comment, id, api_url, activeVideoId, commentId}) {

	const handelCommentDelete = (event) => {
			axios
				.delete(`${api_url}/videos/${activeVideoId}/comments/${commentId}`)
				.then(() => {})
				.catch((error)=>{console.log(error)});
	};

	return (
		<div className='comment'>
			<div className='comment__icon-section'>
				<div className='comment__icon'></div>
			</div>
			<div className='comment__data'>
				<div className='comment__heading'>
					<div className='comment__name'>{name}</div>
					<div className='comment__right'>
						<img className='comment__delete-icon' src={deleteIcon} alt="delete" onClick={handelCommentDelete}/>
						<div className='comment__date'>{relativeTime(timestamp)}</div>
					</div>
				</div>
				<div className='comment__body'>
					<p>{comment}</p>
				</div>
			</div>
		</div>
	);
}

export default Comments;
