import "./app.css";
import Nav from "./components/Nav";
import About from "./divisors/About";
import Terapias from "./divisors/Terapias";
import Eventos from "./divisors/Eventos";
import Contact from "./divisors/Contact";
import Footer from "./divisors/Footer";
import Cursos from "./divisors/Cursos";
import UpButtton from "./components/UpButtton";

const App = () => {
  return (
    <div className="relative">
      <Nav></Nav>
      <UpButtton />
      <main>
        <About />
        <Terapias />
        <Cursos />
        <Eventos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
