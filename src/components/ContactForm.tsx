import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const specialNames = ["sharvil", "soham", "mohit", "daryl", "shivam", "ashay"];

  // Dynamically decide which image to load after submission
  useEffect(() => {
    if (submitted) {
      const name = formData.name.trim().toLowerCase();
      const shouldShowNikal = specialNames.includes(name);

      const imgPath = shouldShowNikal
        ? "../assets/nikal.jpeg"
        : "../assets/thankyou.jpeg";

      import(/* @vite-ignore */ imgPath)
        .then((img) => setImageSrc(img.default))
        .catch(() => setImageError(true));
    }
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(false);
    setImageLoaded(false);
    setImageError(false);
    setImageSrc(null);
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 rounded-2xl 
             border border-gray-200 dark:border-gray-800 
             bg-[#F8F8F8]/90 dark:bg-black/40 
             backdrop-blur-md 
             shadow-[0_4px_16px_rgba(0,0,0,0.02)] 
             dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] 
             transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        Send me a message
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Whether it’s a question, collaboration, or idea — feel free to reach out!
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name + Email */}
          <motion.div
            custom={0}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 
                           bg-gray-50 dark:bg-black/30 
                           border border-gray-300 dark:border-gray-700 
                           text-gray-900 dark:text-gray-200 
                           rounded-lg 
                           focus:outline-none focus:ring-2 
                           focus:ring-gray-400 dark:focus:ring-gray-500 
                           transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 
                           bg-gray-50 dark:bg-black/30 
                           border border-gray-300 dark:border-gray-700 
                           text-gray-900 dark:text-gray-200 
                           rounded-lg 
                           focus:outline-none focus:ring-2 
                           focus:ring-gray-400 dark:focus:ring-gray-500 
                           transition"
              />
            </div>
          </motion.div>

          {/* Subject */}
          <motion.div custom={1} variants={inputVariants} initial="hidden" animate="visible">
            <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 
                         bg-gray-50 dark:bg-black/30 
                         border border-gray-300 dark:border-gray-700 
                         text-gray-900 dark:text-gray-200 
                         rounded-lg 
                         focus:outline-none focus:ring-2 
                         focus:ring-gray-400 dark:focus:ring-gray-500 
                         transition"
            />
          </motion.div>

          {/* Message */}
          <motion.div custom={2} variants={inputVariants} initial="hidden" animate="visible">
            <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 
                         bg-gray-50 dark:bg-black/30 
                         border border-gray-300 dark:border-gray-700 
                         text-gray-900 dark:text-gray-200 
                         rounded-lg 
                         focus:outline-none focus:ring-2 
                         focus:ring-gray-400 dark:focus:ring-gray-500 
                         transition"
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            className="w-full py-2 rounded-lg 
                       bg-gray-900 dark:bg-white 
                       text-white dark:text-black 
                       font-medium 
                       hover:bg-gray-800 dark:hover:bg-gray-200 
                       transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center py-10 
                     text-gray-700 dark:text-gray-300 
                     flex flex-col items-center justify-center"
        >
          {!imageError && imageSrc ? (
            <>
              {!imageLoaded && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-500 dark:text-gray-400 mb-6"
                >
                  Loading your thank you...
                </motion.p>
              )}
              <motion.img
                src={imageSrc}
                alt="Thank you"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`max-w-full rounded-xl shadow-md ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                } transition-all duration-700`}
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
              />
              <p className="font-medium mt-2">
                Your message has been received. I’ll get back to you soon.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-lg font-medium mb-2">Thank you!</h3>
              <p className="font-medium">
                Your message has been received. I’ll get back to you soon.
              </p>
            </>
          )}

          <motion.button
            onClick={handleReset}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="mt-6 px-4 py-2 border 
                       border-gray-300 dark:border-gray-700 
                       rounded-lg 
                       text-gray-800 dark:text-gray-200 
                       hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition-colors duration-300"
          >
            Send a new message
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
