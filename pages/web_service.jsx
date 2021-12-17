import Header from '../components/Header';
import Head from 'next/head';
import WebServices from '../components/WebServices';
// media query
import { createMedia } from '@artsy/fresnel';

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

const web_service = () => {
  return (
    <div>
      <Head>
        <title>CodeSurveyLLC - Home</title>
        <link rel="icon" href="/img/code_survey_favi.png" />
      </Head>
      <MediaContextProvider>
        <Media at="sm">
          <div className="w-full h-screen flex flex-col justify-between items-center">
            <WebServices />
            <Header />
          </div>
        </Media>

        <Media greaterThan="sm">
          <div className="w-full h-screen">
            <Header />
            <WebServices />
          </div>
        </Media>
      </MediaContextProvider>
    </div>
  );
};

export default web_service;
