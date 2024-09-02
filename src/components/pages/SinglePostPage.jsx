import { About } from "../About/About";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

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
