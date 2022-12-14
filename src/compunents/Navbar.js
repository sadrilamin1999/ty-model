import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStager } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const logoRef = useRef(null);

  const liArry = [li1, li2, li3];
  const logoArr = [logoRef];

  useGsapDownStager(liArry, 0.8);
  useGsapDownStager(logoArr, 0.6);
  return (
    <nav className="navbar wrapper">
      <div className="logo" ref={logoRef}>
        <Link to="./">
          <h2>TY Model</h2>
        </Link>
      </div>
      <ul className="links">
        <li ref={li1}>
          <Link to="/about">About</Link>
        </li>
        <li ref={li2}>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li ref={li3}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
