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

const test = () => {
  return (
    <MediaContextProvider>
      <Media at="sm">mobile App</Media>

      <Media greaterThan="sm">Desktop App</Media>
    </MediaContextProvider>
  );
};

export default test;
