import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { NewsContextProvider } from "./Components/NewsPage/NewsContext";
import News from "./Components/NewsPage/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Marketplace from "./Components/Marketplace/Marketplace";
import Market from "./Components/Marketplace/Market";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/About" element={<Homepage />} />
          <Route exact path="/News" element={<NewsContextProvider><News /> </NewsContextProvider>} />
          <Route exact path="/Marketplace" element={<Marketplace />} />
          <Route exact path="/Market/*" element={<Market />} />
          <Route exact path="/Blog" element={<Homepage />} />
          <Route exact path="/Login" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
