import './Comments.scss';

function Comments(props) {
	const { name, timestamp, comment } = props;

	function commentRelativeTime(timestamp) {
		const oneYear = 1000 * 60 * 60 * 24 * 365.25;
		const oneMonth = 1000 * 60 * 60 * 24 * (365.25 / 12);
		const oneDay = 1000 * 60 * 60 * 24;
		const oneHour = 1000 * 60 * 60;
		const oneMinute = 1000 * 60;

		const timeSince = new Date().getTime() - timestamp;

		if (timeSince <= oneMinute) {
			return 'Just now';
		} else if (timeSince < oneHour) {
			return Math.round(timeSince / oneMinute) + ' minutes ago';
		} else if (timeSince < oneDay) {
			return Math.round(timestamp / oneHour) + ' hours ago';
		} else if (timeSince < oneMonth) {
			return Math.round(timeSince / oneDay) + ' days ago';
		} else if (timeSince < oneYear) {
			return Math.round(timestamp / oneMonth) + ' months ago';
		} else {
			return Math.round(timeSince / oneYear) + ' years ago';
		}
	}

	return (
		<div className='comment'>
			<div className='comment__icon-section'>
				<div className='comment__icon'></div>
			</div>
			<div className='comment__data'>
				<div className='comment__heading'>
					<div className='comment__name'>{name}</div>
					<div className='comment__date'>
						{commentRelativeTime(timestamp)}
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
