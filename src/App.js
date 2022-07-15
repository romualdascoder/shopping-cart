import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
