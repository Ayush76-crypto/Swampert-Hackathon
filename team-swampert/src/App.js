import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { NewsContextProvider } from "./Components/NewsPage/NewsContext";
import News from "./Components/NewsPage/News";

function App() {
  return (
    <div className="App">
      <Homepage />
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </div>
  );
}

export default App;
