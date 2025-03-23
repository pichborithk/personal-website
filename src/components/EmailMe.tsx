import { FormEvent, useRef } from "react";

import { toast } from "react-hot-toast";

import isValidForm from "../util/validator.ts";
import CustomInput from "./CustomInput.tsx";
import CustomTextArea from "./CustomTextArea.tsx";

const EmailMe = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  async function handleSendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = nameRef.current!.value || "anonymous";
    const email = emailRef.current!.value;
    const subject = subjectRef.current!.value;
    const content = contentRef.current!.value;

    if (!isValidForm(email, subject, content)) {
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/personal-site`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          content,
        }),
      });
      const result = await response.json();
      console.log(result);
      toast.success(result.message);
    } catch (e) {
      console.error(e);
      toast.error("Failed to send email");
    } finally {
      nameRef.current!.value = "";
      emailRef.current!.value = "";
      subjectRef.current!.value = "";
      contentRef.current!.value = "";
    }
  }

  return (
    <form
      id="email-form"
      onSubmit={handleSendEmail}
      className="col-span-2 flex flex-col items-center gap-4 text-sm sm:text-lg"
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
        <CustomInput ref={emailRef} placeholder="YOUR EMAIL" type="email" isRequired={true} />
        <CustomInput ref={nameRef} placeholder="NAME (OPTIONAL)" type="text" isRequired={false} />
      </div>
      <CustomInput ref={subjectRef} placeholder="SUBJUCT" type="text" isRequired={true} />
      <CustomTextArea ref={contentRef} placeholder="WHAT ON YOUR MIND" isRequired={true} />
      <button className="border-primary text-primary hover:bg-primary/15 mt-2 w-fit rounded border-2 px-6 py-2 hover:cursor-pointer lg:self-end">
        <span className="font-SfMono">Send</span>
      </button>
    </form>
  );
};

export default EmailMe;
