import { FC } from 'react'
import Link from 'next/link'
import type { ProjectData } from '../data/projects'

interface ProjectProps {
	project: ProjectData
}
const Project: FC<ProjectProps> = ({
	project: { title, type, description, link },
}: ProjectProps) => {
	const btn = (
		<a className='block mb-12 text-left hover:opacity-80 transition-opacity'>
			<h3 className='uppercase text-sm font-semibold text-cyan tracking-wider'>{type}</h3>
			<h2 className='text-white text-2xl mt-1 font-bold'>{title}</h2>
			<p className='mt-2'>{description}</p>
		</a>
	)
	if (link) return <Link href={link}>{btn}</Link>
	else return btn
}

export default Project
