import { useState } from 'react'
import './App.css'
import SideNavbar from './components/SideNavbar/SideNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SideNavbar />
    </div>
  )
}

export default App
