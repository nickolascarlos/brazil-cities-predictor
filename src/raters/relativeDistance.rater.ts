import { AbsoluteRatedCity } from "../interfaces/absoluteRatedCity.interface";
import { RelativeRatedCity } from "../interfaces/relativeRatedCity.interface";

/*
 * Rates each city according to the ratio between the right
 * characters and the total. This ratio is named ralativeDistance.
 */
export function relativeRate(absoluteRatedCities: Array<AbsoluteRatedCity>) {
    return absoluteRatedCities.map((absoluteRatedCity: AbsoluteRatedCity): RelativeRatedCity => ({
        ...absoluteRatedCity,
        relativeDistance: 
            (absoluteRatedCity.city.name.length - absoluteRatedCity.distance) / absoluteRatedCity.city.name.length
    }))
}