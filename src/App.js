import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <a name="Home"><Home /></a>
      <a name="Portfolio"><Works /></a>
      <a name="Contact"><Contact /></a>
    </>

  );
}

export default App;
