const ContactButton = () => {
  function scrollToForm() {
    const formElement = document.getElementById("email-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      onClick={scrollToForm}
      className="border-primary text-primary hover:bg-primary/15 w-fit rounded border-2 px-6 py-2 hover:cursor-pointer sm:text-lg"
    >
      <span className="font-SfMono">Say Hello</span>
    </div>
  );
};

export default ContactButton;
