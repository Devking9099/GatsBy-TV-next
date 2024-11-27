import { Button } from "@mui/material";

function DownloadCard() {
  return (
    <div className="bg-[linear-gradient(48deg,#8FCFFF_12.63%,#65BCFF_33.17%,#37A8FF_54.61%,#007EDE_101.94%)]  flex flex-col items-center justify-center px-52 pt-68 gap-16">
      <div className="flex flex-col items-center gap-32 self-stretch">
        <div className="text-gasbiprimarycolor-50 text-center text-7xl  font-bold">
          Like what you’re seeing?
        </div>
        <p className="text-center text-gasbiprimarycolor-50 text-15 font-medium leading-normal opacity-[0.8]">
          Select a plan that suits your needs and start delivering enriched
          media experiences to your users today.
        </p>

        <button
          style={{
            color: "var(--Primary-600, #008EE3)",
            fontFamily: "font/family/title-body",
            lineHeight: "normal",
          }}
          className="flex w-[300px] p-[17px_36px]  font-center  justify-center items-center gap-[10px] rounded-full border text-3xl  border-gasbiprimarycolor-500 bg-gasbiprimarycolor-50"
        >
          Take the Quiz
        </button>
        <div>
          <p className="text-center text-gasbiprimarycolor-50 text-15 font-medium leading-normal opacity-[0.8]">
            If you have any questions or need a custom solution, feel free to{" "}
            <span className="underline font-bold">Contact Us</span>.
          </p>
          <p className="text-center text-gasbiprimarycolor-50 text-15 font-medium leading-normal opacity-[1.2]">
            Still not convinced? Have a look around our website and try out some
            of our features.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-[20px]">
          <div>
            <img
              src="assets/images/plan-icon/Group 212 1.png"
              alt="Instagram"
              className="h-auto pl-44"
            />
          </div>
          <div className="text-center text-black font-bold">
            <h2>our mobile app!</h2>
          </div>
          <div className="flex gap-12 mb-8">
            <Button className="w-full mt-32 px-2 py-2 sm:px-5 sm:py-5 md:px-20 md:py-32 text-sm sm:text-md md:text-2xl rounded-32 text-gasbiprimarycolor-50 bg-gasbiprimarycolor-800 text-nowrap">
              Download for ios
            </Button>
            <Button className="w-full mt-32 px-2 py-2 sm:px-5 sm:py-5 md:px-20 md:py-32 text-sm sm:text-md md:text-2xl rounded-32 text-gasbiprimarycolor-50 bg-gasbiprimarycolor-800 text-nowrap">
              Download for android
            </Button>
          </div>
          <div className="flex justify-center  gap-4">
            <img
              src="assets/images/plan-icon/Instagram.png"
              alt="Instagram"
              className="w-56 h-56"
            />
            <img
              src="assets/images/plan-icon/Facebook.png"
              alt="Facebook"
              className="w-56 h-56"
            />
            <img
              src="assets/images/plan-icon/images.png"
              alt="TikTok"
              className="w-56 h-56"
            />
          </div>
        </div>
        <img
          src="assets/images/plan-icon/Phone.png"
          alt="Phone 1"
          className="h-auto items-center transform -rotate-15 flex-shrink-0"
        />
      </div>
    </div>
  );
}

export default DownloadCard;
