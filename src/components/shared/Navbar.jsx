import { useEffect, useState } from "react";
import { motion } from "motion/react";

function Navigation({ onLinkClick }) {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skill" },
    { label: "Contact", href: "#contacts" },
  ];

  return (
    <ul className="nav-ul py-2">
      {links.map((link) => (
        <li className="nav-li" key={link.href}>
          <a
            className="hover-underline "
            href={link.href}
            onClick={(e) => onLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-black ${
        isScrolled ? "bg-black/10 backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-br hover:from-[#c0e853] hover:to-[#a2d81b] hover:bg-clip-text hover:text-transparent"
          >
            Sayed Anwar
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6 bg-black"
              alt="toggle menu"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onLinkClick={handleSmoothScroll} />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={handleSmoothScroll} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
