import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
