import { AbsoluteRatedCity } from "../interfaces/absoluteRatedCity.interface";
import { RelativeRatedCity } from "../interfaces/relativeRatedCity.interface";

/*
 * Rates each city according to the ratio between the absolute distance (Levenshtein Distance)
 * and the total. This ratio is named relativeDistance.
 */
export function relativeRate(absoluteRatedCities: Array<AbsoluteRatedCity>) {
    return absoluteRatedCities.map((absoluteRatedCity: AbsoluteRatedCity): RelativeRatedCity => ({
        ...absoluteRatedCity,
        relativeDistance: 
            absoluteRatedCity.distance / absoluteRatedCity.city.name.length
    }))
}