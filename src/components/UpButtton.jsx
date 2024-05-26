const UpButtton = () => {
  const toUp = () => {
    window.scroll({
      top: 0,
    });
  };

  return (
    <button
      className="fixed left-5 bottom-5 text-2xl p-1 bg-[#dc88d580] rounded-md px-2 sm:left-[200px]"
      onClick={toUp}
    >
      ⬆️
    </button>
  );
};

export default UpButtton;
