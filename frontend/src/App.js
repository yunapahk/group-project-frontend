import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import ParticleBackground
 from "./components/particleBackground"

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <Outlet />
    </div>
  )
}

export default App
