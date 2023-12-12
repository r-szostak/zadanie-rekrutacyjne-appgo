import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main className="flex flex-col items-center h-screen bg-[#FAFAFA]">
      <Navbar />
      <Routes>
        <Route index element="" />
        <Route path="/standings" element="" />
      </Routes>
    </main>
  )
}

export default App
