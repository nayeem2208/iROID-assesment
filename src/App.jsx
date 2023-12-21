import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SecondHeader from './components/SecondHeader'
import FirstBody from './components/FirstBody'
import Solutions from './components/Solutions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <SecondHeader/>
     <FirstBody/>
     <Solutions/>
    </>
  )
}

export default App
