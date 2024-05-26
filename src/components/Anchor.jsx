/* eslint-disable react/prop-types */
const Anchor = ({ link }) => {
  return (
    <a
      className="text-[#dc88d5] font-bold p-1 py-2 hover:bg-[#d2b0e760] hover:rounded-sm sm:text-[20px]"
      href={`#${link.toLowerCase()}`}
    >
      {link}
    </a>
  );
};

export default Anchor;
