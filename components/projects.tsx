import React, { FC } from "react";
import projects, { ProjectData } from "../data/projects";

interface ProjectProps {
  project: ProjectData;
}
const ProjectInfo: FC<ProjectProps> = ({
  project: { title, type, description, link },
}: ProjectProps) => (
  <a
    className="block mb-12 text-left hover:opacity-80 transition-opacity"
    href={link ?? "#"}
  >
    <h3 className="uppercase text-sm font-semibold text-cyan tracking-wider">
      {type}
    </h3>
    <h2 className="text-white text-2xl mt-1 font-bold">{title}</h2>
    <p className="mt-2">{description}</p>
  </a>
);

interface ProjectYearWrapperProps {
  yearValue: string;
  children?: React.ReactNode;
}

const ProjectYearWrapper: FC<ProjectYearWrapperProps> = ({
  yearValue,
  children,
}) => {
  const yearMarkerCircle = (
    <div className="text-cyan hidden lg:block">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        style={{ marginRight: "-12px" }}
        className="fill-current"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
    </div>
  );

  return (
    <div className="grid grid-cols-6 mba-6 gap-12">
      <div className="col-span-6 lg:col-span-1 border border-white border-l-0 border-r-0 lg:border-r-4 border-t-0 border-b-0">
        <div className="pt-4 flex flex-row items-center justify-start lg:justify-end">
          <h1 className="font-bold text-4xl pr-8">{yearValue}</h1>
          {yearMarkerCircle}
        </div>
      </div>
      <div className="col-span-6 lg:col-span-5 pb-6">{children}</div>
    </div>
  );
};

export default function Projects() {
  const allNodes = Object.keys(projects)
    .map((yKey, yIdx) => {
      const year = parseInt(yKey);
      const yProjects = (projects[year] as ProjectData[]).map((proj, pIdx) => (
        <ProjectInfo project={proj} key={pIdx} />
      ));
      return (
        <ProjectYearWrapper yearValue={yKey} key={yIdx}>
          {yProjects}
        </ProjectYearWrapper>
      );
    })
    .reverse();

  return (
    <>
      <h1 className="text-3xl font-semibold mb-10">Projects</h1>
      <div className="ml-0 lg:ml-[15px]">{allNodes}</div>
    </>
  );
}
