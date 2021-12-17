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
const WebServices = () => {
  return (
    <div className="container">
      <div className="md:hidden block">
        <div className="w-full bg-white flex h-14 rounded-b-xl justify-between px-6 items-center fixed z-50 top-0">
          <h1 className="text-xl">WEB</h1>
          <span className="w-10 h-10">
            <Image width="100" height="100" src="/icons/web.png" />
          </span>
        </div>
      </div>
      <MediaContextProvider>
        <Media at="sm">
          {' '}
          <div className="w-screen flex flex-col justify-center items-center">
            <div className="mt-24 px-4 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-0 ">
              <div
                className="rounded-2xl overflow-y-scroll scrollbar-w-1.5 scrollbar-track-gray-100 scrollbar-thumb-rounded scrollbar-thumb-gray-300 bg-cover shadow-lg"
                style={{
                  backgroundImage: `url('/img/web.jfif')`,

                  width: '100%',
                  height: '500px',
                  display: 'block',
                  objectFit: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="mt-[370px]">
                  <div className="bg-white p-4 sm:p-8 rounded-t-2xl flex flex-col items-center  ">
                    <div className="font-inter font-extrabold text-2xl text-black tracking-tight">WEB Services</div>

                    <p className="first-letter:text-4xl first-letter:font-bold  text-justify indent-14 mt-4 leading-7 text-gray-500">
                      Code Survey LLC Web Design team creates strong internet marketing campaigns and effective web
                      presences for small to medium size businesses. We specialize in designing powerful branding and
                      developing W3C standards compliant websites that are compatible with the latest devices. A group
                      of professional web designers and developers, we are dedicated to creating powerful, effective and
                      engaging websites. Our bold design style and use of ultra-clean, standards-based markup code
                      combine to produce websites that boast exceptional search engine result positions, increased
                      conversions and superior visitor loyalty.
                    </p>
                    <br />
                    <h1 className="text-xl font-semibold text-gray-600">Following services are offered:</h1>
                    <ul className=" list-disc ml-4 mt-6 text-xl font-semibold text-gray-600">
                      <li>UAV - Unmanned aerial vehicle</li>
                      <li>Ortho</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Media>

        <Media greaterThan="sm">
          {' '}
          <div class="w-screen  mt-40 mb-44 h-full  mx-auto   overflow-hidden flex justify-center items-center ">
            <div class="md:flex 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-0 h-[700px] bg-white rounded-xl shadow-md">
              <div class="  md:w-2/5 w-full">
                <img class="h-full w-full object-cover rounded-2xl " src="/img/web.jfif" alt="Contact" />
              </div>
              <div class="p-8  md:w-3/5 w-full h-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold"> WEB Services</h1>
                <br />
                <p className="first-letter:text-4xl first-letter:font-bold  text-justify indent-14 mt-4 leading-7 text-gray-500">
                  Code Survey LLC Web Design team creates strong internet marketing campaigns and effective web
                  presences for small to medium size businesses. We specialize in designing powerful branding and
                  developing W3C standards compliant websites that are compatible with the latest devices. A group of
                  professional web designers and developers, we are dedicated to creating powerful, effective and
                  engaging websites. Our bold design style and use of ultra-clean, standards-based markup code combine
                  to produce websites that boast exceptional search engine result positions, increased conversions and
                  superior visitor loyalty.
                </p>
                <br />
                <h1 className="text-xl font-semibold text-gray-600">Following services are offered:</h1>
                <ul className=" list-disc ml-4 mt-6 text-xl font-semibold text-gray-600">
                  <li>UAV - Unmanned aerial vehicle</li>
                  <li>Ortho</li>
                </ul>
              </div>
            </div>
          </div>
        </Media>
      </MediaContextProvider>
    </div>
  );
};

export default WebServices;
