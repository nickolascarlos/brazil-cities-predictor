import levenshtein from 'js-levenshtein';

import { AbsoluteRatedCity } from "../interfaces/absoluteRatedCity.interface";
import { ProcessedCity } from "../interfaces/processedCity.interface";

/*
 * Rates each city according to the leveshtein
 * distance between the query (in lowercase) and
 * its processedName.
 */
export function absoluteRate(query: string, cities: Array<ProcessedCity>) {
    return cities.map((city: ProcessedCity): AbsoluteRatedCity => ({
        city,
        distance: levenshtein(query.toLowerCase(), city.processedName)
    }))
}