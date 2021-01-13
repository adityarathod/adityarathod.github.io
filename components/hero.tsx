import { FC } from 'react'

const Hero: FC = () => {
	return (
		<div className='my-40 leading-loose'>
			<h1 className='text-4xl font-normal mb-6'>👋 Hi, I&apos;m Aditya</h1>
			<h2 className='text-xl text-gray-300 my-1'>
				I&apos;m a second-year student at{' '}
				<span className='font-semibold text-spring'>The University of Texas at Dallas</span>
				.
			</h2>
			<h2 className='text-xl text-gray-300 my-1'>
				I&apos;ve previously worked as a summer{' '}
				<span className='font-semibold text-spring'>Software Developer Intern</span> at{' '}
				<span className='font-semibold'>RealPage</span>.
			</h2>
			<h2 className='text-xl text-gray-300 my-1'>Feel free to check out my work below!</h2>
		</div>
	)
}

export default Hero
