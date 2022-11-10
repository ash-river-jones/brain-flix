export default function relativeTime(timestamp) {
	const oneYear = 1000 * 60 * 60 * 24 * 365.25;
	const oneMonth = 1000 * 60 * 60 * 24 * (365.25 / 12);
	const oneDay = 1000 * 60 * 60 * 24;
	const oneHour = 1000 * 60 * 60;
	const oneMinute = 1000 * 60;

	const timeSince = new Date().getTime() - timestamp;

	if (timeSince <= oneMinute) {
		return 'Just now';
	} else if (timeSince < oneHour) {
		return Math.round(timeSince / oneMinute) + ' minute(s) ago';
	} else if (timeSince < oneDay) {
		return Math.round(timestamp / oneHour) + ' hour(s) ago';
	} else if (timeSince < oneMonth) {
		return Math.round(timeSince / oneDay) + ' day(s) ago';
	} else if (timeSince < oneYear) {
		return Math.round(timestamp / oneMonth) + ' month(s) ago';
	} else {
		return Math.round(timeSince / oneYear) + ' year(s) ago';
	}
}
