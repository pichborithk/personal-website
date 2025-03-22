import { IRecord } from "../assets/data.ts";

type Props = {
  record: IRecord;
  index: number;
};

const TimelineEntry = ({ record, index }: Props) => {
  const leftSide = index % 2 === 0;
  return (
    <div className={"flex max-w-full py-2 " + (leftSide && "lg:flex-row-reverse")}>
      <div className="hidden flex-1 lg:block"></div>
      <div className={"flex flex-1 items-center justify-center gap-2 " + (leftSide && "lg:flex-row-reverse")}>
        <div className={"hidden -translate-x-3 sm:block " + (leftSide && "lg:translate-x-3")}>
          <div className="border-primary/30 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 backdrop-blur-md">
            <div className="bg-primary h-4 w-4 rounded-full"></div>
          </div>
        </div>
        <div className="rounded-3xl border-2 border-slate-500">
          <div className="flex items-center justify-between border-b-2 border-slate-600 px-4 py-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-primary font-secondary font-SfMonoBold leading-none font-semibold">{record.title}</h3>
              <p className="text-justify font-medium italic">{record.organization}</p>
            </div>
            <div className="min-w-1/4 rounded-full bg-slate-700 px-4 py-2 text-center text-white">
              <span className="text-xs">{record.timeline}</span>
            </div>
          </div>
          <div className="p-4 pl-6 text-slate-400">
            <ul className="list-disc">
              {record.description.map((item, index) => (
                <li
                  key={record.timeline + " description #" + index}
                  className="font-secondary ms-2.5 mb-2 text-justify"
                >
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEntry;
