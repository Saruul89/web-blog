import { BackArrow } from "../helpcomponents/BackArrow";
import { TechnologyPurpleButton } from "../helpcomponents/badge/BadgeBgPurple";
import { Date } from "../helpcomponents/Date";
import { ForwardArrow } from "../helpcomponents/ForwardArrow";

export const Hero = () => {
  return (
    <div className="w-full flex justify-center mt-[100px]" id="hero">
      <div className="container max-w-[1216px]" id="home">
        <div className="h-[600px] bg-[url('/Hero.png')] bg-cover bg-center rounded-3xl flex items-end">
          <div className="md:w-[598px] md:h-[252px] w-full bg-slate-50 pl-5 ml-3 mb-3 mr-3 rounded-lg pt-5 pb-5 flex flex-col gap-3">
            <TechnologyPurpleButton text={"Technology"} />
            <h1 className="text-[#181A2A] font-semibold text-[36px] leading-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              cumque?
            </h1>
            <Date />
          </div>
        </div>
        <div className="flex gap-4 text-[#696A75] justify-end items-end mt-3">
          <BackArrow />
          <ForwardArrow />
        </div>
      </div>
    </div>
  );
};
