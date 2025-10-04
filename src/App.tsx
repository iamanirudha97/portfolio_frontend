import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

function App() {
  const location = useLocation()
  console.log("location is :",location)
  return (
      <ThemeProvider>
        <Layout>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="Contact" element={<Contact />}></Route>
            </Routes>            
          </div>
        </Layout>
      </ThemeProvider>
  )
}

export default App