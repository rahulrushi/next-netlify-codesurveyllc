import Image from 'next/image';
const About = () => {
  return (
    <div className="container">
      <div className="md:hidden block">
        <div className="w-full bg-white flex h-14 rounded-b-xl justify-between px-6 items-center fixed z-50 top-0">
          <h1 className="text-xl">About Us</h1>
          <span className="w-10 h-10 ">
            <Image width="100" height="100" src="/icons/contact.png" alt="abouticon" />
          </span>
        </div>
      </div>

      <div className="w-screen  mt-24 mx-auto   overflow-hidden flex justify-center items-center ">
        <div className="md:flex 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-0 bg-white rounded-xl shadow-md">
          <div className=" mt-10 md:w-1/3 rounded-2xl p-6 flex justify-center items-center">
            <Image width="500" height="700" className="h-full w-full object-cover " src="/img/about.svg" alt="About" />
          </div>
          <div className="p-8  md:w-2/3 w-full">
            <h1 className="text-4xl font-bold">About Us</h1>
            <br />
            <p className="text-xl font-semibold first-letter:text-4xl first-letter:font-bold  text-justify indent-14 ">
              Code Survey is India’s leading IT based company providing Services to Geospatial and Engineering sector.
              With experienced team of GIS, CAD &amp; web experts, Code Survey has developed a successful track record
              with industry proven and mature focusing on successful project delivery all across the globe. Code Survey
              always employs the best draftsmen, GIS and CAD engineers, Mapping Experts, LiDAR technicians, 3D experts,
              Web Developers. <br /> <br /> Our cost effective quality services it &apos;s going to be a win-win
              situation. Utilizing latest applications and tools, we provide quality Mapping, Data Management, Image
              Processing, CAD Engineering, BIM, LiDAR &amp; 3D Mapping services. We are the premier service provider in
              the areas of GIS, CAD, LiDAR, Photogrammetry &amp; Web services and provide wide range of geospatial
              services across GIS, floor plans, remote sensing, Photogrammetry, LiDAR and CAD engineering, CAD drafting.
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen  mt-10 mb-44  mx-auto   overflow-hidden flex justify-center items-center ">
        <div className=" w-full  md:flex 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-0 bg-white rounded-xl shadow-md">
          <div className=" mt-10 md:w-1/3 rounded-2xl p-6 flex justify-center items-center">
            <Image
              width="500"
              height="700"
              className="h-full w-full object-cover "
              src="/img/Contact.png"
              alt="Contact"
            />
          </div>
          <div className="p-8  md:w-2/3 w-full h-96 mt-10 flex flex-col justify-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <br />
            <p className="text-xl font-semibold">
              Code Survey LLC <br />
              MIG : 90 <br /> KPHB Colony <br /> Hyderabad <br /> Pin Code : 500072 <br /> India Contact :
              +91-9618069572 <br />
              <span>
                Email :
                <a href="mailto:kumar@codesurveyllc.com" className="text-blue-500 ml-1 hover:underline">
                  kumar@codesurveyllc.com
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
