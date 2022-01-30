import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { NewsContextProvider } from "./Components/NewsPage/NewsContext";
import News from "./Components/NewsPage/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/About" element={<Homepage />} />
          <Route exact path="/News" element={<NewsContextProvider><News /> </NewsContextProvider>} />
          <Route exact path="/Marketplace" element={<Homepage />} />
          <Route exact path="/Blog" element={<Homepage />} />
          <Route exact path="/Login" element={<Homepage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
