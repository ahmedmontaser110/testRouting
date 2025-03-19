import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Projects from "./components/projects.jsx";
import Home from "./components/home.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/testRouting/#/" element={<Home />} />
              <Route path="/testRouting/#/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  )
}

export default App
