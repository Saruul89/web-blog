import { About } from "../About/About";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const { default: CookiePolicy } = require("../footer/CookiePolicy");
const { default: PrivacyPolicy } = require("../footer/PrivacyPolicy");
const { default: TermsOfUse } = require("../footer/TermsOfUsee");

const PrivacyPage = () => {
  return (
    <div className="w-full">
      <div>
        <div className="container max-w-[1216px] flex flex-col justify-center m-auto">
          <Header />
          <div className="flex flex-col gap-10 mt-[150px]">
            <TermsOfUse />
            <CookiePolicy />
            <PrivacyPolicy />
          </div>
        </div>
        <About />
        <Footer />
      </div>
    </div>
  );
};
export default PrivacyPage;
