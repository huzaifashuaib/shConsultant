"use client";
import React, { useEffect, useState } from "react";
import { technologyData } from "./techData";
import Image from "next/image";
import { manrope } from "../../../libs/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import SlideUpWrapper from "../../SlideUpWrapper";

const TechServices = () => {
  const [techData, setTechData] = useState(technologyData);
  const [imageSet, setImagesSet] = useState(technologyData[0].images);
  const [swiperBullets, setSwiperBullets] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const checkScreen = () => setSwiperBullets(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleClick = (index) => {
    const update = technologyData.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setTechData(update);
    setImagesSet(update[index].images);
  };
  return (
    <SlideUpWrapper className="max-w-345 mx-auto p-5 md:py-25 md:px-5 flex flex-col gap-6 md:gap-8">
      {/* <div className="max-w-345 mx-auto p-5 md:py-25 md:p-2.5 flex flex-col gap-6 md:gap-8"> */}
      <h1 className="text-3xl md:text-4xl font-semibold text-white  ">
        TECHNOLOGY SERVICES
      </h1>
      <p className="text-base md:text-lg text-slate-400">
        We transform ideas into digital outcomes to elevate the connection
        <br />
        between the brand and its users. We help brands to realize their full
        <br />
        potential digitally through creativity and technology. We strive to
        <br />
        offer a new perspective it the pursuit of the best possible outcome.
      </p>
      <div className=" grid-cols-1 md:grid-cols-3 max-md:gap-3 hidden md:grid">
        {techData.map(({ icon, title, desc, active }, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className={`px-3.75 py-5 md:my-5 md:mx-6.25 cursor-pointer rounded-2xl  ${
              active && "bg-[#010D2D80] backdrop:blur-xl border border-white"
            } ${
              !active &&
              "hover:bg-[#20253880] hover:border border-white transition-all duration-300 ease-in-out hover:-translate-y-5"
            } `}
          >
            <Image src={icon} alt="icon" width={0} height={0} />
            <h1
              className={`text-2xl font-semibold text-white mt-2 mb-4 ${manrope.className}`}
            >
              {title}
            </h1>
            <p className={`text-lg text-blue-100 ${manrope.className}`}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Pagination, Thumbs]}
          className="mySwiper !pb-8"
        >
          {techData.map(({ icon, title, desc, active }, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleClick(index)}
              className={`px-3.75 py-5 md:my-5 md:mx-6.25 cursor-pointer rounded-2xl  ${
                active && "bg-[#010D2D80] backdrop:blur-xl border border-white"
              } `}
            >
              <Image src={icon} alt="icon" width={0} height={0} />
              <h1
                className={`text-2xl font-semibold text-white mt-2 mb-4 ${manrope.className}`}
              >
                {title}
              </h1>
              <p
                className={`text-base md:text-lg text-blue-100 ${manrope.className}`}
              >
                {desc}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" bg-[#010d2d80] py-5 md:py-10 w-full rounded-md md:pb-10 ">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={
            !swiperBullets ? { dynamicBullets: true, clickable: true } : false
          }
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={4000}
          modules={[Pagination, Autoplay]}
          className="mySwiper md:pb-12 md:max-w-320 mx-auto"
        >
          {imageSet.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={index + 1}
                width={0}
                height={0}
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SlideUpWrapper>
  );
};

export default TechServices;
