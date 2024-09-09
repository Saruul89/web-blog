import { useTagContext } from "@/components/Allblog/HomePageAllBlogPost";

export const Technology = ({ handleFilter }) => {
  return <button onClick={() => handleFilter("technology")}>Technology</button>;
};
