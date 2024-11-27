"use client";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import clsx from "clsx";
import { motion } from "framer-motion";
import ModernPricingCard from "./Component/ModernPricingCard";

import ModernPricingItemType from "./Component/ModernPricingItemType";
import { Checkbox } from "@mui/material";
import StemItem from "./Component/PlanItem.json";
import pricingData from "./Component/pricingData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import ChooseButton from "./Component/Button";
import { Considerate, planItems } from "./Component/PlanItem";
import StepComponent from "./Component/StepComponent";
import { Step, StepDate } from "./Component/StepData";
import DownloadCard from "./Component/Download";
import { Stack } from "@mui/material";

function Plan() {
  const [period, setPeriod] =
    useState<ModernPricingItemType["period"]>("month");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

  function handleChoosePlan(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="relative flex flex-col min-w-0 overflow-hidden bg-gasbigray-50 ">
      <div className="w-full relative overflow-hidden px-24 pb-48 pt-32 xl:px-64 sm:pb-44 sm:pt-44">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          >
            <div className="mt-4 text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-7xl">
              Plans and Pricing
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.15 } }}
          >
            <Typography
              className="mt-24 text-center tracking-tight sm:text-2xl pt-1"
              color="text.secondary"
            >
              Prices that follow the growth of your business, so you will never
              be paying more than you need.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
          >
            <div className="flex flex-row items-center justify-center pt-24 text-center gap-8">
              <div className="text-blue-gray-600">Save with annual billing</div>
              <div className="flex items-center gap-5 pt-24 text-center">
                <div className="flex h-28 overflow-hidden rounded-full p-2 sm:mt-0 bg-grey-700 mb-28">
                  <Box
                    component="button"
                    className={clsx(
                      "h-24 cursor-pointer rounded-full px-14 font-medium",
                      period === "year" && "shadow"
                    )}
                    onClick={() => setPeriod("year")}
                    sx={[
                      period === "year"
                        ? {
                            backgroundColor: "background.paper",
                          }
                        : {
                            backgroundColor: "",
                          },
                    ]}
                    type="button"
                  ></Box>
                  <Box
                    component="button"
                    className={clsx(
                      "h-24 cursor-pointer items-center rounded-full px-14 font-medium pt-8",
                      period === "month" && "shadow"
                    )}
                    onClick={() => setPeriod("month")}
                    sx={[
                      period === "month"
                        ? {
                            backgroundColor: "background.paper",
                          }
                        : {
                            backgroundColor: "",
                          },
                    ]}
                    type="button"
                  ></Box>
                </div>
              </div>
              <div className="text-sm text-center font-bold p-4 border border-gasbisecondaycolor-400 bg-gasbisecondaycolor-100 text-gasbisecondaycolor-700 rounded-md">
                Save 10%
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <div className="w-full p-10 justify-center hidden lg:flex">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-24"
            >
              {pricingData.slice(0, 4).map((pricingItem, index) => (
                <motion.div key={index} variants={item} className="col-span-1">
                  <ModernPricingCard
                    {...pricingItem}
                    isSelected={selectedIndex === index}
                    onClick={() => setSelectedIndex(index)}
                  />
                </motion.div>
              ))}

              <motion.div className="lg:hidden col-span-1">
                {pricingData.length > 4 && (
                  <ModernPricingCard
                    {...pricingData[4]}
                    isSelected={selectedIndex === 4}
                    onClick={() => setSelectedIndex(4)}
                  />
                )}
              </motion.div>
            </motion.div>
          </div>
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              700: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1280: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            scrollbar={false}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
            modules={[Keyboard, Navigation, Pagination]}
            className="mySwiper block lg:hidden overflow-visible pb-10"
          >
            {pricingData.map((pricingItem, index) => (
              <SwiperSlide key={index}>
                <motion.div variants={item} className="col-span-1">
                  <ModernPricingCard
                    {...pricingItem}
                    isSelected={selectedIndex === index}
                    onClick={() => setSelectedIndex(index)} // Set the selected index
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="relative flex flex-col items-center px-24 pb-32 pt-28 sm:px-64 sm:pb-44 sm:pt-44">
        {/* Add hidden class for screens <= 1260px */}
        <div className="hidden md:block lg:block xl:block 2xl:block w-full max-w-full p-36 gap-4 rounded-2xl border border-cool-gray-100 bg-gradient-to-b from-white to-[rgba(255,255,255,0.40)] shadow-[0px_4px_16px_rgba(0,0,0,0.05)] h-full">
          <div className="grid grid-cols-1 md:grid-cols-5 w-full">
            <div className="flex flex-col justify-start items-start h-full text-center gap-1 w-full p-6">
              <p className="text-2xl font-bold text-purple-600 uppercase">
                FREE
              </p>
              <p className="pt-20 p-6">
                <span className="text-20">$</span>
                <span className="text-32">0</span>
                <span className="text-[20 font-extrabold leading-tight text-grey-800]">
                  /Month
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Up to 200 API calls /month
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full mb-4">
              <Typography className="text-[16px] font-bold">
                Features:
              </Typography>
              {[
                "Access to basic data endpoints",
                "Standard resolution images",
                "Email support with 48-hour response time",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Checkbox
                    checked
                    className="p-0 text-green-300 checked:text-green-600"
                  />
                  <Typography className="text-[14px]">{feature}</Typography>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 w-full mb-4">
              <Typography className="text-[16px] font-bold">
                Limitations:
              </Typography>
              {[
                "No access to advanced data",
                "Rate limiting: 1 request per second",
                "Intended for personal use",
              ].map((limitation, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Checkbox
                    checked
                    className="p-0 text-green-300 checked:text-green-700"
                  />
                  <Typography className="text-[14px]">{limitation}</Typography>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 w-full mb-4">
              <Typography className="text-[16px] font-bold">
                Purpose:
              </Typography>
              {[
                "Provides ongoing free access",
                "Allows potential clients to explore functionalities",
              ].map((purpose, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Checkbox
                    checked
                    className="p-0 text-green-300 checked:text-green-700"
                  />
                  <Typography className="text-[14px]">{purpose}</Typography>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center h-full gap-6 w-full mb-4">
              <ChooseButton onClick={handleChoosePlan} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-10 pb-6 pt-6 sm:px-10 sm:pb-44 sm:pt-36">
        <div className="flex items-center gap-12">
          <div>
            <img
              src="assets/images/plan-icon/persent.png"
              alt="Discount Icon"
              className="ml-8"
            />
          </div>
          <div>
            <span className="text-center gap-11">
              20% discount <span className="text-grey-700">for verified</span>{" "}
              <b>Non-Profit Organizations</b> and <b>Educational</b>{" "}
              Institutions
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-24 pb-32 pt-12 sm:px-64 sm:pb-80 sm:pt-32">
        <div className="flex flex-col items-center gap-32 self-stretch p-16 border border-gray-300 rounded-12 bg-gradient-to-b shadow-lg">
          <div className="text-black text-center font-family-title-body text-6xl leading-normal font-bold">
            Considerations for Limitations
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-20 self-stretch">
            {planItems.map((item, index) => (
              <Considerate
                key={index}
                iconSrc={item.iconSrc}
                altText={item.altText}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(48deg,#8FCFFF_12.63%,#65BCFF_33.17%,#37A8FF_54.61%,#007EDE_101.94%)] flex flex-col items-center justify-center p-32 gap-36">
        <h2 className="text-center text-gray-100 pt-16 font-bold text-48 sm:text-48">
          Why This Pricing Model Works
        </h2>
        <div className="flex flex-wrap justify-center gap-36 w-full max-w-[1400px] mt-6">
          {StepDate.map((item, index) => (
            <StepComponent key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="py-76 px-52 flex flex-col items-center gap-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-48 sm:text-48 font-bold text-center text-gray-900">
            Getting Started
          </h2>
          <div className="mt-40 grid grid-cols-1 md:grid-cols-5 gap-20">
            {StemItem.map((step) => (
              <div
                key={step.number}
                className="flex items-center flex-row md:flex-col gap-20 md:gap-3 "
              >
                <div className="size-60 rounded-full bg-[linear-gradient(126deg,#EDF6FF_0%,#D4EFFF_100%)] text-26 font-bold text-gasbiprimarycolor-600 shadow-[0px_4px_8px_rgba(0,0,0,0.1)] flex items-center justify-center">
                  <p className="text-blue-500 font-bold text-3xl">
                    {step.number}
                  </p>
                </div>
                <div className="w-full">
                  <p className="mt-4 text-24 font-bold text-black text-start md:text-center">
                    {step.title}
                  </p>
                  <p className="mt-2 text-18 text-gray-600 text-start md:text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {DownloadCard()}
    </div>
  );
}

export default Plan;
