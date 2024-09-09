import { useTagContext } from "@/components/Allblog/HomePageAllBlogPost";

export const Branding = ({ handleFilter }) => {


  return (
    <button
      onClick={() => handleFilter("branding")}
    >
      Branding
    </button>
  );
};
