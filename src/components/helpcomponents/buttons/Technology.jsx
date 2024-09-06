export const Technology = ({ handleFilter }) => {
  return (
    <button
      onClick={() => handleFilter("technology")}
      className="text-[#495057] font-[12px] leading-[25px]"
    >
      Technology
    </button>
  );
};
