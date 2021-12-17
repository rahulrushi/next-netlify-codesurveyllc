import { useWidth } from '../hooks/useWidth';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import { FcHome } from 'react-icons/fc';

// install Swiper modules
SwiperCore.use([Pagination]);

const Main = () => {
  const { height, width } = useWidth();
  const breakpoint = 768;

  return (
    <>
      {width <= breakpoint ? (
        <div className="container">
          <div className="w-full bg-slate-50 flex h-14 rounded-b-xl justify-between px-6 items-center fixed z-50 top-0">
            <h1 className="text-xl">Home</h1>
            <FcHome className="text-3xl" />
          </div>
          <div className="flex flex-col items-center w-full h-auto bg-gray-100  ">
            <div className="mt-14 mb-10 flex flex-col gap-6 items-center w-80 h-96 py-4 rounded-xl ">
              <h1 className="text-3xl font-bold text-slate-900">Engaging line</h1>
              <p className="text-xl font-medium text-slate-800">
                Code Survey team makes complete effort to be your base line for GIS, Photogrammetry, LiDAR, CAD Web
                experts - Code Survey.
              </p>

              <img src="/img/mainimg.png" alt="" className=" w-full h-full scale-125 " />
            </div>
            <div className="w-80 h-96 mt-8 rounded-xl">
              <Swiper pagination={true} className="mySlider">
                <SwiperSlide>
                  <div className="w-full h-full relative ">
                    <h1 className="absolute text-4xl font-semibold text-slate-50 bottom-3 left-3">GIS</h1>
                    <img src="/scroll/gis.jpg" alt="" className="rounded-2xl w-full h-full block object-cover " />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-full relative ">
                    <h1 className="absolute text-4xl font-semibold text-slate-50 bottom-3 left-3">LiDAR</h1>
                    <img src="/scroll/lidar.jpeg" alt="" className="rounded-2xl w-full h-full block object-cover " />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-full relative ">
                    <h1 className="absolute text-4xl font-semibold text-slate-50 bottom-3 left-3">Photo Grammetry</h1>
                    <img src="/scroll/photo.jpg" alt="" className="rounded-2xl w-full h-full block object-cover " />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-full relative ">
                    <h1 className="absolute text-4xl font-semibold text-slate-50 bottom-3 left-3">CAD</h1>
                    <img src="/scroll/cad.jpg" alt="" className="rounded-2xl w-full h-full block object-cover " />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-full relative ">
                    <h1 className="absolute text-4xl font-semibold text-slate-50 bottom-3 left-3">WEB Services</h1>
                    <img src="/scroll/web.jpg" alt="" className="rounded-2xl w-full h-full block object-cover " />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className=" w-80 h-auto mt-8 mb-24 rounded-xl bg-cyan-500 ">
              <Swiper pagination={true} className="mySlider">
                <SwiperSlide>
                  <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                    <h1 className="text-3xl font-semibold">Step One</h1>
                    <img src="/img/agreement.svg" alt="" className="w-40 " />
                    <p className="text-gray-100 font-medium text-xl w-80 ">
                      Project discussions and confirmation by mutually agreeing on highlevel requirements and tentative
                      delivery timeline with highest quality.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                    <h1 className="text-3xl font-semibold">Step Two</h1>
                    <img src="/img/select.svg" alt="" className="w-40 " />
                    <p className="text-gray-100 font-medium text-xl w-80">
                      Project discussions and confirmation by mutually agreeing on highlevel requirements and tentative
                      delivery timeline with highest quality.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                    <h1 className="text-3xl font-semibold">Step Three</h1>
                    <img src="/img/work.svg" alt="" className="w-40 " />
                    <p className="text-gray-100 font-medium text-xl w-80">
                      Arranging and Processing the project as per the requirments.Arranging and Processing the project
                      as per the requirments.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                    <h1 className="text-3xl font-semibold">Step Four</h1>
                    <img src="/img/delivery.svg" alt="" className="w-40 " />
                    <p className="text-gray-100 font-medium text-xl w-80">
                      Deliver the best quality project data tot he client after performing the QA and QC process.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="flex flex-col items-center w-full h-auto bg-gray-100  ">
            <div className="mt-14 mb-10 flex  gap-6 justify-around items-center w-full h-[800px] py-4 rounded-xl ">
              <div className="w-auto flex flex-col gap-6">
                <h1 className="text-6xl font-bold text-slate-900">Engaging line</h1>
                <p className="text-3xl font-medium text-slate-800 w-[600px]">
                  Code Survey team makes complete effort to be your base line for GIS, Photogrammetry, LiDAR, CAD Web
                  experts - Code Survey.
                </p>
              </div>

              <div className=" w-[600px] h-[400px] mt-8">
                <Swiper pagination={true} className="mySlider">
                  <SwiperSlide>
                    <div className="w-full h-full relative ">
                      <h1 className="absolute text-4xl font-semibold text-slate-50 bottom-3 left-3">GIS</h1>
                      <img src="/scroll/gis.jpg" alt="" className="rounded-2xl w-full h-full block object-cover" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="w-full h-full relative ">
                      <h1 className="absolute text-4xl font-semibold text-slate-50 bottom-3 left-3">LiDAR</h1>
                      <img src="/scroll/lidar.jpeg" alt="" className="rounded-2xl w-full h-full block object-cover" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-full relative ">
                      <h1 className="absolute text-4xl font-semibold text-slate-50 bottom-3 left-3">Photo Grammetry</h1>
                      <img src="/scroll/photo.jpg" alt="" className="rounded-2xl w-full h-full block object-cover " />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-full relative ">
                      <h1 className="absolute text-4xl font-semibold text-slate-50 bottom-3 left-3">CAD</h1>
                      <img src="/scroll/cad.jpg" alt="" className="rounded-2xl w-full h-full block object-cover " />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-full relative ">
                      <h1 className="absolute text-4xl font-semibold text-slate-50 bottom-3 left-3">WEB Services</h1>
                      <img src="/scroll/web.jpg" alt="" className="rounded-2xl w-full h-full block object-cover " />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className=" w-[1000px] h-auto mt-8 mb-24 rounded-xl bg-cyan-500 ">
              <Swiper slidesPerView={2} spaceBetween={30} pagination={true} className="mySlider">
                <SwiperSlide>
                  <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                    <h1 className="text-3xl font-semibold">Step One</h1>
                    <img src="/img/agreement.svg" alt="" className="w-40 " />
                    <p className="text-gray-100 font-medium text-xl w-80 ">
                      Project discussions and confirmation by mutually agreeing on highlevel requirements and tentative
                      delivery timeline with highest quality.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                    <h1 className="text-3xl font-semibold">Step Two</h1>
                    <img src="/img/select.svg" alt="" className="w-40 " />
                    <p className="text-gray-100 font-medium text-xl w-80">
                      Project discussions and confirmation by mutually agreeing on highlevel requirements and tentative
                      delivery timeline with highest quality.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                    <h1 className="text-3xl font-semibold">Step Three</h1>
                    <img src="/img/work.svg" alt="" className="w-60 " />
                    <p className="text-gray-100 font-medium text-xl w-80">
                      Arranging and Processing the project as per the requirments.Arranging and Processing the project
                      as per the requirments.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="  rounded-3xl w-full h-full flex flex-col gap-7 justify-around items-center py-10">
                    <h1 className="text-3xl font-semibold">Step Four</h1>
                    <img src="/img/delivery.svg" alt="" className="w-60 " />
                    <p className="text-gray-100 font-medium text-xl w-80">
                      Deliver the best quality project data tot he client after performing the QA and QC process.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
