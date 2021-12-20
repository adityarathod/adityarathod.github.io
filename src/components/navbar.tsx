import React, { FC } from 'react'
import { Link } from 'gatsby'
import { Github, LinkedIn } from './icons'

interface NavLinkProps {
	href: string
	text: string
	external?: boolean
	mobile?: boolean
}

const NavLink: FC<NavLinkProps> = (props: NavLinkProps) => {
	const linkClasses = props.mobile
		? 'text-white text-md opacity-80 hover:opacity-100 transition-opacity mr-10'
		: 'text-white text-md opacity-80 hover:opacity-100 transition-opacity mx-10 sm:mx-10 md:mx-5 lg:mx-10 xl:mx-10'

	return props.external ? (
		<a href={props.href} className={linkClasses}>
			{props.text}
		</a>
	) : (
		<Link to={props.href} className={linkClasses}>
			{props.text}
		</Link>
	)
}

const Navbar: FC = () => {
	return (
		<section>
			<header className='max-w-5xl py-4 mx-auto flex flex-row items-center justify-between sm:justify-between md:justify-start lg:justify-start xl:justify-start'>
				<div className='mr-0 sm:mr-0 md:mr-8 lg:mr-10 xl:mr-10 text-center'>
					<Link
						to='/'
						className='font-bold text-2xl text-white opacity-100 hover:opacity-80'>
						Aditya Rathod
						<span className='text-spring'>.</span>
					</Link>
				</div>
				<nav className='hidden sm:hidden md:flex lg:flex xl:flex flex-1 flex-row items-center'>
					<NavLink href='/' text='Home' />
					<NavLink href='/resume.pdf' text='Resume' external />
					<NavLink href='/blog' text='Blog' />
				</nav>
				<div className='hidden sm:hidden md:flex lg:flex xl:flex ml-24'>
					<a
						className='mx-3 text-white opacity-70 hover:opacity-100 transition-opacity'
						href='//github.com/adityarathod'>
						<Github className='fill-current w-5' />
					</a>
					<a
						className='mx-3 text-white opacity-70 hover:opacity-100 transition-opacity'
						href='//linkedin.com/in/aditya-rathod'>
						<LinkedIn className='fill-current w-5' />
					</a>
				</div>
			</header>
			<nav className='mt-2 flex sm:flex md:hidden flex-1 flex-row items-a'>
				<NavLink mobile href='/' text='Home' />
				<NavLink mobile href='/resume.pdf' text='Resume' external />
				<NavLink mobile href='/blog' text='Blog' />
				<div className='flex-1'></div>
				<a
					className='mr-3 text-white opacity-70 hover:opacity-100 transition-opacity'
					href='//github.com/adityarathod'>
					<Github className='fill-current w-5' />
				</a>
				<a
					className='ml-3 text-white opacity-70 hover:opacity-100 transition-opacity'
					href='//linkedin.com/in/aditya-rathod'>
					<LinkedIn className='fill-current w-5' />
				</a>
			</nav>
		</section>
	)
}

export default Navbar
