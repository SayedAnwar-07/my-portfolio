import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [formState, setFormState] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    emailjs
      .send("service_k200ukr", "template_3d2n19r", formState, {
        publicKey: "GQ_qnFm8MNFyPPokm",
      })
      .then(
        (response) => {
          setIsSubmitting(false);
          setSubmitMessage(
            "Your message has been sent successfully! I'll get back to you soon."
          );
          setFormState({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitMessage(
            "Failed to send the message. Please try again or contact me directly via email."
          );
        }
      );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1.5 bg-green mx-auto mt-4 rounded-full"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
          >
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg p-6 md:p-8 transition-shadow duration-300 border border-gray-300"
          >
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
              Contact Details
            </h4>
            <div className="space-y-5 md:space-y-6">
              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start bg-gray-50 p-4 rounded-lg transition-all duration-200"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-green/10 flex items-center justify-center mr-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </h5>
                  <a
                    href="tel:+8801903636076"
                    className="text-gray-900 hover:text-green transition-colors text-base md:text-lg font-medium"
                  >
                    +880 1903 636076
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start bg-gray-50 p-4 rounded-lg transition-all duration-200"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-green/10 flex items-center justify-center mr-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </h5>
                  <a
                    href="mailto:sayedanwarofficial@gmail.com"
                    className="text-gray-900 hover:text-green transition-colors text-base md:text-lg font-medium break-all"
                  >
                    sayedanwarofficial@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start bg-gray-50 p-4 rounded-lg transition-all duration-200"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-green/10 flex items-center justify-center mr-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    LinkedIn
                  </h5>
                  <a
                    href="https://www.linkedin.com/in/sayedanwartamim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-green transition-colors text-base md:text-lg font-medium break-all"
                  >
                    linkedin.com/in/sayedanwartamim
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg p-6 md:p-8 transition-shadow duration-300 border border-gray-300"
          >
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
              Send Me a Message
            </h4>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formState.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green/50 focus:border-green outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={formState.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green/50 focus:border-green outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green/50 focus:border-green outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="Hi there, I'd like to talk about..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full amazing-button flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Send Message
                  </>
                )}
              </motion.button>
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-sm ${
                    submitMessage.includes("success")
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
