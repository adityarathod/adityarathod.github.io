interface Post {
	title: string
	description: string
	slug: string
	date: string
}

const posts: Post[] = [
	{
		title: 'Predicting Titanic Survivors: My First Machine Learning Model',
		description:
			'Learn how to build a machine learning model to predict Titanic survivors based on a Kaggle dataset.',
		date: 'August 4, 2018',
		slug: 'predicting-titanic-survivors',
	},
	{
		title: 'Protecting Trivia Apps from Cheaters',
		description:
			'How people cheat at trivia games, and how the companies running them could stop this from happening.',
		date: 'December 16, 2017',
		slug: 'protect-trivia-from-bots',
	},
	{
		title: 'Analyzing Browser History Using Python and Pandas',
		description:
			'Explore the depths of your browser history with this introductory data science tutorial.',
		date: 'November 12, 2017',
		slug: 'analyzing-browser-hist-using-python',
	},
]

export default posts
