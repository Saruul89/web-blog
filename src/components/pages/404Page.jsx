import { About } from "../About/About";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export default function PageNotFound() {
  return (
    <div className="w-full">
      <div className="container flex justify-center m-auto max-w-[1216px]">
        <div>
          <Header />
          <div className="flex mt-[150px]">
            <p className="text-[72px] leading-[72px]">404</p>
            <div className="flex flex-col gap-5">
              <p className="text-[24px] leading-[40px]">Page Not Found</p>
              <p className="text-lg text-[#696A75] w-[400px]">
                We're sorry, This page is unknown or does not exist the page you
                are looking for.
              </p>
              <button className="border rounded-md bg-[#4B6BFB] w-[35%] text-[#FFFFFF] p-1">
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}
