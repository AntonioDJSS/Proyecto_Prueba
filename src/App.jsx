/* import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; */
import "./App.scss";
import Admin from "./pages/Admin";
import SignIn from "./pages/Admin/SignIn";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <h1>Estamos en App</h1>
      <Admin />
      <SignIn />
      <Home />
      <Contact />
    </div>
    /* 
    <Router>
      <div className="app">
        <h1>Sistema de rutas basico</h1>

        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
     */
  );
}
/* 
function Home() {
  return <h2>Estamos en el componente Home</h2>;
}

function Contact() {
  return <h2>Componente Contact...</h2>;
}

function Users() {
  return <h2>Estamos en Users</h2>;
}

function Error404() {
  return <h2>Error 404...</h2>;
}
 */
export default App;
