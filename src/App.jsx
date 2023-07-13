import './App.css'
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion"
import {FaTwitter}  from "react-icons/fa";

function App() {
  const word = "Motion, Interaction, Magic";
  const splited = word.split(" ");
  console.log(splited);

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
        {splited.map((split, index) => (
                   <motion.h1 className='blend' key={index} variants={child} >
                     {split}
                   </motion.h1>
                 ))}
          <p className="hero_text_dark"> Embark on a creative journey as I explore animation tools like Framer Motion, GSAP, anima.js, Lottie, three.js, and Spline. I'll share experiments. </p>
          <div className="button_group">
         <button className="button_filled">
  <a href="https://designbygit.eth.limo" target="_blank" rel="noreferrer" >Discover My Portfolio</a>
</button>
<button className="button_outlined" target="_blank" rel="noreferrer" >
  <a href="https://twitter.com/whynotgit">
<FaTwitter className="button_icon" />
    <span>Follow Me</span>
    </a>
</button>
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
