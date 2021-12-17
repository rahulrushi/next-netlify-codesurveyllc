import { useWidth } from '../hooks/width';
const Gis = () => {
  const { height, width } = useWidth();
  const breakpoint = 768;
  return (
    <div className="container ">
      <div className="md:hidden block">
        <div className="w-full bg-white flex h-14 rounded-b-xl justify-between px-6 items-center fixed z-50 top-0">
          <h1 className="text-xl">GIS</h1>
          <span className="w-10 h-10">
            <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-earth-weather-justicon-flat-justicon.png" />
          </span>
        </div>
      </div>
      {width <= breakpoint ? (
        <div className="my-24 container  flex  flex-wrap justify-center items-center  ">
          <div className="md:mt-24  px-4 ">
            <div
              className="max-w-lg mx-auto h-full rounded-2xl overflow-y-scroll scrollbar-w-1.5 scrollbar-track-gray-100 scrollbar-thumb-rounded scrollbar-thumb-gray-300 bg-cover shadow-lg"
              style={{
                backgroundImage: `url('/img/img3.jpg')`,

                width: '100%',
                height: '500px',
                display: 'block',
                objectFit: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="mt-[370px]">
                <div className="bg-white p-4 sm:p-8 rounded-t-2xl flex flex-col items-center  ">
                  <div className="font-inter font-extrabold text-2xl text-black tracking-tight">Image Processing</div>

                  <p className="mt-4 leading-7 text-gray-500">
                    The processing of imagery into quality raster data products to extract information from it. This
                    includes removing distortions in the images (georectification, Orthorectification) and ensuring that
                    the output is of high quality in terms of clarity, resolution and colour. The processing consists of
                    georeferencing images, Orthorectification, mosaicing, colour balancing, and cutting to specified
                    output formats. Code Survey is able to produce a seamless raster data product from multiple image
                    tiles. handling large volumes of images, automating many of the data management processes in this
                    activity, and is able to pass on the gains in productivity to the client in terms of fast
                    turnaround.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-10 px-4">
            <div
              className="max-w-lg mx-auto h-full rounded-2xl overflow-y-scroll scrollbar-w-1.5 scrollbar-track-gray-100 scrollbar-thumb-rounded scrollbar-thumb-gray-300 bg-cover shadow-lg"
              style={{
                backgroundImage: `url('/img/img2.jpg')`,

                width: '100%',
                height: '500px',
                display: 'block',
                objectFit: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="mt-[370px]">
                <div className="bg-white p-4 sm:p-8 rounded-t-2xl flex flex-col items-center  ">
                  <div className="font-inter font-extrabold text-2xl text-black tracking-tight">Parcel Mapping</div>

                  <p className="mt-4 leading-7 text-gray-500">
                    Updating the boundaries (Parcels) for all Public and Private lands. Parcel maps are typically
                    maintained at a variety of scales,which shows only diagram layouts,legal description documents
                    describing boundary ownership for a given parcel. Parcel maps of an area provide more than a
                    representation of ownership. Legal boundaries for public and private properties. Code Survey
                    conversion products provides location, size, shape, and parcel identification number. This allows
                    for easy identification of where a specific property is located relative to adjacent properties and
                    public roadways. Parcel data is derived from existing maps (scans or hard copies) and legal
                    information by geospatially registering imagery using a heads-up digitizing technique. Parcels also
                    can be collected by employing COGO methods to enter the legal meets and bounds. These parcel mapping
                    processes are used to create a new parcel base map or update an existing base map for AutoCAD or
                    ESRI environments.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-10 px-4">
            <div
              className="max-w-lg mx-auto h-full rounded-2xl overflow-y-scroll scrollbar-w-1.5 scrollbar-track-gray-100 scrollbar-thumb-rounded scrollbar-thumb-gray-300 bg-cover shadow-lg"
              style={{
                backgroundImage: `url('/img/img1.jpg')`,

                width: '100%',
                height: '500px',
                display: 'block',
                objectFit: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="mt-[370px]">
                <div className="bg-white p-4 sm:p-8 rounded-t-2xl flex flex-col items-center  ">
                  <div className="font-inter font-extrabold text-2xl text-black tracking-tight">Geo Referencing</div>

                  <p className="mt-4 leading-7 text-gray-500">
                    Associating the image with the coordinate system or as per photo image requirement of the client. We
                    work on supplied images like historic maps and satellite images on which we can digitize and update
                    the information as per requirement.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-10 px-4">
            <div
              className="max-w-lg mx-auto h-full rounded-2xl overflow-y-scroll scrollbar-w-1.5 scrollbar-track-gray-100 scrollbar-thumb-rounded scrollbar-thumb-gray-300 bg-cover shadow-lg"
              style={{
                backgroundImage: `url('/img/land2.jfif')`,

                width: '100%',
                height: '500px',
                display: 'block',
                objectFit: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="mt-[370px]">
                <div className="bg-white p-4 sm:p-8 rounded-t-2xl flex flex-col items-center  ">
                  <div className="font-inter font-extrabold text-2xl text-black tracking-tight">Land Use Mapping</div>

                  <p className="mt-4 leading-7 text-gray-500">
                    Categories, such as forest, water, Unpaved and paved surfaces. Code Survey uses remotely sensed
                    imagery and derives land resource. It is used in the fields of urban planning, land management, and
                    natural resource conservation. Changes in land use and land cover are regular, rapid, and so can
                    have significant impacts for people, the economy, and the environment. Complete assessment of vacant
                    land for the development activities.
                  </p>
                  <br />
                  <h1 className="text-xl font-semibold">Following services are offered:</h1>

                  <ul className=" list-disc ml-4 mt-6 text-xl font-semibold">
                    <li>Water and drainage</li>
                    <li>Urban development planning</li>
                    <li>Vegetation Coverage</li>
                    <li>Irrigation purpose</li>
                    <li>Recreation spaces</li>
                    <li>Planning of green spaces for various use in the development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-24 w-screen  grid  ">
          <div className="w-screen   h-full  mx-auto   overflow-hidden flex justify-center items-center ">
            <div className="md:flex 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-0 h-[700px] bg-white rounded-xl shadow-md">
              <div className="  md:w-2/5 w-full">
                <img className="h-full w-full object-cover rounded-2xl " src="/img/img3.jpg" alt="Contact" />
              </div>
              <div className="p-8  md:w-3/5 w-full h-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold">Image Processing</h1>
                <br />
                <p className="mt-4 leading-7 text-gray-500">
                  The processing of imagery into quality raster data products to extract information from it. This
                  includes removing distortions in the images (georectification, Orthorectification) and ensuring that
                  the output is of high quality in terms of clarity, resolution and colour. The processing consists of
                  georeferencing images, Orthorectification, mosaicing, colour balancing, and cutting to specified
                  output formats. Code Survey is able to produce a seamless raster data product from multiple image
                  tiles. handling large volumes of images, automating many of the data management processes in this
                  activity, and is able to pass on the gains in productivity to the client in terms of fast turnaround.
                </p>
              </div>
            </div>
          </div>
          <div className="w-screen  mt-10  h-full  mx-auto   overflow-hidden flex justify-center items-center ">
            <div className="md:flex 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-0 h-[700px] bg-white rounded-xl shadow-md">
              <div className="  md:w-2/5 w-full">
                <img className="h-full w-full object-cover rounded-2xl " src="/img/img2.jpg" alt="Contact" />
              </div>
              <div className="p-8  md:w-3/5 w-full h-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold">Parcel Mapping</h1>
                <br />
                <p className="mt-4 leading-7 text-gray-500">
                  Updating the boundaries (Parcels) for all Public and Private lands. Parcel maps are typically
                  maintained at a variety of scales,which shows only diagram layouts,legal description documents
                  describing boundary ownership for a given parcel. Parcel maps of an area provide more than a
                  representation of ownership. Legal boundaries for public and private properties. Code Survey
                  conversion products provides location, size, shape, and parcel identification number. This allows for
                  easy identification of where a specific property is located relative to adjacent properties and public
                  roadways. Parcel data is derived from existing maps (scans or hard copies) and legal information by
                  geospatially registering imagery using a heads-up digitizing technique. Parcels also can be collected
                  by employing COGO methods to enter the legal meets and bounds. These parcel mapping processes are used
                  to create a new parcel base map or update an existing base map for AutoCAD or ESRI environments.
                </p>
              </div>
            </div>
          </div>
          <div className="w-screen  mt-10  h-full  mx-auto   overflow-hidden flex justify-center items-center ">
            <div className="md:flex 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-0 h-[700px] bg-white rounded-xl shadow-md">
              <div className="  md:w-2/5 w-full">
                <img className="h-full w-full object-cover rounded-2xl " src="/img/img1.jpg" alt="Contact" />
              </div>
              <div className="p-8  md:w-3/5 w-full h-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold">Geo Referencing</h1>
                <br />
                <p className="mt-4 leading-7 text-gray-500">
                  Associating the image with the coordinate system or as per photo image requirement of the client. We
                  work on supplied images like historic maps and satellite images on which we can digitize and update
                  the information as per requirement.
                </p>
              </div>
            </div>
          </div>
          <div className="w-screen  mt-10  h-full  mx-auto   overflow-hidden flex justify-center items-center ">
            <div className="md:flex 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-0 h-[700px] bg-white rounded-xl shadow-md">
              <div className="  md:w-2/5 w-full">
                <img className="h-full w-full object-cover rounded-2xl " src="/img/land2.jfif" alt="Contact" />
              </div>
              <div className="p-8  md:w-3/5 w-full h-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold">Land Use Mapping</h1>
                <br />
                <p className="mt-4 leading-7 text-gray-500">
                  Categories, such as forest, water, Unpaved and paved surfaces. Code Survey uses remotely sensed
                  imagery and derives land resource. It is used in the fields of urban planning, land management, and
                  natural resource conservation. Changes in land use and land cover are regular, rapid, and so can have
                  significant impacts for people, the economy, and the environment. Complete assessment of vacant land
                  for the development activities.
                </p>
                <br />
                <h1 className="text-xl font-semibold">Following services are offered:</h1>

                <ul className=" list-disc ml-4 mt-6 text-xl font-semibold">
                  <li>Water and drainage</li>
                  <li>Urban development planning</li>
                  <li>Vegetation Coverage</li>
                  <li>Irrigation purpose</li>
                  <li>Recreation spaces</li>
                  <li>Planning of green spaces for various use in the development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gis;
