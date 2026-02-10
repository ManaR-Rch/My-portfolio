import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'

function App() {
  return (
    <div className="min-h-screen text-slate-100 selection:bg-pink-400 selection:text-pink-900 relative">
      <BackgroundAnimation />
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
