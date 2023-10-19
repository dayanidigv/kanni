import Home from "./views/Home"
import Info from "./views/Info";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/css/main.css"
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
