import { TechnologyPurpleButton } from "../helpcomponents/badge/BadgeBgPurple";

const TradingPostCardData = [
  {
    id: 1,
    url: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    id: 2,
    url: "https://imageio.forbes.com/specials-images/imageserve/6200b0dddcf32d3be937fa84/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    id: 3,
    url: "https://www.crowe.com/-/media/crowe/llp/sc10-media/insights/articles/2023/content-2000x1125/contentmktmt2300002bfy23-markets-technology-awareness--whats-next-for-tech--thought-leadershipas3639.jpg?rev=025a044aa9394515a261e9c6242045cb",
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    id: 4,
    url: "https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg",
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];

export const Trending = () => {
  return (
    <div className="w-full flex flex-col mt-[50px]">
      <h3 className="container max-w-[1216px] m-auto text-[#181A2A] text-[24px] leading-7 font-bold mb-6">
        Trending
      </h3>
      <div className="container max-w-[1216px] flex justify-between gap-4 m-auto">
        {TradingPostCardData.map((trendingcard) => (
          <div className="flex">
            <div
              className={`bg-cover rounded-lg w-full h-[320px] flex justify-end flex-col`}
              style={{
                backgroundImage: `url(${trendingcard.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="ml-5 mb-3">
                <TechnologyPurpleButton text={trendingcard.title} />
              </div>
              <p className="text-[#FFFFFF] text-[18px] leading-7 mx-5 mb-3">
                {trendingcard.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
