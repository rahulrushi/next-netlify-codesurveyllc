import '../styles/globals.css';
import 'swiper/css/bundle';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100  text-black ">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
