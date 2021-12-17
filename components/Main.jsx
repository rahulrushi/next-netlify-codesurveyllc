import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

import { FcHome } from 'react-icons/fc';
// media query
import { createMedia } from '@artsy/fresnel';

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
const Main = () => {
  return (
    <>
      <MediaContextProvider>
        <div className="m-0 w-full bg-slate-50 flex h-14 rounded-b-xl justify-between px-6 items-center fixed z-50 top-0 md:hidden">
          <h1 className="text-xl">Home</h1>
          <FcHome className="text-3xl" />
        </div>
        <Media at="sm">
          <div className="container ">
            <div className="flex flex-col items-center w-full h-auto bg-gray-100  ">
              <div className="mt-20  mb-40 flex flex-col gap-4 items-center w-80 h-96 py-4 rounded-xl ">
                <h1 className="text-3xl font-bold text-slate-900">Engaging line</h1>
                <p className="text-xl font-medium text-slate-800">
                  Code Survey team makes complete effort to be your base line for GIS, Photogrammetry, LiDAR, CAD Web
                  experts - Code Survey.
                </p>
                <div className="w-96  h-auto  rounded-xl ">
                  <Image width={500} height={500} layout="responsive" priority src="/img/mainimg.png" alt="" />
                </div>
              </div>
              <div className="w-80 h-96 mt-8 rounded-xl">
                <Swiper
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={true}
                  className="mySlider"
                >
                  <SwiperSlide>
                    <div className="w-full h-full relative ">
                      <h1 className="absolute text-2xl font-semibold text-slate-50 bottom-3 left-3 z-50">GIS</h1>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/scroll/gis.jpg"
                        alt=""
                        className="rounded-2xl w-full h-full"
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-full h-full relative ">
                      <h1 className="absolute text-2xl font-semibold text-slate-50 bottom-3 left-3 z-50">LiDAR</h1>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/scroll/lidar.jpeg"
                        alt=""
                        className="rounded-2xl w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-full relative ">
                      <h1 className="absolute text-2xl z-50 font-semibold text-slate-50 bottom-3 left-3">
                        Photo Grammetry
                      </h1>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/scroll/photo.jpg"
                        alt=""
                        className="rounded-2xl w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-full relative ">
                      <h1 className="absolute text-2xl z-50 font-semibold text-slate-50 bottom-3 left-3">CAD</h1>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/scroll/cad.jpg"
                        alt=""
                        className="rounded-2xl w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-full relative ">
                      <h1 className="absolute text-2xl z-50 font-semibold text-slate-50 bottom-3 left-3">
                        WEB Services
                      </h1>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/scroll/web.jpg"
                        alt=""
                        className="rounded-2xl w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className=" w-80 h-auto mt-8 mb-24 rounded-xl bg-slate-50 shadow-xl ">
                <Swiper
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={true}
                  className="mySlider"
                >
                  <SwiperSlide>
                    <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                      <h1 className="text-3xl font-semibold">Step One</h1>
                      <Image width="150%" height="150%" src="/img/agreement.svg" alt="" className="w-40 " />
                      <p className="text-gray-900 font-medium text-xl w-80 ">
                        Project discussions and confirmation by mutually agreeing on highlevel requirements and
                        tentative delivery timeline with highest quality.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                      <h1 className="text-3xl font-semibold">Step Two</h1>
                      <Image width="150%" height="150%" src="/img/select.svg" alt="" className="w-40 " />
                      <p className="text-gray-900 font-medium text-xl w-80">
                        Work with the client and review the detailed project requirements. Multiple rounds of
                        communication may be needed during this phase w.th respective to the project inputs or for any
                        additional inputs/requirements/clarifications.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                      <h1 className="text-3xl font-semibold">Step Three</h1>
                      <Image width="150%" height="150%" src="/img/work.svg" alt="" className="w-40 " />
                      <p className="text-gray-900 font-medium text-xl w-80">
                        Arranging and Processing the project as per the requirments.Arranging and Processing the project
                        as per the requirments.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                      <h1 className="text-3xl font-semibold">Step Four</h1>
                      <Image width="150%" height="150%" src="/img/delivery.svg" alt="" className="w-40 " />
                      <p className="text-gray-900 font-medium text-xl w-80">
                        Deliver the best quality project data tot he client after performing the QA and QC process.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </Media>

        <Media greaterThan="sm">
          <div className="container mx-auto">
            <div className="flex flex-col items-center w-full h-auto bg-gray-100  ">
              <div className="mt-14 mb-10 flex  gap-6 justify-around items-center w-full h-[800px] py-4 rounded-xl ">
                <div className="w-auto flex flex-col gap-6">
                  <h1 className="text-5xl font-bold text-[#113E6F]">Engaging line</h1>
                  <p className="text-2xl font-medium text-[#225a96] w-[600px]">
                    Code Survey team makes complete effort to be your base line for GIS, Photogrammetry, LiDAR, CAD Web
                    experts - Code Survey.
                  </p>
                </div>

                <div className=" w-[600px] h-[400px] mt-8">
                  <Swiper
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={true}
                    className="mySlider"
                  >
                    <SwiperSlide>
                      <div className="w-full h-full relative ">
                        <h1 className="absolute text-2xl z-50 font-semibold text-slate-50 bottom-3 left-3">GIS</h1>
                        <Image
                          layout="fill"
                          objectFit="cover"
                          src="/scroll/gis.jpg"
                          alt=""
                          className="rounded-2xl w-full h-full block object-cover"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="w-full h-full relative ">
                        <h1 className="absolute text-2xl z-50 font-semibold text-slate-50 bottom-3 left-3">LiDAR</h1>
                        <Image
                          layout="fill"
                          objectFit="cover"
                          src="/scroll/lidar.jpeg"
                          alt=""
                          className="rounded-2xl w-full h-full block object-cover"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full h-full relative ">
                        <h1 className="absolute text-2xl z-50 font-semibold text-slate-50 bottom-3 left-3">
                          Photo Grammetry
                        </h1>
                        <Image
                          layout="fill"
                          objectFit="cover"
                          src="/scroll/photo.jpg"
                          alt=""
                          className="rounded-2xl w-full h-full"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full h-full relative ">
                        <h1 className="absolute text-2xl z-50 font-semibold text-slate-50 bottom-3 left-3">CAD</h1>
                        <Image
                          layout="fill"
                          objectFit="cover"
                          src="/scroll/cad.jpg"
                          alt=""
                          className="rounded-2xl w-full h-full"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full h-full relative ">
                        <h1 className="absolute text-2xl z-50 font-semibold text-slate-50 bottom-3 left-3">
                          WEB Services
                        </h1>
                        <Image
                          layout="fill"
                          objectFit="cover"
                          src="/scroll/web.jpg"
                          alt=""
                          className="rounded-2xl w-full h-full"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className=" w-[1000px] h-auto mt-8 mb-24 rounded-xl bg-slate-50 shadow-xl">
                <Swiper
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={2}
                  spaceBetween={30}
                  pagination={true}
                  className="mySlider"
                >
                  <SwiperSlide>
                    <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                      <h1 className="text-3xl font-semibold">Step One</h1>
                      <Image width="150%" height="150%" src="/img/agreement.svg" alt="" className="w-40 " />
                      <p className="text-gray-900 font-medium text-xl w-80 ">
                        Project discussions and confirmation by mutually agreeing on highlevel requirements and
                        tentative delivery timeline with highest quality.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                      <h1 className="text-3xl font-semibold">Step Two</h1>
                      <Image width="150%" height="150%" src="/img/select.svg" alt="" className="w-40 " />
                      <p className="text-gray-900 font-medium text-xl w-80">
                        Work with the client and review the detailed project requirements. Multiple rounds of
                        communication may be needed during this phase w.th respective to the project inputs or for any
                        additional inputs/requirements/clarifications.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                      <h1 className="text-3xl font-semibold">Step Three</h1>
                      <Image width="150%" height="150%" src="/img/work.svg" alt="" className="w-60 " />
                      <p className="text-gray-900 font-medium text-xl w-80">
                        Arranging and Processing the project as per the requirments.Arranging and Processing the project
                        as per the requirments.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                      <h1 className="text-3xl font-semibold">Step Four</h1>
                      <Image width="150%" height="150%" src="/img/delivery.svg" alt="" className="w-60 " />
                      <p className="text-gray-900 font-medium text-xl w-80">
                        Deliver the best quality project data tot he client after performing the QA and QC process.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </Media>
      </MediaContextProvider>
    </>
  );
};

export default Main;
