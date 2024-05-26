/* eslint-disable react/prop-types */
const TerapiasCard = ({ title, description, img }) => {
  return (
    <article className="p-2 mx-2 w-[350px] h-[460px] overflow-auto border-2 border-[#d8c807cc] rounded-md">
      <div>
        <h3 className="text-center text-2xl font-bold m-2">{title}</h3>
        <div>
          <img
            className="w-[150px] float-left m-2"
            src={img}
            alt={`An image of ${title} therapy`}
          />
          <p>{description}</p>
        </div>
        <button className="my-2 border-2 p-1 px-2 rounded-md border-[#dc88d5] bg-[#dc88d5] hover:bg-[#d2b0e7]">{`Mas info de ${title.toLowerCase()}`}</button>
      </div>
    </article>
  );
};

export default TerapiasCard;
