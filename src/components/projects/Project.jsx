import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
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
        className="flex flex-wrap items-center justify-between py-10 gap-6 border-b border-neutral-700"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        {/* Left: Title & Tags */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 bg-green rounded-full text-xs"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-4 text-sm">
          <button onClick={() => setIsHidden(true)} className="amazing-button">
            Read More
          </button>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="amazing-button"
          >
            GitHub
          </a>
        </div>
      </motion.div>

      {/* Details Modal */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
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
