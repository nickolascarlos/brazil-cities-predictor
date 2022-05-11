import BrazilCitiesPredictor from './predictor';
import * as strategies from './strategies';
import { AbsoluteRatedCity } from './interfaces/absoluteRatedCity.interface';
import { RelativeRatedCity } from './interfaces/relativeRatedCity.interface';
import { City } from './interfaces/city.interface';
import { ProcessedCity } from './interfaces/processedCity.interface';

export { strategies, AbsoluteRatedCity, RelativeRatedCity, City, ProcessedCity};
export default BrazilCitiesPredictor;