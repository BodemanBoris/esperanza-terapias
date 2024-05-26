import TerapiasCard from "../components/TerapiasCard";
import Titleh2 from "../components/Titleh2";
import { terapias_description } from "../terapias.desciptions";
const Terapias = () => {
  return (
    <section id="terapias" className="w-full min-h-[600px]">
      <Titleh2 title={"Terapias"} size={2} color={"d8c807"} />
      <div className="over__terapias w-full flex">
        <div>
          <TerapiasCard
            title={terapias_description[0].title}
            description={terapias_description[0].description}
            img={terapias_description[0].img}
          />
        </div>
        <div>
          <TerapiasCard
            title={terapias_description[1].title}
            description={terapias_description[1].description}
            img={terapias_description[1].img}
          />
        </div>
        <div>
          <TerapiasCard
            title={terapias_description[2].title}
            description={terapias_description[2].description}
            img={terapias_description[2].img}
          />
        </div>
        <div>
          <TerapiasCard
            title={terapias_description[3].title}
            description={terapias_description[3].description}
            img={terapias_description[3].img}
          />
        </div>
      </div>
    </section>
  );
};

export default Terapias;
