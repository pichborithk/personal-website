import data from "../assets/data.ts";
import Project from "./Project.tsx";
import SectionTitle from "./SectionTitle.tsx";

const Projects = () => {
  return (
    <div className="min-h-[80vh] w-full pt-8 pb-32">
      <SectionTitle title={"portfolio"} shadow={"projects"} right={false} />
      <h2 className="mb-8 text-center">Here is some of my works that I've done in various technologies</h2>
      <div className="grid gap-4 px-16 sm:grid-cols-2 lg:grid-cols-3 xl:px-32">
        {data.projects.map((project, index) => (
          <Project key={project.name + " #" + index + 1} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
