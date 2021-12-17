import media1 from './gis-technology.jpg';
import media2 from './lidar.jpeg';
import media3 from './photo.jpg';
import media4 from './cad.jpg';
import media5 from './web.jpg';

export const media = [media1, media2, media3, media4, media5];
export const scrollByIndex = (index) => media[index % media.length];
