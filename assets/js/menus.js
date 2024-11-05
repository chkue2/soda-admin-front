const prirosMenus = [
	{
		title: '마켓관리',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '마켓관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '사건 상태변경',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '입찰매칭관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '이상사건',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '사건파기내역',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '알림조회',
				to: '/',
			},
		],
	},
	{
		title: '전문관리',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '마켓재보고',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '마켓전문이력',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '전문에러',
				to: '/',
			},
		],
	},
	{
		title: '통계',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '시도별통계',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '전문가분포지도',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '전국 법무사 정보',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '업무통계',
				to: '/',
			},
		],
	},
	{
		title: '게시판관리',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '공지사항',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: 'FAQ',
				to: '/',
			},
		],
	},
	{
		title: '문서관리',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '문서관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '등기유형별문서관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '알리고템플릿관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '약관관리',
				to: '/',
			},
		],
	},
	{
		title: '채권관리',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '채권할인율관리',
				to: '/',
			},
		],
	},
	{
		title: '기관관리',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '기관신청관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '블랙리스트 기관별 관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '기관관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '지점관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '협약기관관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '안심본인인증',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '이용자관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '이용자 필수정보관리',
				to: '/',
			},
		],
	},
	{
		title: '평점관리',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '평점기준',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '평점이력',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '태그관리',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '고객평점',
				to: '/',
			},
		],
	},
	{
		title: '상담노트',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '1:1문의',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '상담노트',
				to: '/',
			},
		],
	},
	{
		title: '결제관리',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '보험료결제내역',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '취소분 소급 결제 내역',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '보험료 일반 결제 내역',
				to: '/',
			},
		],
	},
	{
		title: '어드민',
		submenus: [
			{
				icon: '',
				activeIcon: '',
				title: '사용이력',
				to: '/',
			},
			{
				icon: '',
				activeIcon: '',
				title: '어드민 사용자 관리',
				to: '/',
			},
		],
	},
];
const sodaMenus = [
	{
		title: '회원관리',
		submenus: [
			{
				icon: 'member-off.svg',
				activeIcon: 'member-on.svg',
				title: '회원관리',
				to: '/member-manage/member',
			},
			{
				icon: 'out-off.svg',
				activeIcon: 'out-on.svg',
				title: '탈퇴회원관리',
				to: '/member-manage/out',
			},
		],
	},
	{
		title: '리뷰관리',
		submenus: [
			{
				icon: 'review-off.svg',
				activeIcon: 'review-on.svg',
				title: '리뷰관리',
				to: '/review-manage/review',
			},
		],
	},
	// {
	// 	title: '배너관리',
	// 	submenus: [
	// 		{
	// 			icon: 'banner-off.svg',
	// 			activeIcon: 'banner-on.svg',
	// 			title: '배너관리',
	// 			to: '/banner-manage/banner',
	// 		},
	// 	],
	// },
	{
		title: '고객센터',
		submenus: [
			// {
			//   icon: "peoples-gray.svg",
			//   activeIcon: "peoples-black.svg",
			//   title: "FAQ 유형 관리",
			//   to: "/",
			// },
			// {
			//   icon: "people-gray.svg",
			//   activeIcon: "people-black.svg",
			//   title: "FAQ 관리",
			//   to: "/",
			// },
			// {
			//   icon: "face-id-gray.svg",
			//   activeIcon: "face-id-black.svg",
			//   title: "문의 유형 관리",
			//   to: "/",
			// },
			{
				icon: 'inquiry-off.svg',
				activeIcon: 'inquiry-on.svg',
				title: '문의사항관리',
				to: '/help-center/inquiry',
			},
		],
	},
	{
		title: '공지사항관리',
		submenus: [
			{
				icon: 'notice-off.svg',
				activeIcon: 'notice-on.svg',
				title: '공지사항관리',
				to: '/notice-manage/notice',
			},
			// {
			//   icon: "help-square-contained-gray.svg",
			//   activeIcon: "help-square-contained-black.svg",
			//   title: "헬프센터",
			//   to: "/",
			// },
		],
	},
	{
		title: '약관관리',
		submenus: [
			{
				icon: 'use-off.svg',
				activeIcon: 'use-on.svg',
				title: '이용약관',
				to: '/terms-manage/use',
			},
			{
				icon: 'privacy-off.svg',
				activeIcon: 'privacy-on.svg',
				title: '개인정보처리방침',
				to: '/terms-manage/privacy',
			},
		],
	},
];
export { prirosMenus, sodaMenus };
