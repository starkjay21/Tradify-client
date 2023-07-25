import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {AddItems} from "./pages/AddItem";
import {Register} from "./pages/Register";
import {SavedItems} from "./pages/SavedItems";
import {Login} from "./pages/Login";
import {UserItems} from "./pages/UserItems";
import {Playground} from "./pages/Playground";
import {Hero} from "./pages/Hero";
function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={ <Hero /> } />
              <Route path="/home" element={ <Home /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/add-item" element={ <AddItems /> } />
              <Route path="/saved-items" element={ <SavedItems /> } />
              <Route path="/user-items" element={ <UserItems /> } />
              <Route path="/playground" element={ <Playground /> } />
          </Routes>
      </Router>
    </>
  );
}

export default App;
