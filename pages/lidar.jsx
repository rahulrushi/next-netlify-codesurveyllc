import Header from '../components/Header';
import Head from 'next/head';
import Lidar from '../components/Lidar';
import { useWidth } from '../hooks/width';
const lidar = () => {
  const { height, width } = useWidth();

  const breakpoint = 768;
  return (
    <div>
      <Head>
        <title>CodeSurveyLLC - Home</title>
        <link rel="icon" href="/img/code_survey_favi.png" />
      </Head>
      {width <= breakpoint ? (
        <div>
          <div className="w-full h-screen flex flex-col justify-between items-center">
            <Lidar />
            <Header />
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full h-screen">
            <Header />
            <Lidar />
          </div>
        </div>
      )}
    </div>
  );
};

export default lidar;
