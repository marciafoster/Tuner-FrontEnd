import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from "./Components/NavBar"
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:index" element={<Show />} />
            <Route path="/songs/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
  
  
   
  </div>
  );
}

export default App;
