import './App.css'
import Header from './components/Header'
import SecondHeader from './components/SecondHeader'
import FirstBody from './components/FirstBody'
import Solutions from './components/Solutions'
import Customer from './components/Customer'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
     <Header/>
     <SecondHeader/>
     <FirstBody/>
     <Solutions/>
     <Customer/>
     <Subscribe/>
     <Footer/>
    </>
  )
}

export default App
