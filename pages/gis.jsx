import Header from '../components/Header';
import Head from 'next/head';
import Gis from '../components/Gis';
import { useWidth } from '../hooks/width';

const gis = () => {
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
            <Gis />
            <Header />
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full h-screen">
            <Header />
            <Gis />
          </div>
        </div>
      )}
    </div>
  );
};

export default gis;
