import { About } from "../About/About";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { LoadMore } from "../helpcomponents/buttons/LoadMore";
import { PostCard } from "./card/PostCard";


export const AllBlogOnePage = () => {
  return (
    <div className="w-full">
      <div className="container flex justify-center m-auto max-w-[1216px]">
        <div>
          <Header />
          <h3 className="text-[#181A2A] text-[24px] leading-7 font-bold mb-4 mt-[150px]">
            All Blog Post
          </h3>
          <PostCard />
          <div className="flex justify-center">
            <LoadMore />
          </div>
        </div>
      </div>
      <div>
        <About />
        <Footer />
      </div>
    </div>
  );
};
