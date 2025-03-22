import { TextareaHTMLAttributes, forwardRef } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  placeholder: string;
  isRequired: boolean;
};

const CustomTextArea = forwardRef<HTMLTextAreaElement, Props>(({ placeholder, isRequired }: Props, ref) => {
  return (
    <fieldset className="w-full rounded-sm bg-slate-800 p-4">
      <textarea
        className="scrollbar-transparent w-full resize-none focus:outline-none"
        placeholder={placeholder}
        rows={8}
        ref={ref}
        required={isRequired}
      />
    </fieldset>
  );
});

export default CustomTextArea;
