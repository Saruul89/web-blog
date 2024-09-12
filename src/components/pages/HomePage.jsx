import { Hero } from "@/components/hero/Hero";
import { Trending } from "@/components/Trending/Trending";
import { AllBlogPost } from "../Allblog/HomePageAllBlogPost";
import { About } from "../layout/About/About";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <AllBlogPost />
    </div>
  );
};
export default HomePage;
