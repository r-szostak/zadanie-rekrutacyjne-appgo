import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Standings from "./components/Standings"

function App() {
  return (
    <main className="flex flex-col items-center h-screen overflow-auto bg-[#FAFAFA]">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </main>
  )
}

export default App
