// media query
import { createMedia } from '@artsy/fresnel';
import Image from 'next/image';
const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
const Cad = () => {
  return (
    <div className="container">
      <div className="md:hidden block">
        <div className="w-full bg-white flex h-14 rounded-b-xl justify-between px-6 items-center fixed z-50 top-0">
          <h1 className="text-xl">CAD</h1>
          <span className="w-10 h-10">
            <Image width="100" height="100" src="/icons/cad.png" alt="cadicon" />
          </span>
        </div>
      </div>

      <MediaContextProvider>
        <Media at="sm">
          <div className="w-screen flex flex-col justify-center items-center">
            <div className="mt-24 px-4 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-0  ">
              <div
                className="rounded-2xl overflow-y-scroll scrollbar-w-1.5 scrollbar-track-gray-100 scrollbar-thumb-rounded scrollbar-thumb-gray-300 bg-cover shadow-lg"
                style={{
                  backgroundImage: `url('/img/cad.png')`,

                  width: '100%',
                  height: '500px',
                  display: 'block',
                  objectFit: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="mt-[370px]">
                  <div className="bg-white p-4 sm:p-8 rounded-t-2xl flex flex-col items-center  ">
                    <div className="font-inter font-extrabold text-2xl text-black tracking-tight">
                      Computer-aided design
                    </div>

                    <p className="first-letter:text-4xl first-letter:font-bold  text-justify indent-14 mt-4 leading-7 text-gray-500">
                      Code Survey LLC team specializes in connecting clients and firms with top-quality CAD drafting and
                      design services. Whatever the nature or scope of your project, we&apos;ll connect you with expert
                      drafting talent that will work with you to meet your project goals and timeline. With our global
                      network of CAD drafters, together with efficient business practices and lower overhead costs, Code
                      Survey LLC team is able to offer top-quality drafting services at a much more affordable price
                      point than conventional drafting and design firms.
                    </p>
                    <br />
                    <h1 className="text-xl font-semibold text-gray-600">Following services are offered:</h1>
                    <ul className=" list-disc ml-4 mt-6 text-xl font-semibold text-gray-600">
                      <li>Topographical and relief maps</li>
                      <li>CAD to BIM conversion</li>
                      <li>Design development</li>
                      <li>Construction documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Media>

        <Media greaterThan="sm">
          <div className="w-screen  mt-40 mb-44 h-full  mx-auto   overflow-hidden flex justify-center items-center ">
            <div className="md:flex 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-0 h-[700px] bg-white rounded-xl shadow-md">
              <div className="  md:w-2/5 w-full">
                <Image
                  width="100"
                  height="100"
                  className="h-full w-full object-cover rounded-2xl "
                  src="/img/cad.png"
                  alt="Contact"
                />
              </div>
              <div className="p-8  md:w-3/5 w-full h-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold"> Computer-aided design</h1>
                <br />
                <p className="first-letter:text-4xl first-letter:font-bold  text-justify indent-14  mt-4 leading-7 text-gray-500">
                  Code Survey LLC team specializes in connecting clients and firms with top-quality CAD drafting and
                  design services. Whatever the nature or scope of your project, we&apos;ll connect you with expert
                  drafting talent that will work with you to meet your project goals and timeline. With our global
                  network of CAD drafters, together with efficient business practices and lower overhead costs, Code
                  Survey LLC team is able to offer top-quality drafting services at a much more affordable price point
                  than conventional drafting and design firms.
                </p>
                <br />
                <h1 className="text-xl font-semibold text-gray-600">Following services are offered:</h1>
                <ul className=" list-disc ml-4 mt-6 text-xl font-semibold text-gray-600">
                  <li>Topographical and relief maps</li>
                  <li>CAD to BIM conversion</li>
                  <li>Design development</li>
                  <li>Construction documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </Media>
      </MediaContextProvider>
    </div>
  );
};

export default Cad;
