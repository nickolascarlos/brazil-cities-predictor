import { ProcessedCity } from "./processedCity.interface";

export interface RelativeRatedCity {
    city: ProcessedCity,
    distance: number,
    relativeDistance: number
}