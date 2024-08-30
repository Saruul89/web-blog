import { BackArrow } from "../helpcomponents/BackArrow";
import { TechnologyPurpleButton } from "../helpcomponents/badge/BadgeBgPurple";
import { Date } from "../helpcomponents/Date";
import { ForwardArrow } from "../helpcomponents/ForwardArrow";

export const Hero = () => {
  return (
    <div className="w-full flex justify-center mt-[100px]">
      <div className="container max-w-[1216px]">
        <div className="h-[600px] bg-[url('/Hero.png')] bg-cover rounded-3xl flex items-end">
          <div className="w-1/4 h-1/4 bg-slate-50 pl-4 ml-3 mb-3 rounded-lg pt-4 gap-6">
            <TechnologyPurpleButton text={"Technology"} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              cumque?
            </p>
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
