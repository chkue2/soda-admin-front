const keyupToLocaleString = str => {
	const num = String(str).replace(/[^0-9]/gi, '');
	return num === '' ? '' : parseInt(num).toLocaleString();
};

const convertToKoreanCurrency = num => {
	if (num == '0' || num === '') return '영';
	const number = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
	const unit = ['', '만', '억', '조'];
	const smallUnit = ['천', '백', '십', ''];

	let result = []; //변환된 값을 저장할 배열

	var unitCnt = Math.ceil(num.length / 4); //단위 갯수. 숫자 10000은 일단위와 만단위 2개이다.
	num = num.padStart(unitCnt * 4, '0'); //4자리 값이 되도록 0을 채운다

	const regexp = /[\w\W]{4}/g; //4자리 단위로 숫자 분리
	const array = num.match(regexp); //낮은 자릿수에서 높은 자릿수 순으로 값을 만든다(그래야 자릿수 계산이 편하다)

	for (let i = array.length - 1, unitCnt = 0; i >= 0; i--, unitCnt++) {
		const hanValue = _makeHan(array[i]); //한글로 변환된 숫자
		if (hanValue == '')
			//값이 없을땐 해당 단위의 값이 모두 0이란 뜻.
			continue;

		result.unshift(hanValue + unit[unitCnt]); //unshift는 항상 배열의 앞에 넣는다.
	}

	function _makeHan(text) {
		let str = '';
		for (let i = 0; i < text.length; i++) {
			const num = text[i];
			if (num == '0')
				//0은 읽지 않는다
				continue;
			str += number[num] + smallUnit[i];
		}
		return str;
	}
	return result.join('');
};

/**
 * 숫자로만 된 전화번호를 -를 포함한 전화번호로 변경
 *
 * @param {string} text
 * @returns
 */
const rexFormatPhone = text => {
	return (text || '')
		.replace(/[^0-9]/g, '') // 숫자만 남기기
		.replace(/^02(\d{3,4})(\d{4})/, '02-$1-$2') // 02인 경우
		.replace(/^070(\d{3,4})(\d{4})/, '070-$1-$2') // 070인 경우
		.replace(/^(15[0-9]{2}|16[0-9]{2})(\d{4})/, '$1-$2') // 1588 ~ 1688인 경우
		.replace(/^(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3') // 3자리 지역번호인 경우
		.replace(/^(\d{2})(\d{3,4})(\d{4})/, '$1-$2-$3'); // 2자리 지역번호인 경우
};

/**
 * 비밀번호 validation
 * 영문, 숫자, 특수문자를 조합한 8자리 이상.
 */
const isValidPassword = password => {
	const regex =
		/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

	return regex.test(password);
};

/**
 * 아이디 validation
 * 영문이나 숫자 5자리 이상.
 */
const isValidId = id => {
	const regex = /^[A-Za-z0-9]{5,}$/;

	return regex.test(id);
};

/**
 * blob data를 활용해 file download
 * 파일명은 fileName.ext
 *
 * @param {blob} data
 * @param {string} fileName
 * @param {string} ext
 */
const fileDownload = (data, fileName, ext) => {
	const url = window.URL.createObjectURL(new Blob([data]));
	const link = document.createElement('a');
	link.href = url;
	link.setAttribute('download', `${fileName}.${ext}`);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

/**
 * [Object object]를 받아서 빈값이 아닌 경우에만 querystring으로 return
 *
 * @param {object} data
 */
const getQueryString = data => {
	let queryString = '';
	for (const key in data) {
		const value = data[key];
		if (
			!['dep', '__v_isRef', '__v_isShallow', '_rawValue', '_value'].includes(
				key,
			)
		) {
			if (value !== null && value !== undefined && value !== '') {
				if (queryString.length === 0) {
					queryString += `?${key}=${value}`;
				} else {
					queryString += `&${key}=${value}`;
				}
			}
		}
	}
	return queryString;
};

/**
 * string을 받아서 해당 값 클립보드에 저장 (복사하기)
 *
 * @param {string} str
 */
const copyClipboard = str => {
	const tmpEl = document.createElement('textarea');
	document.body.appendChild(tmpEl);
	tmpEl.value = str;
	tmpEl.select();
	tmpEl.setSelectionRange(0, 9999);
	document.execCommand('copy');
	tmpEl.setSelectionRange(0, 0);
	document.body.removeChild(tmpEl);
	alert(`${str} 복사되었습니다.`);
};

export {
	convertToKoreanCurrency,
	copyClipboard,
	fileDownload,
	getQueryString,
	isValidId,
	isValidPassword,
	keyupToLocaleString,
	rexFormatPhone,
};
