import dayjs from 'dayjs';

const changeDateFormatWithTime = date => {
	if (date === undefined || date === null || date === '') return '-';
	return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};
const changeDateFormatWithTimeRemoveSeconds = date => {
	if (date === undefined || date === null || date === '') return '-';
	return dayjs(date).format('YYYY-MM-DD HH:mm');
};
const changeDateFormat = date => {
	if (date === undefined || date === null || date === '') return '-';
	return dayjs(date).format('YYYY-MM-DD');
};

export {
	changeDateFormat,
	changeDateFormatWithTime,
	changeDateFormatWithTimeRemoveSeconds,
};
