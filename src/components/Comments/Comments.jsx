import './Comments.scss';
import relativeTime from '../../utils/utils';

function Comments({ name, timestamp, comment }) {

	return (
		<div className='comment'>
			<div className='comment__icon-section'>
				<div className='comment__icon'></div>
			</div>
			<div className='comment__data'>
				<div className='comment__heading'>
					<div className='comment__name'>{name}</div>
					<div className='comment__date'>
						{relativeTime(timestamp)}
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
