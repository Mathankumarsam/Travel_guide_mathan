import "./App.css";
import Place from "./components/screens/Place";
import Places from "./components/screens/Places";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Places />} />
        <Route path="/place/:id" element={<Place />} />
      </Routes>
    </Router>
  );
}

export default App;
