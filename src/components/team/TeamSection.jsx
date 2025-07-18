import Link from "next/link";
import React from "react";

import member1 from "../../../public/assets/member1.png";
import member2 from "../../../public/assets/member2.png";
import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="mt-[60px] px-[4%] pt-[5%] mb-[60px] md:max-w-[1560px] mx-auto">
      <h1 className="text-4xl font-semibold uppercase text-[#1e293b] mb-5">
        Meet the Core Team
      </h1>

      <div className="pt-[30px]">
        <div className="members flex md:flex-row flex-col w-full">
          <div className="mx-0 md:mx-2.5 w-full md:w-1/2 flex flex-col">
            <div className="flex justify-center mb-[-50px]">
              <div className="h-[250px] w-[89%] md:w-[65%] md:h-[250px] lg:w-[65%] lg:h-[250px] xl:w-[50%] xl:h-[400px] relative rounded-[10px] overflow-hidden">
                {/* <h1>hello</h1> */}
                <Image
                  src={member1}
                  alt="member1"
                  fill
                  className="object-cover object-center overflow-hidden "
                />
              </div>
            </div>
            <div className="flex-1 flex-col px-5 pb-5 pt-[66px] rounded-[20px] custom-shadow flex h-full">
              <div className="flex-1">
                <div className="mt-2 mb-4">
                  <h1 className="text-[18px] md:text-[20px] text-[#1e293b] font-medium text-center">
                    Saad Mahmud
                  </h1>
                  <p className="text-[18px] text-[#002494] text-center font-medium">
                    Founder & CEO
                  </p>
                  <div className="mt-2 flex items-center justify-center">
                    <Link href={""}>
                      <button className="flex gap-1 w-fit justify-center items-center leading-0 text-[13px] py-1 px-[6px] border border-[#002494] rounded-[10px] cursor-pointer ">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>{" "}
                            <rect
                              x="2"
                              y="4"
                              width="20"
                              height="16"
                              rx="2"
                            ></rect>{" "}
                          </svg>
                        </span>{" "}
                        saad.mahmud@snhconsultants.co
                      </button>
                    </Link>
                  </div>
                </div>
                <p className="text-center text-[16px] md:text-[18px] font-light text-[#475569] ">
                  Saad Mahmud is a Franco-Pakistani veteran with extensive
                  experience, including his tenure at the French Embassy. Saad
                  has been key in fostering economic ties between France and
                  Pakistan. As a trusted partner of Team France Export, he has
                  been instrumental in promoting bilateral trade and investment,
                  positioning himself as a leading figure in this niche
                  industry. Now, S&H Business Consultants has become a go-to
                  partner for businesses aiming for strategic growth and
                  cross-border opportunities. Saad&apos;s deep market insights
                  and knack for bridging opportunities between France and
                  Pakistan make him an unmatched ally for organizations looking
                  to launch their businesses, expand their global reach and
                  achieve sustainable success.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-0 md:mx-2.5 pt-[40px] md:pt-0 w-full md:w-1/2 flex flex-col ">
            <div className="flex justify-center mb-[-50px]">
              <div className="h-[250px] w-[89%] md:w-[65%] md:h-[250px] lg:w-[65%] lg:h-[250px] xl:w-[50%] xl:h-[400px] relative rounded-[10px] overflow-hidden">
                <Image
                  src={member2}
                  alt="member1"
                  fill
                  className="object-cover object-center h-full w-full overflow-hidden "
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col px-5 pb-5 pt-[66px] rounded-[20px] custom-shadow h-full">
              <div className="flex-1 h-full">
                <div className="mt-2 mb-4">
                  <h1 className="text-[18px] md:text-[20px] text-[#1e293b] font-medium text-center">
                    Hidayat Hussain
                  </h1>
                  <p className="text-[18px] text-[#002494] text-center font-medium">
                    Business Development Manager
                  </p>
                  <div className="mt-2 flex items-center justify-center">
                    <Link href={""}>
                      <button className="flex gap-1 w-fit justify-center items-center leading-0 text-[13px] py-1 px-[6px] border border-[#002494] rounded-[10px] cursor-pointer ">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>{" "}
                            <rect
                              x="2"
                              y="4"
                              width="20"
                              height="16"
                              rx="2"
                            ></rect>{" "}
                          </svg>
                        </span>{" "}
                        hidayat.hussain@snhconsultants.co
                      </button>
                    </Link>
                  </div>
                </div>
                <p className="text-center text-[16px] md:text-[18px] font-light text-[#475569] ">
                  Hidayat Hussain is a seasoned Franco-Pakistani professional
                  with extensive experience in financial management, business
                  advisory, and strategic planning. As a key member of S&H
                  Business Consultants, he has been instrumental in promoting
                  French exports to Pakistan in collaboration with the French
                  Economic Services. Hidayat&apos;s expertise in financial
                  analysis, risk management, and compliance has enabled numerous
                  organizations to achieve sustainable growth and operational
                  excellence. His commitment to delivering tailored business
                  solutions and his deep understanding of diverse market
                  dynamics make him a highly respected figure in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
