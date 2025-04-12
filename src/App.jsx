import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection.jsx'
import Features from './components/Features.jsx'
import Schedule from './components/Schedule.jsx'
import Pricing from './components/Pricing.jsx'


function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar/>
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <Features />
        <Schedule />
        <Pricing />
      </div>
    </main>
  )
}

export default App