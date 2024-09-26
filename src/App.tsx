import NavBar from './components/navigation/NavBar'
import Hero from './components/pages/Hero'
import NewArrived from './components/pages/NewArrived'
import TopSelling from './components/pages/TopSelling'
import Categories from './components/pages/Categories'
import Footer from './components/pages/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <TopSelling />
      <NewArrived />
      <Categories />
      <Footer />
    </>
  )
}

export default App
