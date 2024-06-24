const menus = [
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
	{
		title: '배너관리',
		submenus: [
			{
				icon: 'banner-off.svg',
				activeIcon: 'banner-on.svg',
				title: '배너관리',
				to: '/banner-manage/banner',
			},
		],
	},
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
				title: '문의사항 관리',
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
export { menus };
