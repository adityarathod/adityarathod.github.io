interface ProjectType {
	title: string
	type: string
	description: string
	image: string
	color: string
	link?: string
}

const projects: ProjectType[] = [
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
			'Currently working on a platform connecting high school students to undergraduate college applications mentors.',
		image: '/accepted.svg',
		color: '#EFEBE3',
		link: '//github.com/acceptedlabs/frontend',
	},
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
	{
		title: 'HQ Trivia QAS',
		type: 'Console App',
		description:
			'Developed a question-answering system for HQ Trivia app with realtime OCR in a weekend, with blog post explaining how to mitigate such approaches. Blog post was referenced in articles by The Verge and the Washington Post.',
		image: '/hqtrivia.svg',
		color: '#36399a',
		link: '/blog/protect-trivia-from-bots/',
	},
]

export default projects
