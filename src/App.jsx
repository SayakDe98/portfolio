import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact-me" Component={ContactMe} />
        </Routes>
      </Router>
  );
}

export default App;
