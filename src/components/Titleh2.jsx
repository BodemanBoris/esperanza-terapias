const Titleh2 = ({ title, size, color }) => {
  return (
    <h2
      className={`font-serif m-6 font-bold text-center text-${size}xl text-[#${color}]`}
    >
      {title}
    </h2>
  );
};

export default Titleh2;
