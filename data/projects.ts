export interface ProjectData {
	title: string
	type: string
	description: string
	image: string
	color: string
	link?: string
}

export const projects: Record<number, ProjectData[]> = {
	2021: [
		{
			title: 'Comparison of Online Portfolio Selection Algorithms',
			type: 'Research Project',
			description:
				'Comparing the real-world performance of current approaches to OLPS on a variety of portfolios and trading frequencies.',
			image: null,
			color: null,
			link: '//github.com/ACM-Research/online-portfolio-selection',
		},
		{
			title: 'Texas Grid Load Tracker: Real-Time Power Capacity Graph',
			type: 'Web Scraper + Dashboard',
			description:
				'Collected, stored, and displayed ERCOT capacity and usage data graphs throughout the Texas winter storm crisis.',
			image: null,
			color: null,
			link: '/texas-grid-load-tracker',
		},
		{
			title: 'Hackback: Jamstack-Friendly Hackathon Registration & Hosting System',
			type: 'Web App',
			description: null,
			image: null,
			color: null,
			link: '//github.com/adityarathod/hackback',
		},
		{
			title: 'Zetaboard: Mental Math Practice for Trading Interviews',
			type: 'Web App',
			description:
				'Developing a competitive mental math practice game aimed at preparing for trading interviews.',
			image: null,
			color: null,
			link: '//zetaboard.vercel.app/',
		},
	],
	2020: [
		{
			title: 'ACM Hacktoberfest: On-Brand Interactive Event Site',
			type: 'Website',
			description:
				'Collaborated with an team of designers and writers to develop a centralized hub for event information.',
			image: null,
			color: null,
			link: '//hacktoberfest.acmutd.co/',
		},
		{
			title: 'Leasing Tablet Hybrid @ RealPage',
			type: 'Internship Project',
			description:
				'Developed hybrid redesign of existing Leasing Tablet mobile application using React Native, allowing it to run on iOS and Android.',
			image: '/leasing-tab-react.svg',
			color: '#61DAFB',
			link: '//linkedin.com/in/aditya-rathod',
		},
		{
			title: 'Accepted: College Application Mentorship Platform',
			type: 'Web App',
			description:
				'Worked on a platform connecting high school students to undergraduate college applications mentors.',
			image: '/accepted.svg',
			color: '#EFEBE3',
			link: '//github.com/acceptedlabs/frontend',
		},
	],
	2019: [
		{
			title: 'Liform: Medical Billing Analytics',
			type: 'Web App',
			description:
				'I built an app to compare treatment costs across multiple providers with my hackathon team. I wrote an ETL pipeline in Python to extract pricing data.',
			image: '/liform.svg',
			color: '#7DFFCF',
			link: '//github.com/TheGradientGroup/liform-backend',
		},
		{
			title: 'Reportik: Abstractive Text Summarization Model',
			type: 'Machine Learning Model',
			description:
				'Attempted to repurpose LSTM-based neural sequence-to-sequence language model to the domain of long-form text summarization.',
			image: '/reportik.svg',
			color: '#713FFF',
			link: '//github.com/adityarathod/reportik',
		},
		{
			title: 'Credit Card Fraud Detection',
			type: 'Machine Learning Model',
			description:
				'Trained a small machine learning model to detect fraudulent transactions. Learned how to deal with skewed data and metrics such as F₁ score.',
			image: '/ccf.svg',
			color: '#FF6F6F',
			link: '//github.com/adityarathod/fraud-detection',
		},
	],
	2018: [
		{
			title: 'HQ Trivia QAS',
			type: 'Console App',
			description:
				'Developed a question-answering system for HQ Trivia app with realtime OCR in a weekend, with blog post explaining how to mitigate such approaches. Blog post was referenced in articles by The Verge and the Washington Post.',
			image: '/hqtrivia.svg',
			color: '#36399a',
			link: '/blog/protect-trivia-from-bots/',
		},
	],
}

export default projects
