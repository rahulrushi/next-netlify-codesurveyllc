import Header from '../components/Header';
import Head from 'next/head';
import About from '../components/About';
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

const about = () => {
  return (
    <div>
      <Head>
        <title>CodeSurveyLLC - Home</title>
        <link rel="icon" href="/img/code_survey_favi.png" />
      </Head>
      <MediaContextProvider>
        <Media at="sm">
          <div className="w-full h-screen flex flex-col justify-between items-center">
            <About />
            <Header />
          </div>
        </Media>

        <Media greaterThan="sm">
          D
          <div className="w-full h-screen">
            <Header />
            <About />
          </div>
        </Media>
      </MediaContextProvider>
    </div>
  );
};

export default about;
