import hero from "../assets/hero.png";

const HeroImage = () => {
  return (
    <div className="h-56 w-56 rounded-full bg-white p-4">
      <div className="bg-primary h-full w-full rounded-full">
        <img src={hero} alt="hero" className="h-full w-full rounded-full object-contain" />
      </div>
    </div>
  );
};

export default HeroImage;
