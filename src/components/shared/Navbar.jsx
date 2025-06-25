import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
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
            className="hover-underline"
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

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: 0 },
    visible: { rotate: 180 },
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-black ${
        isScrolled ? "bg-black/10 backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a href="/">
            <div className="button">
              <div className="box">S</div>
              <div className="box">a</div>
              <div className="box">y</div>
              <div className="box">e</div>
              <div className="box">d</div>
              <div className="box"> </div>
              <div className="box">A</div>
              <div className="box">n</div>
              <div className="box">w</div>
              <div className="box">a</div>
              <div className="box">r</div>
            </div>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-2 cursor-pointer hover:text-white focus:outline-none sm:hidden"
          >
            <motion.div
              animate={isOpen ? "visible" : "hidden"}
              variants={iconVariants}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <IoCloseSharp className="w-6 h-6" />
              ) : (
                <RiMenu3Line className="w-6 h-6" />
              )}
            </motion.div>
          </button>
          <nav className="hidden sm:flex">
            <Navigation onLinkClick={handleSmoothScroll} />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`block overflow-hidden text-center sm:hidden backdrop-blur-md ${
              isScrolled ? "backdrop-blur-none" : ""
            }`}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="pb-5">
              <Navigation onLinkClick={handleSmoothScroll} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
