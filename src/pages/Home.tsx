import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import Intro from '../components/Intro';
import { HeroSection } from '../components/HeroSection';

const Home = () => {
  usePageTitle('');  // Empty string for home page

  return (
    <div>
      <FadeInSection>
        <section className="space-y-4">
          <motion.div
            className="text-3xl sm:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                `Hello, Anirudha here.`,
              ]}
              wrapper="h1"
              cursor={true}
              repeat={0}
              speed={50}
              style={{ display: 'inline-block' }}
              className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400'
            />
          </motion.div>
          <motion.p
            className="text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Your average Software Engineer turning coffee into code.
          </motion.p>
        </section>
      </FadeInSection>

      <FadeInSection delay={1.2} >
        <motion.section className="space-y-1">
          <div className="py-4">
            <Intro />
          </div>
        </motion.section>
      </FadeInSection>

      <FadeInSection delay={1.4}>
        <motion.section className="mt-4">
          <div>
            <HeroSection />
          </div>
        </motion.section>
      </FadeInSection>
    </div>
  );
};

export default Home; 