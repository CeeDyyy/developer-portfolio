import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
// import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
// import CareerObj from "./components/CareerObj";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      {/* <a name="Home"><Home /></a> */}
      <a name="Home"><AboutMe /></a>
      {/* <CareerObj /> */}
      <a name="Portfolio"><Work /></a>
      <a name="Contact"><Contact /></a>
    </>

  );
}

export default App;
