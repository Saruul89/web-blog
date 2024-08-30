import { All } from "../helpcomponents/buttons/All";
import { Branding } from "../helpcomponents/buttons/Branding";
import { Design } from "../helpcomponents/buttons/Design";
import { LoadMore } from "../helpcomponents/buttons/LoadMore";
import { Technology } from "../helpcomponents/buttons/Technology";
import { Travel } from "../helpcomponents/buttons/Travel";
import { ViewAll } from "../helpcomponents/buttons/ViewAll";
import { PostCard } from "./card/PostCard";

export const AllBlogPost = () => {
  return (
    <div className="w-full flex justify-center mt-[100px]">
      <div className="container max-w-[1216px]">
        <h3 className="text-[#181A2A] text-[24px] leading-7 font-bold mb-4">
          All Blog Post
        </h3>
        <div className="flex mt-10 justify-between">
          <div className="flex gap-5 ">
            <All />
            <Design />
            <Travel />
            <Technology />
            <Branding />
          </div>
          <div>
            <ViewAll />
          </div>
        </div>
        <div>
          <PostCard />
        </div>
        <div className="flex justify-center">
          <LoadMore />
        </div>
      </div>
    </div>
  );
};
