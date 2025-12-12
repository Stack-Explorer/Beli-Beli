import './App.css'
import BestSellingStore from './components/BestSellingStore'
import FlashSale from './components/FlashSale'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TodaysForYou from './components/TodaysForYou'

function App() {

  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <HeroSection />
        <FlashSale />
        <TodaysForYou />

        <BestSellingStore />

        <Footer />
      </div>

    </>
  )
}

export default App
