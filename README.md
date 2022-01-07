# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Also included are unit tests for each part of the code. Once data is entered in prompts an HTML and style sheet are generated in the dist folder.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Sample](#sample)
* [Programs](#programs)
* [License](#license)
* [Tests](#tests)

## Installation
To install dependencies, run:
```
npm install
```

## How to
To use the app run:
```
node index
```
Then answer the questions in the command line. Once completed an HTML and CSS will be generated in the dist file.

A short [video](https://watch.screencastify.com/v/6b0s3M0OP9VHmn9IHNyF) to demonstrate usage.

## Sample
Here is a [sample generated HTML file](https://github.com/jcmoser5/moserteamprofilegenchallenge/blob/main/src/sample.html)

## Programs
Uses [Inquirer](https://www.npmjs.com/package/inquirer#documentation).
Testing by [Jest](https://jestjs.io/docs/en/getting-started).

## License
Team Profile Generator is licensed under the MIT License.

## Tests
To run tests, run:
```
npm test
```