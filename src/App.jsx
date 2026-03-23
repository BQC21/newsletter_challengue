import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home"
import Success from "./pages/success"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
