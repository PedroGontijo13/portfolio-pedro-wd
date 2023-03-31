import { useState, useEffect } from 'react';
import ThemeContext from "./context/ThemeContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home';
import Snippet from './pages/Snippet/Snippet';
import Portfolio from './pages/Portfolio/Portfolio';
import axios from 'axios';

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername ] = useState("PedroGontijo13");
  const [repositories, setRepositories] = useState([]);

  // Hiroki-Miyasaka

  useEffect(() => {
    fetchUserRepositories();
  }, [])

  const fetchUserRepositories = async () => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    setRepositories(response.data);
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='container'>
        <BrowserRouter>
          <Nav />
          <Routes>
              <Route index element={<Home repositories={repositories} />} />
              <Route path='/snippet' element={<Snippet repositories={repositories} />} />
              <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
