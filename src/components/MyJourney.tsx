import { Dispatch, SetStateAction, useEffect, useState } from "react";

import data, { IRecord } from "../assets/data.ts";
import SectionTitle from "./SectionTitle.tsx";
import TimelineEntry from "./TimelineEntry.tsx";

const MyJourney = () => {
  const [timelineEntries, setTimelineEntries] = useState<IRecord[]>([]);

  useEffect(() => {
    setTimelineEntries(data.experiences);
  }, []);

  return (
    <div className="min-h-[80vh] pt-8 pb-32">
      <SectionTitle title={"journey my"} shadow={"experience"} right={false} />
      <div className="flex flex-col gap-8">
        <ToggleButtons setData={setTimelineEntries} />
        <div className="relative w-full">
          <div className="relative w-full overflow-hidden">
            <div className="mx-auto px-6 md:px-24 lg:px-16">
              <div className="bg-primary absolute top-2 hidden h-full w-[2px] rounded-full opacity-[0.2] sm:block lg:left-1/2 lg:-translate-x-1/2"></div>
              {timelineEntries.map((record, index) => (
                <TimelineEntry key={record + " #" + index + 1} record={record} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToggleButtons = ({ setData }: { setData: Dispatch<SetStateAction<IRecord[]>> }) => {
  const [record, setRecord] = useState("experiences");

  function experienceClicked() {
    setRecord("experiences");
    setData(data.experiences);
  }

  function educationClicked() {
    setRecord("educations");
    setData(data.educations);
  }

  const backgroundStylePosition = record === "experiences" ? "left-0" : "left-1/2";

  return (
    <div className="border-primary relative mx-auto flex w-fit items-center justify-center rounded-sm border p-1 font-medium">
      <div className="relative flex w-full rounded-full">
        <div
          className={
            "bg-primary absolute top-0 h-full w-1/2 rounded-sm transition-all duration-300 " + backgroundStylePosition
          }
        ></div>
        <div onClick={experienceClicked} className="hover:bg-primary/15 z-10 cursor-pointer px-8 py-2">
          <h2>Experience</h2>
        </div>
        <div onClick={educationClicked} className="hover:bg-primary/15 z-10 cursor-pointer px-8 py-2">
          <h2>Education</h2>
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
