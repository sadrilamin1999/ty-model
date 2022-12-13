import { useRef } from "react";
import { useGsapShuterUnveil } from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shuter1 = useRef(null);
  const shuter2 = useRef(null);

  useGsapShuterUnveil(shuter1, 0, heroRef);
  useGsapShuterUnveil(shuter2, 0.2, heroRef);
  return (
    <div>
      <section className="hero wrapper" ref={heroRef}>
        <h1 className="fashion">
          Fashion <span ref={shuter1}></span>
        </h1>
        <h1 className="agency">
          agency <span ref={shuter2}></span>
        </h1>
      </section>
    </div>
  );
};

export default Hero;
