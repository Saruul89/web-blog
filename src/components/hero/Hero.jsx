import { useEffect, useState } from "react";
import { BackArrow } from "../helpcomponents/BackArrow";
import { TechnologyPurpleButton } from "../helpcomponents/badge/BadgeBgPurple";
import { Date } from "../helpcomponents/Date";
import { ForwardArrow } from "../helpcomponents/ForwardArrow";
import Link from "next/link";

export const Hero = () => {
  const [pages, setPages] = useState(1);
  const [trendingContentNumber, setTrendingContentNumber] = useState(1); //datag 9 bolgoh
  const [article, setArticle] = useState([]);
  const fetchData = () => {
    fetch(
      `https://dev.to/api/articles?per_page=${trendingContentNumber}&per_page=${pages}`
    )
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  const handlePage = () => {
    setPages(pages + 1);
  };

  useEffect(() => {
    fetchData();
  }, [trendingContentNumber]);

  return (
    <div className="w-full flex justify-center mt-[100px]" id="hero">
      <div className="container max-w-[1216px]" id="home">
        {article.map((article) => {
          return (
            <Link href={`/singlepost/${article.id}`}>
              <div
                className="h-[600px] bg-cover bg-center rounded-3xl flex items-end"
                style={{
                  backgroundImage: `url(${article.cover_image})`,
                }}
              >
                <div className="md:w-[598px] md:h-[252px] w-full bg-slate-50 pl-5 ml-3 mb-3 mr-3 rounded-lg pt-5 pb-5 flex flex-col gap-3">
                  <TechnologyPurpleButton text={article.tag_list[0]} />
                  <h1 className="text-[#181A2A] font-semibold text-[36px] leading-10 line-clamp-3">
                    {article.description}
                  </h1>
                  <Date />
                </div>
              </div>
            </Link>
          );
        })}

        <div className="flex gap-4 text-[#696A75] justify-end items-end mt-3">
          <button onClick={handlePage}>
            <BackArrow />
          </button>
          <button onClick={handlePage}>
            <ForwardArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
