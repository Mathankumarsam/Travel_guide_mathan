import "./App.css";
import Login from "./components/screens/Login";
import Place from "./components/screens/Place";
import Places from "./components/screens/Places";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./components/screens/SignUp";
import NotFound from "./components/screens/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Places />} />
        <Route path="/place/:id" element={<Place />} />
        <Route path="/auth/login/" element={<Login />} />
        <Route path="/auth/create/" element={<SignUp />} />
        <Route Component={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
