import React from "react";
import ModernPricingItemType from "./ModernPricingItemType";

type ModernPricingCardProps = ModernPricingItemType & {
  className?: string;
};
function SignToolbar(props: ModernPricingCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-[40px] pt-[30px]">
      <div className="flex flex-col justify-center gap-[20px]">
        <div>
          <img
            src="assets/images/plan-icon/Group 212 1.png"
            alt="Instagram"
            className="w-[380px] h-auto"
          />
        </div>
        <div className="flex justify-center gap-4 mb-8">
          <button className="flex py-[15px] px-[31px] justify-center items-center gap-[10px] text-center text-[var(--Neutral-Light,#FAFAF6)] font-[500] leading-normal rounded-[60px] border border-[#56B3FF] bg-[#00609C]  hover:bg-blue-900 transition">
            Download for iOS
          </button>
          <button className="flex py-[15px] px-[31px] justify-center items-center gap-[10px] text-center text-[var(--Neutral-Light,#FAFAF6)] font-[500] leading-normal rounded-[60px] border border-[#56B3FF] bg-[#00609C]  hover:bg-blue-900 transition">
            Download for Android
          </button>
        </div>
        <div className="flex justify-center  gap-4">
          <img
            src="assets/images/plan-icon/Instagram.png"
            alt="Instagram"
            className="w-[57px] h-[57px]"
          />
          <img
            src="assets/images/plan-icon/Facebook.png"
            alt="Facebook"
            className="w-[57px] h-[57px]"
          />
          <img
            src="assets/images/plan-icon/images.png"
            alt="TikTok"
            className="w-[57px] h-[57px]"
          />
        </div>
      </div>
      <img
        src="assets/images/plan-icon/Phone.png"
        alt="Phone 1"
        className="w-[400px] h-auto items-center transform -rotate-15 flex-shrink-0"
      />
    </div>
  );
}
export default SignToolbar;
