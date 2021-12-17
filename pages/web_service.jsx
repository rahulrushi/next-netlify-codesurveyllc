import Header from '../components/Header';
import Head from 'next/head';
import WebServices from '../components/WebServices';
import { useWidth } from '../hooks/useWidth';

const web_service = () => {
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
            <WebServices />
            <Header />
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full h-screen">
            <Header />
            <WebServices />
          </div>
        </div>
      )}
    </div>
  );
};

export default web_service;
