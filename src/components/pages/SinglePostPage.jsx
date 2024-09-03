import { About } from "../About/About";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const PostCardData = [
  {
    id: 1,
    url: "https://images.nightcafe.studio/jobs/6UO3O3X5yTqqUhgcRFJs/6UO3O3X5yTqqUhgcRFJs--1--iliqs.jpg?tr=w-1600,c-at_max",
    title: "Software",
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
    title: "Design",
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
    title: "Gaming",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createDate: "2024/08/29",
  },
];

export default function SinglePostPage() {
  return (
    <div className="w-full">
      <div className="container max-w-[1216px] flex justify-center m-auto">
        <div>
          <Header />
          <div className="container max-w-[624px] mt-[150px]">
            <h1 className="font-semibold text-[#181A2A] text-4xl">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}
