import { InputHTMLAttributes, forwardRef } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  placeholder: string;
  isRequired: boolean;
};

const CustomInput = forwardRef<HTMLInputElement, Props>(({ placeholder, type, isRequired }: Props, ref) => {
  return (
    <fieldset className="w-full rounded-sm bg-slate-800 px-4 py-2">
      <input className="focus:outline-none" placeholder={placeholder} ref={ref} type={type} required={isRequired} />
    </fieldset>
  );
});

export default CustomInput;
