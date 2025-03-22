import data from "../assets/data.ts";
import SectionTitle from "./SectionTitle.tsx";
import Tech from "./Tech.tsx";

const TechStacks = () => {
  return (
    <div className="flex min-h-[80vh] w-full flex-col pt-8 pb-32">
      <SectionTitle title={"tech stack"} shadow={"my skill"} right={true} />
      <div className="grid gap-x-16 gap-y-4 px-16 sm:grid-cols-2 lg:px-24 xl:px-32">
        {data.skills.map((skill, index) => (
          <Tech key={skill + " #" + index + 1} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
