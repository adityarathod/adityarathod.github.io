import { useContext } from 'react';
import { ThemeContext } from '../../pages/_app';
import classNames from 'classnames';

const ProjectCard = ({ title, subtitle, description, imageUrl, bkdColor, onClick }) => {
	const { theme } = useContext(ThemeContext);
	const isDarkMode = theme === 'dark';
	return (
		<button className={classNames('card', isDarkMode ? 'bg-secondarySystemBackground-dark' : 'bg-secondarySystemBackground-light')} onClick={onClick}>
			<div className="card--image">
				<img src={imageUrl} />
			</div>
			<div className="card--body px-6 py-4 w-full text-left">
				<div>
					<h3 className={classNames('card--subtitle', 'text-md', isDarkMode ? 'text-secondaryLabel-dark' : 'text-secondaryLabel-light')}>
						{subtitle}
					</h3>
					<h2 className={classNames('card--title', 'font-bold', 'text-2xl', isDarkMode ? 'text-label-dark' : 'text-label-light')}>
						{title}
					</h2>
				</div>
				<div className="flex-1"></div>
				<div className={classNames('mb-2', 'card--description', isDarkMode ? 'text-secondaryLabel-dark' : 'text-secondaryLabel-light')}>
					{description}
				</div>
			</div>
			<style jsx>{`
		.card {
			width: 350px;
			height: 450px;
			border-radius: 15px;
			box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
			transition: transform 0.1s ease-in;
			margin: auto 20px;
			outline: none;
			display: flex;
			flex-direction: column;
			margin-top: 30px;
		}
		.card:hover {
			transform: scale(1.05);
			transition: transform 0.3s;
		}
		.card:active {
			transform: scale(0.95);
			transition: transform 0.3s;
		}
		.card--image {
			width: 100%;
			height: 40%;
			background-color: ${bkdColor};
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border-top-left-radius: 15px;
			border-top-right-radius: 15px;
			filter: ${isDarkMode ? 'brightness(80%)' : 'none'};
		}
		.card--image > img {
			width: 40%;
			height: auto;
		}
		.card--body {
			height: 60%;
			display: flex;
			flex-direction: column;
		}
		.card--title {
			max-width: 90%;
			line-height: 2rem;
		}
		.card--description {
			align-self: flex-end;
		}
		`}</style>
		</button>
	);
}

export default ProjectCard;