import Header from '../components/Header';
import Head from 'next/head';
import About from '../components/About';
import { useWidth } from '../hooks/width';

const about = () => {
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
            <About />
            <Header />
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full h-screen">
            <Header />
            <About />
          </div>
        </div>
      )}
    </div>
  );
};

export default about;
