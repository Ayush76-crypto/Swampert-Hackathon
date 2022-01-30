import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { NewsContextProvider } from "./Components/NewsPage/NewsContext";
import News from "./Components/NewsPage/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog/Blog";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Marketplace from "./Components/Marketplace/Marketplace";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/About" element={<AboutUs />} />
          <Route exact path="/News" element={<NewsContextProvider><News /> </NewsContextProvider>} />
          <Route exact path="/Marketplace" element={<Marketplace />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/Login" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
