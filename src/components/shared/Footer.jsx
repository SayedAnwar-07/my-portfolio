import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="p-6 shadow-lg">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-lg text-gray-900 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Sayed Anwar. All rights reserved.
        </p>
        {/* Social Icons */}
        <div className="flex justify-center gap-8">
          <div className="tooltip tooltip-top" data-tip="Linkedin">
            <a
              href="https://www.linkedin.com/in/sayedanwartamim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#a2d81b] transition-all transform hover:scale-110"
            >
              <FaLinkedinIn className="text-2xl mr-2" />
            </a>
          </div>

          <div className="tooltip tooltip-top" data-tip="Gmail">
            <a
              href="mailto:sayedanwarofficial@gmail.com"
              target="_blank"
              className="text-gray-600 hover:text-[#a2d81b] transition-all transform hover:scale-110"
            >
              <AiOutlineMail className="text-2xl mr-2" />
            </a>
          </div>

          <div className="tooltip tooltip-top" data-tip="Github">
            <a
              href="https://github.com/SayedAnwar-07"
              target="_blank"
              className="text-gray-600 hover:text-[#a2d81b] transition-all transform hover:scale-110"
            >
              <FaGithub className="text-2xl mr-2" />
            </a>
          </div>

          <div className="tooltip tooltip-top" data-tip="Whatsapp">
            <a
              href="https://wa.me/8801903636076"
              target="_blank"
              className="text-gray-600 hover:text-[#a2d81b] transition-all transform hover:scale-110"
            >
              <FaWhatsapp className="text-2xl mr-2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
