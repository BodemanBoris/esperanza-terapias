import Titleh2 from "../components/Titleh2";
const Footer = () => {
  return (
    <footer className="w-full min-h-[400px] flex flex-col items-center justify-center gap-6">
      <Titleh2 title={"Esperanza Terapias"} size={2} color={"d8c807"} />
      <div className="w-full flex items-center justify-center">
        <a
          href="https://www.facebook.com/esperanza.gutierrezgomila"
          target="_blank"
        >
          <img
            className="w-[80px]"
            src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
            alt="facebook logo"
          />
        </a>
        <a href="https://www.instagram.com/gutierrezgomila/" target="_blank">
          <img
            className="w-[80px]"
            src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg"
            alt="facebook logo"
          />
        </a>
        <a href="https://wa.me/34686472036" target="_blank">
          <img
            className="w-[80px]"
            src="https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png"
            alt="facebook logo"
          />
        </a>
      </div>
      <p className="text-gray-500 text-[12px] mt-4 font-bold">
        Creado por Boris Bodeman
      </p>
    </footer>
  );
};

export default Footer;
