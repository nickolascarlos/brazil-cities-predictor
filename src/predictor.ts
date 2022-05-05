import _ from 'lodash';

import { cities } from "./data/cities.data";
import { City } from "./interfaces/cities.interface";
import { ProcessedCity } from "./interfaces/processedCity.interface";

class BrazilCitiesPredictor {
    private static _instance: BrazilCitiesPredictor | undefined = undefined;
    private _cities!: Array<ProcessedCity>;

    constructor(private strategy: (query: string, cities: Array<ProcessedCity>) => Array<Object>) {
        /* 
         * Singleton: If an instance already exists, returns it;
         * otherwise, creates a new one.
         */
        if (BrazilCitiesPredictor._instance)
            return BrazilCitiesPredictor._instance;

        BrazilCitiesPredictor._instance = this;

        /* 
         * Pre-processes cities list, adding a 'processedName' property,
         * which consists of the city's name in lowercase and without
         * accents.
         */
        this._cities = cities.map((city: City): ProcessedCity => ({
            ...city,
            processedName: _.deburr(city.name.toLowerCase())
        }))
    }

    predict(query: string, quantity: number = 5) {
        /*
         * Rates and sorts each city according to
         * the chosen strategy.
         */
        const ratedAndSortedCities: Array<Object> = this.strategy(query, this._cities);

        return ratedAndSortedCities.splice(0, quantity);
    }

    setStrategy(strategy: (query: string, cities: Array<ProcessedCity>) => Array<Object>) {
        this.strategy = strategy;
    }
}

export default BrazilCitiesPredictor;