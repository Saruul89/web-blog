import { BadgeTextPurple } from "@/components/helpcomponents/badge/BadgeTextPurple";
import Link from "next/link";

export const PostCard = ({ articles }) => {
  return (
    <div className="w-full h-auto mt-10">
      <div className="container h-auto gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles?.map((article) => {
            return (
              <Link href={`/singlepost/${article.id}`}>
                <div className="w-auto flex flex-col gap-5 mb-5 border rounded-md border-[#E8E8EA]">
                  <div className="rounded-xl">
                    <img
                      src={article?.cover_image}
                      alt=""
                      className="w-full h-[240px] rounded-xl p-3"
                    />
                  </div>
                  <div className="ml-5 ">
                    {<BadgeTextPurple text={article?.tag_list[0]} />}
                  </div>
                  <h3 className="text-[#181A2A] ml-5 mr-5 mt-2 font-semibold text-[24px] bg- leading-7 line-clamp-3">
                    {article?.description}
                  </h3>
                  <p className="text-[#97989F] text-base ml-5">2024.09.04</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
