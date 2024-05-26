import Titleh2 from "../components/Titleh2";

const About = () => {
  return (
    <section className={`w-[380px] mx-auto sm:w-full min-h-[600px]`}>
      <Titleh2 title={"Esperanza Gutierrez Gomila"} size={2} color={"d8c807"} />
      <div className="pic__container bg-[#dc88d5] p-3 sm:flex">
        <div className="w-[95%] mx-auto clip sm:clip sm:w-[200%]">
          <img
            className="rounded-xl"
            src="https://www.nycreikicenter.com/wp-content/uploads/2022/02/Brian-Brunius-Treating-Reiki-Client-Front.jpg"
            alt=""
          />
        </div>
        <div className="sm:mx-6">
          <Titleh2 title={"Maestra reiki"} size={2} />
          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsa
            ea mollitia error doloremque in! Nobis architecto maxime, qui
            sapiente eligendi optio doloremque consequuntur placeat pariatur
            nemo dicta harum possimus!
          </p>

          <Titleh2
            title={"Federacion Española de Reiki"}
            size={2}
            color={"dc88d5"}
          />
          <p className="text-center">
            Maestro Nº <b>8888</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
