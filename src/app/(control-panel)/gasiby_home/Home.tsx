"use client";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HoneType from "./HoneType";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@mui/material/Button";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Considerate, planItems } from "./PlanItem";
import { Consider, Movie } from "./AvatarCard";
import { motion } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Where can I use Gatsby?",
    answer: "You can use Gatsby on any modern device with a web browser.",
  },
  {
    question: "Is Gatsby free to use?",
    answer: "Yes, Gatsby is completely free for users.",
  },
  {
    question: "Does Gatsby have a mobile app?",
    answer:
      "Currently, Gatsby is a web-based platform and does not have a mobile app.",
  },
  {
    question: "What if I have no friends on Gatsby?",
    answer:
      "Gatsby can help you connect with others who share similar interests!",
  },
  {
    question: "What can I do with my friends on the app?",
    answer:
      "You can share recommendations, reviews, and discover new entertainment together.",
  },
];

function Home() {
  const [period, setPeriod] = useState<HoneType["period"]>("month");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const container = {
    show: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex flex-col min-w-0 overflow-hidden bg-gasbigray-50 ">
      <Box className="bg-gasbiprimarycolor-200 text-primary-contrastText px-24 py-40 sm:px-64 sm:py-48">
        <div className="mx-auto flex container flex-col items-center text-center">
          <Typography className="text-center text-gray-100 pt-68 font-bold text-48 sm:text-48 sm:px-216">
            Discover, Track, and Share your Next Binge
          </Typography>
          <Button className="mt-32 px-64 py-28 text-3xl rounded-32 text-gasbiprimarycolor-50 bg-gasbiprimarycolor-700">
            Create Account
          </Button>
          <Typography className="text-center text-gray-100 pt-14 font-bold text-sm sm:text-xl">
            Log in
          </Typography>
        </div>
      </Box>
      <div className="relative flex flex-col items-center px-24 pb-32 pt-28 sm:px-200 sm:pb-44 sm:pt-44 gap-76">
        <div className="flex flex-col lg:flex-row items-center justify-center py-10 gap-96 ">
          <div className="flex flex-col items-start text-start gap-40  relative ">
            <img src="assets/images/home/search.png" alt="Search Icon" />
            <h2 className="text-6xl font-semibold text-black">
              Find the right entertainment and how to watch it
            </h2>
            <p className="mt-4 text-gray-600 text-3xl max-w-md">
              Quickly sift through every available title on all streaming
              platforms and where you can watch or rent it, even for free.
            </p>
          </div>
          <div className="relative">
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
              <img
                src="assets/images/home/image.png"
                alt="Entertainment Details"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center py-10  gap-96">
          <div className="relative">
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
              <img
                src="assets/images/home/image_1.png"
                alt="Entertainment Details"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-start text-start gap-40  relative ">
            <img src="assets/images/home/check.png" alt="Search Icon" />
            <h2 className="text-6xl font-semibold text-black">
              Find the right entertainment and how to watch it
            </h2>
            <p className="mt-4 text-gray-600 text-3xl max-w-md">
              Quickly sift through every available title on all streaming
              platforms and where you can watch or rent it, even for free.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center py-10  gap-96">
          <div className="flex flex-col items-start text-start gap-40  relative ">
            <img src="assets/images/home/fly.png" alt="Search Icon" />
            <h2 className="text-6xl font-semibold text-black">
              Find the right entertainment and how to watch it
            </h2>
            <p className="mt-4 text-gray-600 text-3xl max-w-md">
              Quickly sift through every available title on all streaming
              platforms and where you can watch or rent it, even for free.
            </p>
          </div>
          <div className="relative">
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
              <img
                src="assets/images/home/image_3.png"
                alt="Entertainment Details"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(48deg,#8FCFFF_12.63%,#65BCFF_33.17%,#37A8FF_54.61%,#007EDE_101.94%)] flex flex-col items-center justify-center p-32 gap-36">
        <h1 className="text-center text-gray-100 pt-16 font-bold text-48 sm:text-48">
          Frequently Asked Questions
        </h1>
        <div className="w-full max-w-3xl space-y-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden gap-44"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center p-20 text-3xl text-black font-bold hover:bg-gray-100"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-24 h-24 text-gasbiprimarycolor-600 font-black transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-28 text-gray-600 border-t">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center px-24 pb-32 pt-12 sm:px-64 sm:pb-80 sm:pt-32">
        <div className="flex flex-col items-center gap-32 self-stretch p-16">
          <div className="flex flex-col items-center justify-center mt-8 md:flex-row md:items-center md:justify-start gap-14">
            <span className="text-center text-black text-6xl md:text-4xl lg:text-6xl">
              Here’s a taste of{" "}
            </span>
            <img
              src="assets/images/home/Logo.png"
              alt="Logo"
              className="mt-4 md:mt-0 md:ml-4 max-w-full "
            />
          </div>
          <Typography className="text-center text-black pt-6 font-bold text-20 sm:text-20">
            Members are loving these Collections
          </Typography>
          <div className="w-full p-10  justify-center ">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className=" gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-48 hidden lg:flex"
            >
              {planItems.map((item, index) => (
                <Considerate
                  key={index}
                  iconSrc={item.iconSrc}
                  altText={item.altText}
                  title={item.title}
                  description={item.description}
                  avatar={item.avatar}
                  hard={item.hard}
                  movie={item.movie}
                />
              ))}
            </motion.div>
            <Swiper
              slidesPerView={1}
              slidesPerGroup={1}
              grabCursor={true}
              keyboard={{ enabled: true }}
              navigation={true}
              pagination={{ clickable: true }}
              spaceBetween={20}
              modules={[Keyboard, Navigation, Pagination]}
              className="mySwiper block lg:hidden overflow-visible pb-10"
            >
              {planItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <Considerate
                    iconSrc={item.iconSrc}
                    altText={item.altText}
                    title={item.title}
                    description={item.description}
                    avatar={item.avatar}
                    hard={item.hard}
                    movie={item.movie}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="px-24 scroll-py-xs sm:px-64 sm:py-xs bg-[linear-gradient(48deg,#8FCFFF_12.63%,#65BCFF_33.17%,#37A8FF_54.61%,#007EDE_101.94%)]">
        <div className=" flex container flex-col items-center text-center h-auto mb-6">
          <Typography className="text-center text-gray-100 pt-16 font-bold text-48 sm:text-48">
            Find Your Watch of the Day!
          </Typography>
          <Button className="mt-40 px-52 py-28 text-xl font-bold text-gray-100 bg-gasbiprimarycolor-700 rounded-32">
            Take the Quiz
          </Button>
        </div>
      </div>

      <div className="gird-cols-1 md:grid-cols-2 lg:grid-cols-8 items-center gap-10">
        <h2 className="text-36 sm:text-36  text-center text-black">
          Members are adding these shows to their watchlists
        </h2>
        <div className=" p-10  justify-center">
          <div className="gird-cols-1 md:grid-cols-2 lg:grid-cols-8 justify-between items-center w-[100%] mt-20 hidden lg:flex relative">
            {Movie.map((step, index) => (
              <Consider key={index} movie={step.movie} alter={step.alter} />
            ))}
          </div>
          <Swiper
            slidesPerView={4}
            slidesPerGroup={1}
            grabCursor={true}
            keyboard={{ enabled: true }}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={20}
            modules={[Keyboard, Navigation, Pagination]}
            className="mySwiper block lg:hidden overflow-visible pb-10"
          >
            {Movie.map((step, index) => (
              <SwiperSlide key={index}>
                <motion.div variants={item}>
                  <Consider {...step} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-[linear-gradient(48deg,#8FCFFF_12.63%,#65BCFF_33.17%,#37A8FF_54.61%,#007EDE_101.94%)]  flex flex-col items-center justify-center p-76 gap-16">
        <div className="flex flex-col items-center gap-32 self-stretch">
          <div className="text-gasbiprimarycolor-50 text-center text-48  normal-font">
            Ready to Elevate Your Media Content?
          </div>
          <p className="text-center text-gasbiprimarycolor-50 font-medium leading-normal opacity-[0.8]">
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
            Sign Up Now
          </button>
          <div>
            <p className="text-center text-gasbiprimarycolor-50 font-medium leading-normal opacity-[0.8]">
              If you have any questions or need a custom solution, feel free to{" "}
              <span className="underline font-bold">Contact Us</span>.
            </p>
            <p className="text-center text-gasbiprimarycolor-50 font-medium leading-normal opacity-[1.2]">
              Note: Prices and features are suggestions and should be adjusted
              based on market research, operational costs, and client feedback.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[40px] pt-[30px]">
          <div className="flex flex-col justify-center gap-[20px]">
            <div>
              <img
                src="assets/images/plan-icon/Group 212 1.png"
                alt="Instagram"
                className="w-320 h-auto"
              />
            </div>
            <div className="text-center text-black font-bold">
              <h2>our mobile app!</h2>
            </div>
            <div className="flex justify-between gap-4 mb-8">
              <button className="flex py-20 px-20 justify-center items-center gap-[10px] text-center text-[var(--Neutral-Light,#FAFAF6)] font-[500] leading-normal rounded-32 border border-[#56B3FF] bg-gasbiprimarycolor-900  hover:bg-blue-900 transition">
                Download for iOS
              </button>
              <button className="flex py-20 px-20 justify-center items-center gap-[10px] text-center text-[var(--Neutral-Light,#FAFAF6)] font-[500] leading-normal rounded-32 border border-[#56B3FF] bg-gasbiprimarycolor-900  hover:bg-blue-900 transition">
                Download for Android
              </button>
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
            className="w-360 h-auto items-center transform -rotate-15 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
