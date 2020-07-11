import React, { FC, useContext } from 'react'
import Head from 'next/head'
import classNames from 'classnames'
import { ThemeContext } from './_app'
import projects from '../data/projects'
import ProjectCard from '../components/home/ProjectCard'
import TopNav from '~/components/shared/TopNav'

const Home: FC = () => {
	const { theme } = useContext(ThemeContext)
	const darkMode = theme === 'dark'
	return (
		<>
			<div className='px-3 pt-8 mx-auto my-0 max-w-3xl'>
				<Head>
					<title>Aditya Rathod</title>
				</Head>
				<TopNav />

				<h1
					className={classNames(
						'text-4xl',
						'text-center',
						'font-medium',
						darkMode ? 'text-label-dark' : 'text-label-light'
					)}>
					👋&emsp;Hi, I&apos;m Aditya.
				</h1>

				<div
					className={classNames(
						'mt-4',
						'text-center',
						'text-xl',
						'font-light',
						darkMode ? 'text-label-dark' : 'text-label-light'
					)}>
					<p>
						I&apos;m a <span className='font-bold'>rising sophomore</span> at The
						University of Texas at Dallas who&apos;s interested in data science and
						machine learning.
					</p>
					<p className='my-2'>
						I'm currently a summer{' '}
						<span className='font-bold'>Software Developer Intern</span> at RealPage.
					</p>
					<p className='mb-2'>
						Feel free to check out a curated selection of the projects I've built below,
						or see all my projects and their source code on Github.
					</p>
				</div>
			</div>
			<div className='mt-4 flex flex-row justify-center items-center mx-auto my-0 max-w-screen-xl flex-wrap card-container'>
				{projects.map((project, idx) => (
					<ProjectCard
						title={project.title}
						subtitle={project.type.toUpperCase()}
						description={project.description}
						imageUrl={project.image}
						bkdColor={project.color}
						key={idx}
					/>
				))}
			</div>
		</>
	)
}

export default Home
