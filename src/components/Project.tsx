import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons/faFolderOpen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IProject } from "../assets/data.ts";

type Props = {
  project: IProject;
};

const Project = ({ project }: Props) => {
  return (
    <div className="hover:border-primary flex h-72 flex-col items-center gap-4 bg-slate-800 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border">
      <div className="flex w-full justify-between px-2">
        <FontAwesomeIcon icon={faFolderOpen} size="2xl" className="text-primary" />
        <div className="flex gap-2">
          <a href={project.repo} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="xl" className="hover:text-primary cursor-pointer" />
          </a>
          {project.url && (
            <a href={project.url} target="_blank">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="xl"
                className="hover:text-primary cursor-pointer"
              />
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="font-medium">{project.name}</h3>
        <p className="text-slate-400">{project.description}</p>
      </div>
      <div className="text-primary font-SfMono flex w-full flex-wrap items-start gap-1 gap-x-3 self-start">
        {project.techs.map(tech => (
          <p key={tech}>{tech}</p>
        ))}
      </div>
    </div>
  );
};

export default Project;
