import './App.css'
import BestSellingStore from './components/BestSellingStore'
import FlashSale from './components/FlashSale'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TodaysForYou from './components/TodaysForYou'

function App() {

  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <HeroSection />

      </div>
      {/* <FlashSale/> */}
      <TodaysForYou />
      <BestSellingStore />
    </>
  )
}

export default App
