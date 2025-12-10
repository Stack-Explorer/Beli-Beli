import { Icon } from '@iconify/react'
import './App.css'
import Card from './components/Card'
import FlashSale from './components/FlashSale'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      
      <FlashSale />
      <Card />
    </>
  )
}

export default App
