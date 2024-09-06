import { useEffect, useState } from "react";
import { About } from "../About/About";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { LoadMore } from "../helpcomponents/buttons/LoadMore";
import { PostCard } from "./card/PostCard";

const AllBlogOnePage = () => {
  const [filterContentNumber, setFilterContentNumber] = useState(12); //datag 12 bolgoh
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${filterContentNumber}`)
      .then((response) => response?.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [filterContentNumber]);

  const handleclickLoadMore = () => {
    setFilterContentNumber(filterContentNumber + 3);
  };

  return (
    <div className="w-full">
      <div className="container flex justify-center m-auto max-w-[1216px]">
        <div>
          <Header />
          <h3 className="text-[#181A2A] text-[24px] leading-7 font-bold mb-4 mt-[150px]">
            All Blog Post
          </h3>
          <PostCard articles={articles} />
          <div>
            <button
              onClick={handleclickLoadMore}
              className="flex justify-center m-auto"
            >
              <LoadMore />
            </button>
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
export default AllBlogOnePage;
