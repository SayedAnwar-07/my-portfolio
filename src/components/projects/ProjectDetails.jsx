import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  closeModal,
}) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/50"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Container */}
        <motion.div
          className="relative max-w-2xl w-full mx-4 my-10 border shadow-sm rounded-2xl grid-black-color border-white/10 bg-[#121212] max-h-screen overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            duration: 0.3,
          }}
        >
          {/* Close Button */}
          <motion.button
            onClick={closeModal}
            className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="assets/close.webp" alt="Close" className="w-6 h-6" />
          </motion.button>

          {/* Image */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover rounded-t-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
              onClick={() => window.open(href, "_blank")}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h5
              className="mb-2 text-xl sm:text-2xl font-bold text-white"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h5>

            <motion.p
              className="mb-3 text-sm sm:text-base font-normal text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>

            {subDescription.map((subDesc, index) => (
              <motion.p
                key={index}
                className="mb-3 text-sm sm:text-base font-normal text-neutral-400 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {subDesc}
              </motion.p>
            ))}

            {/* Tags */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {tags.map((tag, index) => (
                <motion.img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover:scale-110 transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;
