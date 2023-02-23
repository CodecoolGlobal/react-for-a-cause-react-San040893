//import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { News } from "./components/News";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <News />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
