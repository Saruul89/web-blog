export const Branding = ({ handleFilter }) => {
  return (
    <button
      onClick={() => handleFilter("branding")}
      className="text-[#495057] font-[12px] leading-[25px]"
    >
      Branding
    </button>
  );
};
