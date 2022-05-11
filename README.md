# brazil-cities-predictor

A typo-tolerant predictor for Brazil's cities

[![NPM version](https://badge.fury.io/js/brazil-cities-predictor.svg)](https://npmjs.org/package/brazil-cities-predictor)
[![Mantainer](https://img.shields.io/badge/maintainer-@nickolascarlos-orange)](https://github.com/nickolascarlos)
[![Issues](https://img.shields.io/bitbucket/issues/nickolascarlos/brazil-cities-predictor)](https://github.com/nickolascarlos/brazil-cities-predictor/issues)
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
[![Downloads](https://img.shields.io/npm/dm/brazil-cities-predictor)](https://npmjs.org/package/brazil-cities-predictor)

## Index

- [Installation](#installation)
- [Usage](#usage)
- [Strategies](#strategies)
  - [absoluteDistance](#absolutedistance) 
  - [relativeDistance](#relativedistance)
  - [Determining Which Strategy to Use](#how-to-determine-which-strategy-to-use)
- [License](#license)

## Installation

```bash
$ npm install brazil-cities-predictor
```

## Usage
Using brazil-cities-predictor is as simple as that:

```js
import BrazilCitiesPredictor from 'brazil-cities-predictor'

const predictor = new BrazilCitiesPredictor()

predictor.predict('pontalna')
```

The code above returns an array of the 5 best-rated Brazil's cities according to the query, in this case 'pontalna', and the selected strategy, which, by default, is relativeDistance (worry not, it'll be better discussed later).

E.g.:

```ts
 [
  {
    city: {
      id: '5217708',
      name: 'Pontalina',
      state: 'GO',
      processedName: 'pontalina'
    },
    distance: 1,
    relativeDistance: 0.8888888888888888
  },
  {
    city: {
      id: '3540259',
      name: 'Pontalinda',
      state: 'SP',
      processedName: 'pontalinda'
    },
    distance: 2,
    relativeDistance: 0.8
  },
 // [...]
]
```
If you feel like five cities is not enough (or it's too many), you can change it by passing, as the second parameter, the number of cities you want the predict function to return, like this:

```ts
predictor.predict('pontalna', 10)
```

## Strategies

Here, strategies are different manners to calculate a city's name fitness based on the query. There are plenty ways of calculating that, but for now this library offers two, both based on Levenshtein Distance, about which you can read more here: [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance).

### absoluteDistance

This strategy rates the cities purely by the Levenshtein Distance between its name and the query. So, using the same example used above, Pontalina is rated 1 in relation to the query 'pontalna', as they are at least 1 edit apart of each other.

In this strategy, the bigger the distance the smaller the similarity; so the cities are sorted such that those with smaller distance come first.

### relativeDistance

This strategy is an attempt to improve the absoluteDistance strategy. In this one, the cities are rated by the ratio between the Levenshtein Distance and the total characters, resulting in a rating between 0-1 (inclusive).

For my purpose, this strategy performed slightly better than the absoluteDistance, thus I defined it as the default, but you're free to use any.

### How to determine which strategy to use?

You can set the strategy as follows:

```ts
import BrazilCitiesPredictor, { strategies } from 'brazil-cities-predictor'

// You can set it on instantiation
const predictor = new BrazilCitiesPredictor(strategies.absoluteDistance)

// Or after instantiation
predictor.setStrategy(strategies.relativeDistance)
```

## License
Licensed under [The Unlicense](LICENSE)