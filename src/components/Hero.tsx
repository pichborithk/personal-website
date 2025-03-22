import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/logo.png";
import ContactButton from "./ContactButton.tsx";

const Hero = () => {
  return (
    <div className="flex min-h-screen w-full flex-col px-8 py-8 md:px-16 xl:px-32">
      <div className="flex items-center justify-center">
        <div className="w-1/8 border-t border-gray-700"></div>
        <div className="flex items-center justify-center gap-6 text-xl sm:text-3xl">
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
        <div className="flex-1"></div>
        <img src={logo} alt="logo" className="h-16 w-16 md:h-32 md:w-32" />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <div className="mb-12 flex flex-col gap-6">
          <h3 className="text-primary font-SfMono">Hi, my name is</h3>
          <h1 className="font-semibold">
            PICH<span className="text-primary">BO</span>RITH KONG
          </h1>
          <h1 className="font-semibold text-gray-400">
            A passionate Engineer from
            <span className="text-primary"> Cambodia</span>.
          </h1>
          <h3 className="text-gray-400 md:w-2/3 lg:w-1/2">
            A <span className="text-primary">Software Engineer</span> with a curious mind and constant problem-solving
            attitude.
          </h3>
          <h3 className="text-gray-400 md:w-1/2">Master's Degree with over 5 years of experience.</h3>
        </div>
        <ContactButton />
      </div>
    </div>
  );
};

export default Hero;
