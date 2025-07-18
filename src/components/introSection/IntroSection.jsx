import Image from "next/image";
import React from "react";
import worldLogo from "../../../public/assets/techlcon.png";
import tech2 from "../../../public/assets/techIcon2.png";
import tech3 from "../../../public/assets/techIcon3.png";

const IntroSection = () => {
  return (
    <div className="introBackground pt-[55px] pb-[50px] md:py-[50px] ">
      <section className="px-[4%] sm:pb-[4%] md:pb[6%] md:max-w-[1560px] mx-auto">
        <div className="px-[4%] md:px-0">
          <h1 className="mb-5 text-3xl md:text-4xl font-semibold text-white">
            WHO ARE WE?
          </h1>
          <p className="mb-[14.4px] font-normal text-base md:text-[18px] text-[#94a3b8] ">
            At <strong>S&H Business Consultants</strong>, we specialize in
            guiding French companies eager to explore, expand and capitalize on
            business opportunities in Pakistan. Our expertise are tailored to
            navigate the complexities of this dynamic market, ensuring
            successful outcomes for our clients.
          </p>
        </div>
      </section>
      <hr className="text-[#1e293b] text-xs" />
      <section className=" px-[4%] pt-[5%] md:max-w-[1560px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="mt-[30px] md:mt-0 md:mb-0 mb-10 px-[4%] md:px-0 ">
            <div className="pb-2">
              <Image src={worldLogo} alt="worldIcon" />
            </div>
            <h1 className="text-xl md:text-2xl mt-2 mb-4 text-white font-bold ">
              Demography
            </h1>
            <p className="text-base font-normal text-[#94a3b8]">
              Pakistan boasts a vibrant and youthful population, with 35.1%
              under the age of 15 and a projected population of 245 million by
              2030. This demographic trend is driving the rise of a substantial
              middle class. Numerous sectors, including telecommunications and
              banking, are already thriving, while others, such as energy,
              water, waste management, transport, food processing, and consumer
              goods, present untapped potential given the country's growing
              development needs.
            </p>
          </div>
          <div className="mt-[30px] mb-10 md:mt-0 md:mb-0 px-[4%] md:px-0 md:pl-[40px] md:pr-[50px]">
            <div className="pb-2">
              <Image src={tech2} alt="worldIcon" />
            </div>
            <h1 className="text-xl md:text-2xl mt-2 mb-4 text-white font-bold ">
              Security
            </h1>
            <p className="text-base font-normal text-[#94a3b8]">
              The security landscape in Pakistan, once a significant concern for
              French businesses, has improved considerably. This positive shift,
              coupled with Pakistan&apos;s attractive investment
              policies—including full convertibility of the rupee and the free
              repatriation of profits and dividends—makes the country a
              compelling destination for investment.
            </p>
          </div>
          <div className="mt-[30px] mb-10 md:mt-0 md:mb-0 px-[4%] md:px-0 md:pl-[50px]">
            <div className="pb-2">
              <Image src={tech3} alt="worldIcon" />
            </div>
            <h1 className="text-xl md:text-2xl mt-2 mb-4 text-white font-bold ">
              Trade
            </h1>
            <p className="text-base font-normal text-[#94a3b8]">
              Bilateral trade between France and Pakistan reached EUR 1.5
              billion in 2024, with Pakistan standing as France&apos;s
              second-largest client in South Asia. France&apos;s primary exports
              to Pakistan include pharmaceutical specialties, engines and
              turbines, and dairy and cheese products. However, the market is
              ripe with opportunities in other sectors as well, such as beauty
              products, childcare, tableware, kitchen equipment, food industry
              ingredients, animal health, and dairy farming equipment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroSection;
