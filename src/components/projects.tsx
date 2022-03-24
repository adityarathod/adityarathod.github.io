import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ProjectData, ProjectDataWrapped } from '../types/project-data'

interface ProjectProps {
  project: ProjectData
}
const ProjectInfo: FC<ProjectProps> = ({
  project: { title, type, description, link },
}: ProjectProps) => (
  <a
    className="block mb-12 text-left hover:opacity-80 transition-opacity"
    href={link ?? '#'}
  >
    <h3 className="uppercase text-sm font-semibold text-cyan tracking-wider">
      {type}
    </h3>
    <h2 className="text-white text-2xl mt-1 font-bold">{title}</h2>
    <p className="mt-2">{description}</p>
  </a>
)

interface ProjectYearWrapperProps {
  yearValue: string
}

const ProjectYearWrapper: FC<ProjectYearWrapperProps> = ({
  yearValue,
  children,
}) => {
  const yearMarkerCircle = (
    <div className="text-cyan hidden sm:hidden md:block lg:block xl:block">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        style={{ marginRight: '-12px' }}
        className="fill-current"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
    </div>
  )

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mba-6 gap-12">
      <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 border border-white border-l-0 border-r-0 sm:border-r-0 md:border-r-4 lg:border-r-4 xl:border-r-4 border-t-0 border-b-0">
        <div className="pt-4 flex flex-row items-center justify-start sm:justify-start md:justify-end lg:justify-end xl:justify-end">
          <h1 className="font-bold text-4xl pr-8">{yearValue}</h1>
          {yearMarkerCircle}
        </div>
      </div>
      <div className="col-span-2 pb-6">{children}</div>
    </div>
  )
}

const Projects: FC = () => {
  const {
    allProjects: { years },
  } = useStaticQuery(graphql`
    query AllProjects {
      allProjects: allProjectsJson {
        years: group(field: year) {
          value: fieldValue
          projects: edges {
            node {
              ...projectFields
            }
          }
        }
      }
    }

    fragment projectFields on ProjectsJson {
      title
      description
      link
      type
    }
  `)

  return years
    .map((year, yIdx) => {
      const projects = (year.projects as ProjectDataWrapped[]).map(
        (proj, pIdx) => <ProjectInfo project={proj.node} key={pIdx} />,
      )
      const yearValue = year.value as string
      return (
        <ProjectYearWrapper yearValue={yearValue} key={yIdx}>
          {projects}
        </ProjectYearWrapper>
      )
    })
    .reverse()
}

export default Projects
