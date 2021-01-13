import { FC } from 'react'
import Head from 'next/head'
import Hero from '~/components/hero'
import Project from '~/components/project'
import projectsByYear, { ProjectData } from '~/data/projects'

const Index: FC = () => {
	const years = Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a))
	const yearEntries = years.map((year, idx) => {
		const projects = projectsByYear[year] as ProjectData[]
		return (
			<div
				className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mba-6 gap-12'
				key={idx}>
				<div className='col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 border border-white border-l-0 border-r-0 sm:border-r-0 md:border-r-4 lg:border-r-4 xl:border-r-4 border-t-0 border-b-0'>
					<div className='pt-4 flex flex-row items-center justify-start sm:justify-start md:justify-end lg:justify-end xl:justify-end'>
						<h1 className='font-bold text-4xl pr-8'>{year}</h1>
						<div className='text-cyan hidden sm:hidden md:block lg:block xl:block'>
							<svg
								viewBox='0 0 100 100'
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								style={{ marginRight: '-12px' }}
								className='fill-current'>
								<circle cx='50' cy='50' r='50' />
							</svg>
						</div>
					</div>
				</div>
				<div className='col-span-2 pb-6'>
					{projects.map((proj, pIdx) => (
						<Project project={proj} key={pIdx} />
					))}
				</div>
			</div>
		)
	})

	return (
		<main>
			<Head>
				<title>Aditya Rathod</title>
			</Head>
			<Hero />
			<div className='pt-24 max-w-3xl mx-auto'>{yearEntries}</div>
		</main>
	)
}

export default Index
