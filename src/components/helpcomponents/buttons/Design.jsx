export const Design = ({ handleFilter, isSelectColor }) => {
  return (
    <button
      onClick={() => handleFilter("design")}
      className={`font-[12px] leading-[25px] ${
        isSelectColor ? "text-orange-400" : "text-[#495057]"
      }`}
    >
      Design
    </button>
  );
};
