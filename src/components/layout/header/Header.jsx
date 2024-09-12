import { useState } from "react";
import { MetaBlogIcon } from "../../helpcomponents/buttons/svgnuud/headerSvg/MetaBlogIcon";
import { HumIcon } from "./HumIcon";
import { HumMenu } from "./Hummenu";
import Search from "./Search";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="container max-w-[1216px] flex justify-between fixed bg-white py-4">
        <a href="/">
          <MetaBlogIcon />
        </a>
        <div className="md:flex gap-6 hidden">
          <button className="hover:border-b-2 border-orange-300 duration-100">
            <a href="/">Home</a>
          </button>
          <button className="hover:border-b-2 border-orange-300 duration-100">
            <a href="/bloglisting">Blog</a>
          </button>
          <button className="hover:border-b-2 border-orange-300 duration-100">
            <a href="/contactus">Contact</a>
          </button>
        </div>
        <div className="hidden md:flex">
          <Search />
        </div>
        <div className="block md:hidden">
          <div>
            {isOpenMenu ? (
              <button onClick={handleMenu}>
                <HumMenu />
              </button>
            ) : (
              <button onClick={handleMenu}>
                <HumIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
