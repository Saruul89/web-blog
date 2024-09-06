import { useState } from "react";
import { MetaBlogIcon } from "../helpcomponents/buttons/svgnuud/headerSvg/MetaBlogIcon";
import { SearchIcon } from "../helpcomponents/buttons/svgnuud/headerSvg/SearchIcon";
import { HumIcon } from "./HumIcon";
import { HumMenu } from "./Hummenu";
import Link from "next/link";

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
          <button>
            <a href="/">Home</a>
          </button>
          <button>
            <a href="/bloglisting">Blog</a>
          </button>
          <button>
            <a href="/contactus">Contact</a>
          </button>
        </div>
        <div className="hidden md:flex">
          <SearchIcon />
        </div>
        <div className="block md:hidden">
          <div>
            {isOpenMenu ? (
              <button onClick={handleMenu}>
                <HumMenu />
              </button>
            ) : (
              //buttonii deerh handleMenu gdg bol haalga ni, tgeed humMenu-giin onClick-iin hajuu taliinh uud ni yma
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
