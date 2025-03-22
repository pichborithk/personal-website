type Props = {
  title: string;
  shadow: string;
  right: boolean;
};

const SectionTitle = ({ title, shadow, right }: Props) => {
  const [leftTitle, rightTitle] = title.split(" ");
  return (
    <div className="relative mb-16 flex w-full items-center justify-center text-center font-semibold uppercase">
      <div className="flex-grow border-t border-gray-700"></div>
      <div className={"z-10 flex gap-2 " + (!right && "flex-row-reverse")}>
        <h1 className="text-primary">{leftTitle}</h1>
        <h1>{rightTitle}</h1>
      </div>
      <div className="flex-grow border-t border-gray-700"></div>
      <span className="absolute inset-y-0 left-1/2 flex -translate-x-1/2 items-center text-5xl text-slate-800 md:text-7xl lg:text-8xl">
        {shadow}
      </span>
    </div>
  );
};

export default SectionTitle;
