export const All = ({ handleFilter, isSelectColor }) => {
  return (
    <button
      onClick={() => handleFilter("")}
      className={` font-[12px] leading-[25px]`}
    >
      All
    </button>
  );
};
