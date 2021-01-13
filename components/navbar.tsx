import { FC } from 'react'
import Link from 'next/link'
import { Github, Hamburger, LinkedIn } from './icons'

interface NavLinkProps {
	href: string
	text: string
}

const NavLink: FC<NavLinkProps> = (props: NavLinkProps) => (
	<Link href={props.href}>
		<a className='text-white text-md opacity-80 hover:opacity-100 transition-opacity mx-10 sm:mx-10 md:mx-5 lg:mx-10 xl:mx-10'>
			{props.text}
		</a>
	</Link>
)

const Navbar: FC = () => {
	return (
		<header className='max-w-5xl py-4 mx-auto flex flex-row items-center justify-between sm:justify-between md:justify-start lg:justify-start xl:justify-start'>
			<div className='mr-0 sm:mr-0 md:mr-8 lg:mr-10 xl:mr-10 text-center'>
				<Link href='/'>
					<a
						className='font-bold text-2xl text-white opacity-100 hover:opacity-80'
						href='#'>
						Aditya Rathod
						<span className='text-spring'>.</span>
					</a>
				</Link>
			</div>
			<nav className='hidden sm:hidden md:flex lg:flex xl:flex flex-1 flex-row items-center'>
				<NavLink href='/' text='Home' />
				<NavLink href='/resume.pdf' text='Resume' />
				<NavLink href='/blog' text='Blog' />
			</nav>
			<div className='block sm:block md:hidden lg:hidden xl:hidden text-white'>
				<button className='outline-none'>
					<Hamburger className='fill-current w-5' />
				</button>
			</div>
			<div className='hidden sm:hidden md:flex lg:flex xl:flex ml-24'>
				{/* <button className='mr-5 text-white opacity-70 hover:opacity-100 transition-opacity'>
					<Night className='fill-current w-5' />
				</button> */}
				<button className='mx-3 text-white opacity-70 hover:opacity-100 transition-opacity'>
					<Github className='fill-current w-5' />
				</button>
				<button className='mx-3 text-white opacity-70 hover:opacity-100 transition-opacity'>
					<LinkedIn className='fill-current w-5' />
				</button>
			</div>
		</header>
	)
}

export default Navbar
