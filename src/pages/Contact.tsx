import { motion, AnimatePresence } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import { useEffect, useState } from "react";
import ContactForm from '../components/ContactForm';


const Contact = () => {
  usePageTitle('Contact');

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -2,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const iconHoverVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         duration: 0.4,
//         ease: [0.4, 0, 0.2, 1]
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       y: -20,
//       transition: {
//         duration: 0.3,
//         ease: [0.4, 0, 1, 1]
//       }
//     }
//   };


  return (
    <div>
      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">
          Contact
        </motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          Let's connect.
        </motion.p>
      </FadeInSection>

            <FadeInSection delay={0.2}>
                        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Connect with me through any of these platforms.
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <motion.a
              href="https://www.linkedin.com/in/anirudha97/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all group"
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="flex-shrink-0"
                variants={iconHoverVariants}
              >
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">in/anirudha97</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:sagarlm97@gmail.com"
              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all group"
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="flex-shrink-0"
                variants={iconHoverVariants}
              >
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">sagarlm97@gmail.com</p>
              </div>
            </motion.a>
          </div>

        </div>
        
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <div className="mt-8 space-y-6">
          <ContactForm />
        </div>
      </FadeInSection>


    </div>
  );
};

export default Contact;