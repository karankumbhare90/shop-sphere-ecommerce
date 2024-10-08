import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"

const App = () => {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App