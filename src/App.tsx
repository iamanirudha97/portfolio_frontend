import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Project from './pages/Project';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './utils/ScrollToTop';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1] as [number, number, number, number], // tuple type
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1] as [number, number, number, number],
    },
  },
};

function App() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);
  
  useEffect(() => {
    setShowFooter(false)

    const timer = setTimeout(() => {
      setShowFooter(true)
    }, 1000);

    return () => clearTimeout(timer)
  }, [location.pathname]);

  return (
      <ThemeProvider>
      <Layout>
      <div className='flex flex-col min-h-screen'>
        <Navbar />

        <main className='flex-grow'>
          <div className='container-width mx-auto section'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                onAnimationComplete={() => setShowFooter(true)}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/project" element={<Project />}></Route>
                  <Route path="/contact" element={<Contact />}></Route>
                </Routes> 
              </motion.div>
            </AnimatePresence>
          </div>            
        </main>

        <AnimatePresence>
          {showFooter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Footer />  
            </motion.div>
          )}
        </AnimatePresence>
        <ScrollToTop />
      </div>
      </Layout>
      </ThemeProvider>
  )
}

export default App