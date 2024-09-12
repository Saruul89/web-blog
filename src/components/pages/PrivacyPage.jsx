import CookiePolicy from "../layout/footer/CookiePolicy";
import PrivacyPolicy from "../layout/footer/PrivacyPolicy";
import TermsOfUse from "../layout/footer/TermsOfUsee";

const PrivacyPage = () => {
  return (
    <div className="w-full">
      <div>
        <div className="container max-w-[1216px] flex flex-col justify-center m-auto">
          <div className="flex flex-col gap-10 mt-[150px]">
            <TermsOfUse />
            <CookiePolicy />
            <PrivacyPolicy />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPage;
