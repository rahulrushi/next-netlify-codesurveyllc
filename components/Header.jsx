import { HiOutlineViewGrid } from 'react-icons/hi';
import Link from 'next/link';
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
const Header = () => {
  return (
    <div className="w-full ">
      <MediaContextProvider>
        <Media at="sm">
          <div className=" w-full flex justify-between items-center py-4 px-8 bg-white  fixed z-50 bottom-0  ">
            <Link href="/" passHref>
              <Image width="100" height="40" src="/img/code_survey_llc.png" className=" h-12 " />
            </Link>

            <div className="dropdown dropdown-top dropdown-end bg-white rounded-t-xl">
              <div tabIndex="0" className="">
                <button className="outline-none focus:text-gray-500 m-1 rounded-xl">
                  <HiOutlineViewGrid className="w-7 h-7" />
                </button>
              </div>
              <div
                tabIndex="0"
                className="p-2 shadow-xl bg-white dropdown-content  rounded-box w-80 mb-4 flex justify-center items-center"
              >
                <ul className="grid grid-cols-3 gap-4 place-items-center w-full h-60 text-center mb-8">
                  <Link href="/gis" passHref>
                    <li className="w-10 h-10 ">
                      <Image width="100" height="100" src="/icons/gis.png" alt="gisicon" />
                      <p>GIS</p>
                    </li>
                  </Link>
                  <Link href="/lidar" passHref>
                    <li className="w-10 h-10">
                      <Image width="100" height="100" src="/icons/light.png" alt="lidaricon" />
                      <p>LiDAR</p>
                    </li>
                  </Link>
                  <Link href="/photogrammetry" passHref>
                    <li className="w-10 h-10">
                      <Image width="100" height="100" src="/icons/phot.png" alt="photoicon" />
                      Photo
                    </li>
                  </Link>
                  <Link href="/cad" passHref>
                    <li className="w-10 h-10">
                      <Image width="100" height="100" src="/icons/cad.png" alt="cadicon" />
                      <p>CAD</p>
                    </li>
                  </Link>
                  <Link href="/web_service" passHref>
                    <li className="w-10 h-10">
                      <Image width="100" height="100" src="/icons/web.png" alt="webicon" />
                      WEB
                    </li>
                  </Link>
                  <Link href="/about" passHref>
                    <li className="w-10 h-10">
                      <Image width="100" height="100" src="/icons/contact.png" alt="abouticon" />
                      <p>About Us</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </Media>

        <Media greaterThan="sm">
          <div className="w-full flex justify-between items-center py-4 px-10 bg-white fixed z-50 top-0  ">
            <Link href="/" passHref>
              <Image width="150" height="50" src="/img/code_survey_llc.png" className=" h-12 " />
            </Link>
            <div>
              <ul className="flex gap-6 w-full h-auto text-center text-lg font-medium ">
                <Link href="/" passHref>
                  <li className=" cursor-pointer hover:text-blue-500 ">
                    <p>Home</p>
                  </li>
                </Link>
                <Link href="/gis" passHref>
                  <li className="  cursor-pointer hover:text-blue-500  ">
                    <p>GIS</p>
                  </li>
                </Link>
                <Link href="/lidar" passHref>
                  <li className=" cursor-pointer hover:text-blue-500 ">
                    <p>LiDAR</p>
                  </li>
                </Link>
                <Link href="/photogrammetry" passHref>
                  <li className=" cursor-pointer hover:text-blue-500 ">Photo</li>
                </Link>
                <Link href="/cad" passHref>
                  <li className=" cursor-pointer hover:text-blue-500 ">
                    <p>CAD</p>
                  </li>
                </Link>
                <Link href="/web_service" passHref>
                  <li className=" cursor-pointer hover:text-blue-500 ">WEB</li>
                </Link>
                <Link href="/about" passHref>
                  <li className=" cursor-pointer hover:text-blue-500 ">
                    <p>About Us</p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Media>
      </MediaContextProvider>
    </div>
  );
};

export default Header;
