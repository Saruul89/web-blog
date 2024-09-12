import { useEffect, useState } from "react";
import { TechnologyPurpleButton } from "../helpcomponents/badge/BadgeBgPurple";
import Link from "next/link";

export const Trending = ({}) => {
  const [article, setArticle] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles/latest?per_page=4&top=5`
      );
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col mt-[50px]">
      <h3 className="container max-w-[1216px] m-auto text-[#181A2A] text-[24px] leading-7 font-bold mb-6">
        Trending
      </h3>
      <div className="container max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-auto gap-5 m-auto">
        {article.map((article) => {
          return (
            <div className="flex">
              <Link href={`/singlepost/${article?.id}`}>
                <div
                  className={`rounded-lg w-full h-[320px] flex justify-end flex-col bg-gray-600 bg-blend-soft-light hover:scale-[1.03] hover:ease-in hover:transition-[300]`}
                  style={{
                    backgroundImage: `url(${article?.cover_image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="ml-5 mb-3">
                    <TechnologyPurpleButton text={article?.tag_list[0]} />
                  </div>
                  <p className="text-[#FFFFFF] text-[18px] leading-7 mx-5 mb-3 line-clamp-2">
                    {article?.description}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
