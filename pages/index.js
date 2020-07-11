import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import classNames from 'classnames';
import ProjectCard from '../components/home/ProjectCard';
import { ThemeContext } from './_app';
import projects from '../data/projects';

const TopLink = ({ href, text }) => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === 'dark';
  return (
    <Link href={href}>
      <a className={classNames(
        'cursor-pointer',
        'px-4',
        darkMode ? 'hover:text-link-dark' : 'hover:text-link-light',
        darkMode ? 'text-label-dark' : 'text-label-light'
      )}>{text}</a>
    </Link>
  );
}

const TopLinkDivider = () => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === 'dark';
  return (
    <div className={classNames(
      'text-4xl',
      'font-thin',
      darkMode ? 'text-systemGray2-dark' : 'text-systemGray2-light',
      'select-none')}>/</div>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const darkMode = theme === 'dark';
  return (
    <>
      <div className="px-3 pt-8 mx-auto my-0 max-w-3xl">
        <Head>
          <title>Aditya Rathod</title>
        </Head>
        <button
          className={classNames('absolute', 'text-sm', 'font-bold', 'outline-none', darkMode ? 'text-systemBlue-dark' : 'text-systemBlue-light')}
          style={{ top: '10px', right: '10px', outline: 'none' }}
          onClick={() => toggleTheme()}
        >
          {theme} mode
        </button>
        <div className="mb-8">
          <h1 className={classNames('text-3xl', 'text-center', 'font-bold', darkMode ? 'text-label-dark' : 'text-label-light')}>
            Aditya Rathod
          </h1>
          <div className="px-4 max-w-md mx-auto my-0 flex flex-row items-center justify-between">
            <TopLink href="#" text="home" />
            <TopLinkDivider />
            <TopLink href="//github.com/adityarathod" text="github" />
            <TopLinkDivider />
            <TopLink href="/resume.pdf" text="resumé" />
            <TopLinkDivider />
            <TopLink href="/blog" text="blog" />
          </div>
        </div>

        <h1 className={classNames('text-4xl', 'text-center', 'font-medium', darkMode ? 'text-label-dark' : 'text-label-light')}>
          👋&emsp;Hi, I'm Aditya.
        </h1>

        <div className={classNames('mt-4', 'text-center', 'text-xl', 'font-light', darkMode ? 'text-label-dark' : 'text-label-light')}>
          <p>I'm a <span className="font-bold">rising sophomore</span> at The University of Texas at Dallas who's interested in data science and machine learning.</p>
          <p className="my-2">I'm currently a summer <span className="font-bold">Software Developer Intern</span> at RealPage.</p>
          <p className="mb-2">Feel free to check out a curated selection of the projects I've built below, or see all my projects and their source code on Github.</p>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center items-center mx-auto my-0 max-w-screen-xl flex-wrap card-container">
        {projects.map((project, idx) =>
          <ProjectCard
            title={project.title}
            subtitle={project.type.toUpperCase()}
            description={project.description}
            imageUrl={project.image}
            bkdColor={project.color}
            key={idx}
          />
        )}
      </div>
      <div className={classNames('mt-32', 'mb-8', 'text-center', darkMode ? 'text-secondaryLabel-dark' : 'text-secondaryLabel-light')}>
        <p>Designed by Aditya in California.</p>
        <p className="mt-4 text-xs">&copy; 2020 Aditya Rathod. All rights reserved.</p>
      </div>
    </>
  )
}
