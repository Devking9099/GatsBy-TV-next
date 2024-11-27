"use client";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HoneType from "./Component/HoneType";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@mui/material/Button";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Considerate, planItems } from "./Component/PlanItem";
import { Consider, Movie } from "./Component/AvatarCard";
import { motion } from "framer-motion";
import DownloadCard from "./Component/Download";
import Questions from "./Component/Data.json";

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
      <Box
        className="text-primary-contrastText px-24 py-40 sm:px-64 sm:py-48"
        style={{
          background: `
      linear-gradient(180deg, rgba(0, 0, 0, 0.51) 0%, rgba(0, 0, 0, 0.61) 56.3%),
      url(assets/images/home/background1.png)
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex container flex-col items-center text-center">
          <Typography className="text-center text-gray-100 pt-68 font-bold text-48 sm:text-48 sm:px-216">
            Discover, Track, and Share your Next Binge
          </Typography>
          <Button className="mt-32 px-64 py-28 text-3xl rounded-32 text-gasbiprimarycolor-50 bg-gasbiprimarycolor-500">
            Create Account
          </Button>
          <div className="pt-40">
            <Button
              className="text-center text-gray-100  font-bold text-xl sm:text-xl"
              onClick={() => {}}
            >
              Log in
            </Button>
          </div>
        </div>
      </Box>
      <div className="relative flex flex-col px-24 pb-32 pt-28 sm:px-112 sm:pb-44 sm:pt-44 gap-76">
        <div className="flex flex-col lg:flex-row justify-center py-10 gap-96 ">
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
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md w-full">
              <img
                src="assets/images/home/image.png"
                alt="Entertainment Details"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row  justify-center py-10  gap-96">
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <img
              src="assets/images/home/image_1.png"
              alt="Entertainment Details"
              className="w-full"
            />
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
        <div className="flex flex-col lg:flex-row justify-center py-10  gap-96">
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
          {Questions.questions.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden gap-32"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center p-20 text-2xl text-grey-800 font-400 hover:bg-gray-100"
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
              className="mt-4 md:mt-2 md:ml-4 max-w-full "
            />
          </div>
          <Typography className="text-center text-gray-600 pt-6 font-bold text-20 sm:text-20">
            Members are loving these Collections
          </Typography>
          <div className="w-full p-10  items-center  justify-center ">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className=" gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 hidden lg:flex "
            >
              {planItems.map((item, index) => (
                <Considerate
                  key={index}
                  iconSrc1={item.iconSrc1}
                  iconSrc2={item.iconSrc2}
                  iconSrc3={item.iconSrc3}
                  iconSrc4={item.iconSrc4}
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
              navigation={false}
              pagination={{ clickable: true }}
              spaceBetween={20}
              modules={[Keyboard, Navigation, Pagination]}
              className="mySwiper block lg:hidden overflow-visible pb-10"
            >
              {planItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <Considerate
                    iconSrc1={item.iconSrc1}
                    iconSrc2={item.iconSrc2}
                    iconSrc3={item.iconSrc3}
                    iconSrc4={item.iconSrc4}
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
      <div
        className="w-full px-24 py-40 sm:py-64  lg:p-xs"
        style={{
          background: `
      url(assets/images/home/background2.png)
    `,
          backgroundSize: "cover", // Ensures the image covers the div
          backgroundPosition: "center",
        }}
      >
        <div className=" flex container flex-col items-center text-center h-auto mb-6">
          <Typography className="text-center text-gray-100 pt-16 font-bold text-48 sm:text-48">
            Find Your Watch of the Day!
          </Typography>
          <Button className="mt-40 px-52 py-28 text-xl font-bold text-gray-100 bg-gasbiprimarycolor-500 rounded-32">
            Take the Quiz
          </Button>
        </div>
      </div>

      <div className="gird-cols-1 md:grid-cols-2 xl:grid-cols-8 items-center mt-48 gap-10">
        <h2 className="text-36 sm:text-36  font-500 text-center text-black">
          Members are adding these shows to their watchlists
        </h2>
        <div className="p-56 justify-center">
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-24 justify-between mt-20 hidden lg:flex relative">
            {Movie.map((step, index) => (
              <Consider key={index} movie={step.movie} alter={step.alter} />
            ))}
          </div>
          <Swiper
            slidesPerView={4}
            slidesPerGroup={1}
            grabCursor={true}
            keyboard={{ enabled: true }}
            navigation={false}
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
      {DownloadCard()}
    </div>
  );
}

export default Home;
