import Header from '../components/Header';
import Head from 'next/head';
import Photogrammetry from '../components/Photogrammetry';
import { useWidth } from '../hooks/useWidth';

const photogrammetry = () => {
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
            <Photogrammetry />
            <Header />
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full h-screen">
            <Header />
            <Photogrammetry />
          </div>
        </div>
      )}
    </div>
  );
};

export default photogrammetry;
