import React from "react";
import Scolling_social from "./components/Scolling_social";
function CustomServiceSection() {
  return (
    <div className="flex justify-center items-center overflow-hidden bg-gray-400 sm:bg-yellow-300 md:bg-blue-400 lg:bg-pink-400 xl:bg-black">
      <div className="flex flex-col flex-wrap items-center justify-center relative w-full lg:w-[983px] h-full lg:h-[872px] gap-[24px] ">
        <div></div>
        <div className=" flex flex-row flex-wrap gap-[10px] h-full lg:h-[474px] justify-center overflow-hidden p-0 relative w-full lg:w-[983px] ">
          {/* Left Section: Influencer Network, Service Description, and Experience */}
          <div className="items-center flex flex-none flex-col flex-nowrap gap-[24px] h-full lg:h-[473px] justify-center overflow-hidden p-0 relative w-full lg:w-[647px] ">
            {/* Influencer Network Block */}
            <div className="items-center flex flex-none flex-col lg:flex-row flex-nowrap gap-[24px] justify-center h-full lg:h-[227px] overflow-hidden p-0 relative w-full">
              <div className="bg-[#27202d] rounded-[15px] flex-none h-[227px] overflow-hidden relative w-[311px]">
                <div className="flex justify-center overflow-hidden">
                  <div className="images flex items-center h-full pt-13">
                    {/* Overlapping Profile Images */}
                    <div className="z-40">
                      <img
                        className="rounded-full overflow-hidden"
                        decoding="async"
                        loading="lazy"
                        width={70}
                        src="https://framerusercontent.com/images/kXxsTsyyDHneBAKqrdFW6RI.png"
                        alt="Influencer 1"
                      />
                    </div>
                    <div className="z-30 -ml-4">
                      <img
                        className="rounded-full overflow-hidden"
                        decoding="async"
                        loading="lazy"
                        width={70}
                        src="https://framerusercontent.com/images/hgKg1PQWsJiUfCObrWpILNJR3M.png"
                        alt="Influencer 2"
                      />
                    </div>
                    <div className="z-20 -ml-4">
                      <img
                        className="rounded-full overflow-hidden"
                        decoding="async"
                        loading="lazy"
                        width={70}
                        src="https://framerusercontent.com/images/OyspJ77T5XorOqBfM7pFq3Axb4.png"
                        alt="Influencer 3"
                      />
                    </div>
                    <div className="z-10 -ml-4">
                      <img
                        className="rounded-full overflow-hidden"
                        decoding="async"
                        loading="lazy"
                        width={70}
                        src="https://framerusercontent.com/images/k1GFG1AAMN68uOkh5prjxhiFLu8.png"
                        alt="Influencer 4"
                      />
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-[#4c1c5d] blur-[50px] flex-none h-[var(--framer-aspect-ratio-supported,170px)] absolute w-[170px] rounded-[100%] left-[205px] top-[129px]"></div>
                <div className="flex flex-col justify-start shrink-0 flex-none h-auto absolute whitespace-pre-wrap w-60 left-6 top-[161px]">
                  <p className=" text-gray-400">
                    Bootstrap distribution with our
                    <span className="text-white"> network of influencers</span>
                  </p>
                </div>
              </div>

              {/* Service Description Block */}
              <div
                style={{
                  background:
                    "linear-gradient(112.91698509245677deg, #633380 0%, rgba(114, 10, 123, 1) 100%)",
                }}
                className=" bg-[#27202d] flex-none h-[227px] overflow-hidden relative w-[311px]  rounded-[15px]"
              >
                <div></div>
                <div className=""></div>
                <div className="flex flex-col justify-start shrink-0 flex-none h-auto absolute whitespace-pre-wrap w-60 left-[27px] top-[161px]">
                  <p className="text-gray-400">
                    We handle everything<span> </span>
                  </p>
                  <p className="text-white">end to end.</p>
                </div>
              </div>
            </div>
            {/* Experience Statement */}
            <div className="bg-[#27202d] rounded-[15px] flex-none h-[240px] lg:h-[227px] overflow-hidden w-[311px] lg:w-full relative ">
              <div className="aspect-[4.223529411764706_/_1] bg-[#4c1c5d] blur-[50px] flex-none h-[var(--framer-aspect-ratio-supported,170px)] absolute w-[718px] rounded-[100%] -left-12 top-40"></div>
              <div className="flex flex-col justify-center h-full">
                <div className=" ">
                  {/* scolling infinite */}
                  <main className="">
                  <Scolling_social/>
                  </main>
                </div>
              </div>
              <div className="lg:flex-none lg:h-auto absolute lg:whitespace-pre-wrap lg:w-[415px] md:w-full w-auto lg:items-center lg:items-start  px-5 lg:px-0  top-[186px] lg:left-6 lg:top-[186px]  lg:flex lg:flex-col lg:flex-wrap lg:justify-start lg:shrink-0">
                <p className="text-white">
                  <span className="text-gray-500">We have done this</span>{" "}
                  multiple times across platforms!
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Statistics ("Us in numbers") */}
          <div className="bg-[#27202d] flex-none h-[473px] overflow-hidden relative w-[311px] will-change-[var(--framer-will-change-override,transform)] rounded-[15px]">
            <>
            <div className="aspect-square bg-[#4c1c5d] blur-[50px] flex-none h-[var(--framer-aspect-ratio-supported,170px)] absolute w-[170px] rounded-[100%] left-[179px] top-[351px]"></div>
             <div className="aspect-square bg-[#4c1c5d] blur-[50px] flex-none h-[var(--framer-aspect-ratio-supported,170px)] left-[-69px] absolute top-[-49px] w-[170px] rounded-[100%]"></div>
              <div className=" p-5">

                <div className="">
                  <p className="text-white">
                    <span className="text-gray-400">Us in </span>numbers
                  </p>
                </div>
                <div className="mt-4">
                  {/* Statistic 1: Views */}
                  <div className="mb-4">
                    <div className="flex flex-col">
                      <div>👁️</div> {/* Placeholder for an eye icon */}
                      <p className="text-pink-500 text-[32px] font-bold">
                        100+ MILLION
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-[14px]">
                        Views per month across <br /> channels
                      </p>
                    </div>
                  </div>

                  {/* Statistic 2: Subscribers */}
                  <div className="mb-4">
                    <div className="flex flex-col">
                      <div>📈</div> {/* Placeholder for a subscribers icon */}
                      <p className="text-pink-500 text-[32px] font-bold">
                        180,000
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-[14px]">
                        Subscribers added per month <br /> across channels
                      </p>
                    </div>
                  </div>

                  {/* Statistic 3: Followers */}
                  <div>
                    <div className="flex flex-col">
                      <div>👥</div> {/* Placeholder for a followers icon */}
                      <p className="text-pink-500 text-[32px] font-bold">
                        6,900,000
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-[14px]">
                        Followers & Subscribers <br /> across platforms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CustomServiceSection;
