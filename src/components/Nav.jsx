import Anchor from "./Anchor";
import Titleh2 from "./Titleh2";
import "../app.css";

const Nav = () => {
  return (
    <header id="inicio" className="butterfly w-[380px] mx-auto sm:w-full">
      <div className="flex flex-col items-center sm:flex-row text-[14px] justify-between my-3">
        <Titleh2 title={"Esperanza Terapias"} color="dc88d5" size={2} />
        <nav className="w-full flex justify-around sticky z-50 top-0 ">
          <Anchor link={"Terapias"} />
          <Anchor link={"Cursos"} />
          <Anchor link={"Eventos"} />
          <Anchor link={"Contacto"} />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
