import { useEffect, useState } from "react";
import { BackArrow } from "../helpcomponents/BackArrow";
import { TechnologyPurpleButton } from "../helpcomponents/badge/BadgeBgPurple";
import { Date } from "../helpcomponents/Date";
import { ForwardArrow } from "../helpcomponents/ForwardArrow";
import Link from "next/link";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [article, setArticle] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles/latest?per_page=10&top=3`
      );
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === article.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  };

  const handlePrevPage = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return article.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex justify-center mt-[100px]" id="hero">
      <div className="container max-w-[1216px]" id="home">
        <Link href={`/singlepost/${article[currentIndex]?.id}`}>
          <div
            className="h-[600px] bg-cover bg-center rounded-3xl flex items-end"
            style={{
              backgroundImage: `url(${article[currentIndex]?.cover_image})`,
            }}
          >
            <div className="md:w-[598px] md:h-[252px] w-full bg-slate-50 pl-5 ml-3 mb-3 mr-3 rounded-lg pt-5 pb-5 flex flex-col gap-3">
              <TechnologyPurpleButton
                text={article[currentIndex]?.tag_list[0]}
              />
              <h1 className="text-[#181A2A] font-semibold text-[36px] leading-10 line-clamp-3">
                {article[currentIndex]?.description}
              </h1>
              <Date />
            </div>
          </div>
        </Link>

        <div className="flex gap-4 text-[#696A75] justify-end items-end mt-3 duration-150">
          <button className="duration-200" onClick={handlePrevPage}>
            <BackArrow />
          </button>
          <button className="duration-200" onClick={handleNextPage}>
            <ForwardArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
