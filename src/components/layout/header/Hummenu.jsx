import { MetaBlogIcon } from "../../helpcomponents/buttons/svgnuud/headerSvg/MetaBlogIcon";
import { SearchIcon } from "../../helpcomponents/buttons/svgnuud/headerSvg/SearchIcon";
import { CloseIcon } from "./CloseIcon";
import Search from "./Search";

export const HumMenu = ({ onClick, handleMenu }) => {
  return (
    <div className="absolute top-0 right-0 ease-in duration-700 flex-col w-[90%] h-screen p-5 bg-white dark:bg-black dark:text-white">
      <div className="flex justify-between">
        <div className="flex justify-self-start text-[50px] leading-9 not-italic font-bold tracking-[-0.6px] mr-10 dark:text-[#F9FAFB] pb-5">
          <MetaBlogIcon />
        </div>
        <button onClick={onClick}>
          <CloseIcon />
        </button>
      </div>
      <hr />
      <div className="flex flex-col gap-3 items-start pt-4 pb-4 text-[16px] leading-7 font-normal text-gray-600 dark:text-[#D1D5DB]">
        <button onClick={handleMenu}>
          <a href="/">Home</a>
        </button>
        <button onClick={handleMenu}>
          <a href="/bloglisting">Blog</a>
        </button>
        <button onClick={handleMenu}>
          <a href="/contactus">Contact</a>
        </button>
        <Search />
      </div>
    </div>
  );
};
