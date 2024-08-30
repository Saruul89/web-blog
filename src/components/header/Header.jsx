import { MetaBlogIcon } from "../svgnuud/headerSvg/MetaBlogIcon";
import { SearchIcon } from "../svgnuud/headerSvg/SearchIcon";

export const Header = () => {
  return (
    <div className="w-full flex justify-center mt-[20px]">
      <div className="container max-w-[1216px] flex justify-between">
        <div>
          <MetaBlogIcon />
        </div>
        <div className="flex gap-6">
          <button>Home</button>
          <button>Blog</button>
          <button>Contact</button>
        </div>
        <SearchIcon />
      </div>
    </div>
  );
};
