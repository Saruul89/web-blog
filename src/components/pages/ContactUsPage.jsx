import { Header } from "../header/Header";

const ContactUsPage = () => {
  return (
    <div className="w-full">
      <div className="container flex justify-center m-auto max-w-[1216px]">
        <div>
          <Header />
          <div className="container max-w-[800px]">
            <h1 className="text-[#181A2A] text-[24px] leading-7 font-bold mb-4 mt-[150px]">
              Contact Us
            </h1>
            <p className="text-base text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUsPage;
