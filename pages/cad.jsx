import Header from '../components/Header';
import Cad from '../components/Cad';
import Head from 'next/head';
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

const cad = () => {
  return (
    <div>
      <Head>
        <title>CodeSurveyLLC - Home</title>
        <link rel="icon" href="/img/code_survey_favi.png" />
      </Head>
      <MediaContextProvider>
        <Media at="sm">
          <div className="w-full h-screen flex flex-col justify-between items-center">
            <Cad />
            <Header />
          </div>
        </Media>

        <Media greaterThan="sm">
          <div className="w-full h-screen">
            <Header />
            <Cad />
          </div>
        </Media>
      </MediaContextProvider>
    </div>
  );
};

export default cad;
