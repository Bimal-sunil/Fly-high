import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchFlight from "./pages/searchFlight";
import Confirmation from "./pages/confirmation";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/search" element={<SearchFlight />} />
            <Route path="/selectFlight" element={<Confirmation />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
