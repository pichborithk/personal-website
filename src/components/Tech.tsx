import { ISkill } from "../assets/data.ts";

type Props = {
  skill: ISkill;
};

const Tech = ({ skill }: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg uppercase">
      <div className="bg-primary flex items-center justify-center rounded-full p-2 text-center text-4xl">
        <i className={skill.icon}></i>
      </div>
      <div className="flex flex-1 flex-wrap items-start justify-between self-start py-4">
        <h5>{skill.name}</h5>
        <h5>{skill.percentage}%</h5>
        <div className="h-2 flex-1 basis-full bg-slate-500">
          <div className="bg-primary h-2" style={{ width: `${skill.percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
