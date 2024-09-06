import Link from "next/link";
import { MetaBlogIcon } from "../helpcomponents/buttons/svgnuud/headerSvg/MetaBlogIcon";

export const Footer = () => {
  return (
    <div className="w-full bg-[#E8E8EA] pt-7">
      <div
        className="container max-w-[1216px] m-auto border-t-2 border-[#DCDDDF] pt-7 pb-10 px-4"
        id="contact"
      >
        <div className="md:flex justify-between pl-5 md:pl-0">
          <MetaBlogIcon />
          <div className="flex gap-6 pt-5">
            <Link href="/privacy">
              <button className="border-r-2 border-[#dfe1e4] pr-5">
                Terms of Use
              </button>

              <button className="border-r-2 border-[#dfe1e4] pr-5">
                Privacy Policy
              </button>
              <button>Cookies Policy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
