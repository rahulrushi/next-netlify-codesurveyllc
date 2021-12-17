import Header from '../components/Header';
import Cad from '../components/Cad';
import Head from 'next/head';
import { useWidth } from '../hooks/useWidth';
const cad = () => {
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
            <Cad />
            <Header />
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full h-screen">
            <Header />
            <Cad />
          </div>
        </div>
      )}
    </div>
  );
};

export default cad;
