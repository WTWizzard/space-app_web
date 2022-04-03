import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Apod from "./pages/Apod";
import Archive from "./pages/Archive";
import ArchiveItem from './pages/ArchiveItem'
import "./styles/reset.css";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <Navbar />
        </header>
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/apod" element={<Apod />} />
            <Route exact path="/archive" element={<Archive />} />
            <Route path="/archive/:date" element={<ArchiveItem />}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
