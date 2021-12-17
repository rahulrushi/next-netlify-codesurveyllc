import { HiOutlineViewGrid } from 'react-icons/hi';
import Link from 'next/link';
import { useWidth } from '../hooks/useWidth';

const Header = () => {
  const { width } = useWidth();
  const breakpoint = 768;
  return (
    <div className="w-full ">
      {width <= breakpoint ? (
        <div className=" w-full flex justify-between items-center py-4 px-8 bg-white  fixed z-50 bottom-0  ">
          <Link href="/">
            <img src="/img/code_survey_llc.png" className=" h-12 " />
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
                <Link href="/gis">
                  <li className="w-10 h-10 ">
                    <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-earth-weather-justicon-flat-justicon.png" />
                    <p>GIS</p>
                  </li>
                </Link>
                <Link href="/lidar">
                  <li className="w-10 h-10">
                    <img src="https://img.icons8.com/color/48/000000/light.png" />
                    <p>LiDAR</p>
                  </li>
                </Link>
                <Link href="/photogrammetry">
                  <li className="w-10 h-10">
                    <img src="https://img.icons8.com/color/48/000000/waypoint-map.png" />
                    Photo
                  </li>
                </Link>
                <Link href="/cad">
                  <li className="w-10 h-10">
                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-cad-engineering-drawing-article-layout-with-graphical-interface-wireframe-shadow-tal-revivo.png" />
                    <p>CAD</p>
                  </li>
                </Link>
                <Link href="/web_service">
                  <li className="w-10 h-10">
                    <img src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-www-computer-technology-itim2101-flat-itim2101.png" />
                    WEB
                  </li>
                </Link>
                <Link href="/about">
                  <li className="w-10 h-10">
                    <img src="https://img.icons8.com/fluency/48/000000/add-contact-to-company.png" />
                    <p>About Us</p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between items-center py-4 px-10 bg-white fixed z-50 top-0  ">
          <Link href="/">
            <img src="/img/code_survey_llc.png" className=" h-12 " />
          </Link>
          <div>
            <ul className="flex gap-6 w-full h-auto text-center text-lg font-medium ">
              <Link href="/">
                <li className=" cursor-pointer hover:text-blue-500 ">
                  <p>Home</p>
                </li>
              </Link>
              <Link href="/gis">
                <li className="  cursor-pointer hover:text-blue-500  ">
                  <p>GIS</p>
                </li>
              </Link>
              <Link href="/lidar">
                <li className=" cursor-pointer hover:text-blue-500 ">
                  <p>LiDAR</p>
                </li>
              </Link>
              <Link href="/photogrammetry">
                <li className=" cursor-pointer hover:text-blue-500 ">Photo</li>
              </Link>
              <Link href="/cad">
                <li className=" cursor-pointer hover:text-blue-500 ">
                  <p>CAD</p>
                </li>
              </Link>
              <Link href="/web_service">
                <li className=" cursor-pointer hover:text-blue-500 ">WEB</li>
              </Link>
              <Link href="/about">
                <li className=" cursor-pointer hover:text-blue-500 ">
                  <p>About Us</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
