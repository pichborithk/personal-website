import { useEffect } from "react";

import ContactMe from "./components/ContactMe.tsx";
import Hero from "./components/Hero";
import MyJourney from "./components/MyJourney.tsx";
import Notification from "./components/Notification.tsx";
import Projects from "./components/Projects.tsx";
import TechStacks from "./components/TechStacks.tsx";

const App = () => {
  async function pingApi() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/ping`);
      const result = await response.json();
      console.log(result.message);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    pingApi();
  }, []);

  return (
    <>
      <div className="font-poppins mx-auto mb-8 flex min-h-screen max-w-7xl flex-col items-center gap-4 text-white">
        <Notification />
        <Hero />
        <MyJourney />
        <TechStacks />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
};

export default App;
