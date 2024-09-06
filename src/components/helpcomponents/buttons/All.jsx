export const All = ({ handleFilter, isSelectColor }) => {
  return (
    <button
      onClick={() => handleFilter("")}
      className={`text-[#495057] font-[12px] leading-[25px]`}
    >
      All
    </button>
  );
};
