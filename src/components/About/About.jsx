import {
  FbIcons,
  InstaIcon,
  LinkidnIcon,
  TwitterIcon,
} from "./IconsFBINSTATwiLink";

export const About = () => {
  return (
    <div className="w-full bg-[#E8E8EA] mt-20">
      <div className="container max-w-[1216px] m-auto md:flex pl-5 md:justify-between">
        <div className="flex gap-5 flex-col">
          <h3 className="text-[#181A2A] text-[24px] leading-7 font-bold pt-10">
            About
          </h3>
          <p className="text-[#696A75] text-base md:w-[300px] md:h-[120px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde atque
            reprehenderit esse debitis cupiditate, eveniet vero doloribus
            inventore qui culpa?
          </p>
          <div className="text-[#181A2A] text-base flex flex-col gap-1">
            <p>Email : saruultumed11@gmail.com</p>
            <p>Phone : +976 8093 3171</p>
          </div>
        </div>
        <div className="flex md:flex-col text-[#3B3C4A] gap-4 text-base items-start pt-10">
          <button>Home</button>
          <button>Blog</button>
          <button>Contact</button>
        </div>
        <div className="flex gap-5 pt-10 pr-[170px]">
          <FbIcons />
          <TwitterIcon />
          <InstaIcon />
          <LinkidnIcon />
        </div>
      </div>
    </div>
  );
};
