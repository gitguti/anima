import './App.css'
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion"

function App() {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.24,
        delayChildren: 0.04 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <div className="hero">
        <motion.div className="hero_text" variants={container} initial="hidden" animate="visible">
          <motion.h1 variants={child} >Spline, Glassmorphism, and Interactivity</motion.h1>
          <p> Join us on this captivating journey as we explore the stunning fusion of transparent elegance and dynamic interaction, offering a unique and unforgettable experience. </p>
          <div className="button_group">
          <button>Enllegate</button>
          <button>Quizas luego</button>
          </div>
        </motion.div>
        <div className="hero_bg">
        <Spline scene="https://prod.spline.design/ZqEzxGgo7sQSWdyl/scene.splinecode" />
        </div>
      </div>
    </>
  )
}

<script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js"></script>

export default App
