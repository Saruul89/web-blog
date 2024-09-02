import { About } from "../About/About";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { LoadMore } from "../helpcomponents/buttons/LoadMore";
import { PostCard } from "./card/PostCard";

export const AllBlogOnePage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container max-w-[1216px]">
        <div className="py-4">
          <Header />
        </div>
        <h3 className="text-[#181A2A] text-[24px] leading-7 font-bold mb-4 mt-[100px]">
          All Blog Post
        </h3>
        <div>
          <PostCard />
        </div>
        <div className="flex justify-center">
          <LoadMore />
        </div>
        <div className="w-full bg-[#E8E8EA]">
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
};
