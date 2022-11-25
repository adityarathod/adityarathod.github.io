import React, { FC } from 'react'

const Hero: FC = () => {
  return (
    <section className="my-40 leading-loose">
      <h1 className="text-4xl font-normal mb-6">👋 Hi, I&apos;m Aditya</h1>
      <h2 className="text-xl text-gray-300 my-1">
        I&apos;m a third-year student at{' '}
        <span className="font-semibold text-spring">
          The University of Texas at Dallas
        </span>
        .
      </h2>
      <h2 className="text-xl text-gray-300 my-1">
        I&apos;m a{' '}
        <span className="font-semibold text-spring">two-time intern</span>{' '}
        looking to broaden my impact this upcoming summer.
      </h2>
      <h2 className="text-xl text-gray-300 my-1">
        Feel free to check out my work below!
      </h2>
    </section>
  )
}

export default Hero
