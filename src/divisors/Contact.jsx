import Titleh2 from "../components/Titleh2";

const About = () => {
  return (
    <section id="contacto" className={`w-full min-h-[600px]`}>
      <Titleh2 title={"Contacto"} size={2} color={"d8c807"} />
      <p className="w-[95%] mx-auto my-4">
        Envianos un email con tu comentario y nos pondremos en contacto
      </p>

      {/* ------- FORM ------ */}

      <form className="w-[95%] my-4 mx-auto flex flex-col items-center gap-4">
        <label className="w-full font-bold" htmlFor="nombre">
          Nombre Completo
        </label>
        <input
          className="border-b-2 border-l-2 px-2 py-1 w-full focus:border-2 focus:border-[#dc88d5] outline-none rounded-md"
          type="text"
          placeholder="Esperaza Gutierrez"
          name="nombre"
          id="nombre"
          required
        />
        <label className="w-full font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="border-b-2  border-l-2 px-2 py-1 w-full focus:border-2 focus:border-[#dc88d5] outline-none  rounded-md"
          type="email"
          name="email"
          placeholder="esperanza_gutierrez@terapias.com"
          id="email"
          required
        />
        <label className="w-full font-bold" htmlFor="contact-text">
          Comentario
        </label>
        <textarea
          className="w-full border-b-2 border-l-2 px-2 py-1 resize-none focus:border-2 focus:border-[#dc88d5] outline-none  rounded-md"
          placeholder="Ingresa tu cumentario"
          name="contact-text"
          id="contact-text"
          cols="30"
          rows="5"
          required
        ></textarea>
        <input
          type="submit"
          className="my-2 border-2 p-1 px-2 rounded-md border-[#dc88d5] bg-[#dc88d5] hover:bg-[#d2b0e7]"
          value="Enviar"
        />
      </form>
    </section>
  );
};

export default About;
