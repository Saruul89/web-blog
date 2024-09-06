import { useEffect, useState } from "react";
import { All } from "../helpcomponents/buttons/All";
import { Branding } from "../helpcomponents/buttons/Branding";
import { Design } from "../helpcomponents/buttons/Design";
import { LoadMore } from "../helpcomponents/buttons/LoadMore";
import { Technology } from "../helpcomponents/buttons/Technology";
import { Travel } from "../helpcomponents/buttons/Travel";
import { ViewAll } from "../helpcomponents/buttons/ViewAll";
import { PostCard } from "./card/PostCard";

export const AllBlogPost = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [filterAllBlogPost, setFilterAllBlogPost] = useState("");
  const [filterContentNumber, setFilterContentNumber] = useState(9); //datag 9 bolgoh
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(
      `https://dev.to/api/articles?per_page=${filterContentNumber}&tag=${filterAllBlogPost}`
    )
      .then((response) => response?.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [filterContentNumber, filterAllBlogPost, isSelected]);

  const handleFilter = (filterAllBlog) => {
    setFilterAllBlogPost(filterAllBlog);
  };

  const handleclickLoadMore = () => {
    setFilterContentNumber(filterContentNumber + 3);
  };

  const isSelectColor = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="w-full flex justify-center mt-[100px]">
      <div className="container max-w-[1216px]" id="blog">
        <h3
          className="text-[#181A2A] text-[24px] leading-7 font-bold mb-4"
          id="allblog"
        >
          All Blog Post
        </h3>
        <div className="flex mt-10 md:justify-between flex-wrap">
          <div className="flex md:gap-5 gap-2">
            <All handleFilter={handleFilter} isSelectColor={isSelectColor} />
            <Design handleFilter={handleFilter} isSelectColor={isSelectColor} />
            <Travel handleFilter={handleFilter} isSelectColor={isSelectColor} />
            <Technology
              handleFilter={handleFilter}
              isSelectColor={isSelectColor}
            />
            <Branding
              handleFilter={handleFilter}
              isSelectColor={isSelectColor}
            />
          </div>
          <div className="ml-4">
            <a href="./bloglisting">
              <ViewAll />
            </a>
          </div>
        </div>
        <div>
          <PostCard articles={articles} />
        </div>
        <button
          onClick={handleclickLoadMore}
          className="flex justify-center m-auto"
        >
          <LoadMore />
        </button>
      </div>
    </div>
  );
};
