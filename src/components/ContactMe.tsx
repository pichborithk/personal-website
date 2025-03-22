import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EmailMe from "./EmailMe.tsx";
import HeroImage from "./HeroImage.tsx";
import SectionTitle from "./SectionTitle.tsx";

const ContactMe = () => {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center pt-8">
      <SectionTitle title={"contact me"} shadow={"Contact"} right={true} />
      <div className="grid grid-cols-1 gap-y-12 px-12 sm:gap-12 sm:px-32 lg:grid-cols-3 lg:px-16">
        <div className="flex flex-col items-center gap-8 text-justify lg:items-start lg:text-left">
          <HeroImage />
          <h5>
            I'm always open to explore new opportunities, networking and collaborate on innovative projects. Please
            don't hesitate to contact me via email or connect with me.
          </h5>
          <div className="flex w-full items-center text-2xl">
            <div className="w-1/6 border-t border-gray-700"></div>
            <div className="flex items-center justify-center gap-4">
              <a href="https://github.com/pichborithk" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="lg" className="hover:text-primary cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/pichborith" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="hover:text-primary cursor-pointer" />
              </a>
              <a href="https://x.com/pichborith_kong" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="lg" className="hover:text-primary cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <EmailMe />
      </div>
      <div className="font-SfMono mt-32 flex flex-1 flex-col justify-end">
        <p>
          Copyright <span className="font-poppins">©</span>2025{" "}
          <span className="text-primary uppercase">Pichborith Kong</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
