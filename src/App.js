import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<SignIn />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
