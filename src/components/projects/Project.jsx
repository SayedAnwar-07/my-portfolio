import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  timeline,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
  githubLink,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row sm:items-center justify-between py-10 gap-6 border-b border-neutral-700"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        {/* Left: Title & Tags */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
          <p className="text-sm font-medium">{timeline}</p>
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-700">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 bg-green rounded-full whitespace-nowrap"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm w-full sm:w-auto">
          <button
            onClick={() => setIsHidden(true)}
            className="amazing-button w-full sm:w-auto"
          >
            Read More
          </button>

          <button
            onClick={() =>
              window.open(githubLink, "_blank", "noopener,noreferrer")
            }
            className="amazing-button w-full sm:w-auto"
          >
            GitHub
          </button>
        </div>
      </motion.div>

      {/* Details Modal */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          img
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
