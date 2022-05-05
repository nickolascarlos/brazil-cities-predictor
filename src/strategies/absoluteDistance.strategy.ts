import { AbsoluteRatedCity } from "../interfaces/absoluteRatedCity.interface";
import { ProcessedCity } from "../interfaces/processedCity.interface";
import { absoluteRate } from "../raters/absoluteDistance.rater";

export function absoluteDistance(query: string, cities: Array<ProcessedCity>): Array<AbsoluteRatedCity> {
    const absoluteRatedCities: Array<AbsoluteRatedCity> = absoluteRate(query, cities);
    
    const sortedCities: Array<AbsoluteRatedCity> = absoluteRatedCities.sort((a: AbsoluteRatedCity, b: AbsoluteRatedCity) => {
        return a.distance! > b.distance! ? 1 : -1;
    })

    return sortedCities;
}