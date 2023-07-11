import './App.css'
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion"

function App() {
  return (
    <>
      <div className="hero">
        <div className="hero_left">
          <h1>Spline, Glassmorphism, and Interactivity</h1>
          <p> Join us on this captivating journey as we explore the stunning fusion of transparent elegance and dynamic interaction, offering a unique and unforgettable experience. </p>
          <div className="button_group">
          <button>Enllegate</button>
          <button>Quizas luego</button>
          </div>
        </div>
        <div className="hero_right">
        <Spline scene="https://prod.spline.design/ZqEzxGgo7sQSWdyl/scene.splinecode" />
        </div>
      </div>
    </>
  )
}

<script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js"></script>

export default App
