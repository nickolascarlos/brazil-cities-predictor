import { AbsoluteRatedCity } from "../interfaces/absoluteRatedCity.interface";
import { ProcessedCity } from "../interfaces/processedCity.interface";
import { RelativeRatedCity } from "../interfaces/relativeRatedCity.interface";
import { absoluteRate } from "../raters/absoluteDistance.rater";
import { relativeRate } from "../raters/relativeDistance.rater";

export function relativeDistance(query: string, cities: Array<ProcessedCity>): Array<RelativeRatedCity> {
    const absoluteRatedCities: Array<AbsoluteRatedCity> = absoluteRate(query, cities);

    const relativeRatedCities: Array<RelativeRatedCity> = relativeRate(absoluteRatedCities);

    const sortedCities: Array<RelativeRatedCity> = relativeRatedCities.sort((a: RelativeRatedCity, b: RelativeRatedCity) => {
        return a.relativeDistance < b.relativeDistance ? 1 : -1;
    })

    return sortedCities;
}