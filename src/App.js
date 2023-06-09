import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/Companies/Companies";
import Biography from "./components/Biography/Biography";
import Contact from "./components/Contact/Contact"
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <div>
      <div className="white-gradient" />
      <Header />
      <Hero />
      </div>
      <Companies />
      <Biography /> 
      <Contact />
      <GetStarted />
      <Footer /> 
    </div>
  );
}

export default App;
