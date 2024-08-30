import { BadgeTextPurple } from "@/components/helpcomponents/badge/BadgeTextPurple";

const PostCardData = [
  {
    id: 1,
    url: "https://images.nightcafe.studio/jobs/6UO3O3X5yTqqUhgcRFJs/6UO3O3X5yTqqUhgcRFJs--1--iliqs.jpg?tr=w-1600,c-at_max",
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createDate: "2024/08/29",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww",
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createDate: "2024/08/29",
  },
  {
    id: 3,
    url: "https://live.staticflickr.com/2414/2174872128_8a61204206_b.jpg",
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createDate: "2024/08/29",
  },
  {
    id: 4,
    url: "https://live.staticflickr.com/3109/3192010957_17eb82fc20_b.jpg",
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createDate: "2024/08/29",
  },
  {
    id: 5,
    url: "https://i.ytimg.com/vi/dTWzLnbopFc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCDNJ0rPOX2J-r8sn8wnoRHU5VteQ",
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createDate: "2024/08/29",
  },
  {
    id: 6,
    url: "https://media.istockphoto.com/id/1443170623/photo/mongolian-animals-grazing-in-the-summer-pasture.jpg?s=612x612&w=0&k=20&c=lM2RmDWtJ9YnNkAEvOjXRg_hboSXIwEZFi8n1kyR52M=",
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createDate: "2024/08/29",
  },
];

export const PostCard = () => {
  return (
    <div className="w-full h-auto mt-10">
      <div className="container flex justify-between flex-wrap">
        {PostCardData.map((card) => (
          <div className="w-[392px] h-[476px] flex flex-col gap-3 mb-5 border rounded-md border-[#E8E8EA]">
            <img
              src={card.url}
              alt=""
              className="w-[360px] h-[240px] mx-auto pt-3 rounded-md"
            />
            <div className="ml-5">{<BadgeTextPurple text={card.title} />}</div>
            <h3 className="text-[#181A2A] ml-5 mr-5 mt-2 font-semibold text-[24px] leading-7">
              {card.description}
            </h3>
            <p className="text-[#97989F] text-base ml-5">{card.createDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
