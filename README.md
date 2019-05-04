# Really Simple (and quite inefficient) Relational Algebra parser and SQL converter

Very simple Relational Algebra to SQL converter. 

Designed for educational purposes, it doesn't try to make any optimizations on the generated SQL sentences.

## Usage

ra-to-sql can be installed as a Node.js package or as a JavaScript library (see [Installation section](#installation) for more detailed information). The ra-to-sql.js library can be downloaded from [here](dist/ra-to-sql.js), or used from a CDN https://unpkg.com/ra-to-sql. 

As a JavaScript library:
```javascript
var sql = raToSql.getSQL(<<ra-expression>>);
```

As a Node.js app:
```javascript
var raToSql = require('ra-to-sql');
var sql = raToSql.getSQL(<<ra-expression>>);
```

Where ``<<ra-expression>>`` is any valid Relational Algebra expression.

Currently, the following operations are supported

* Rename:
  ``Ren[a,b](A)``,
  ``ρ[a,b](A)``
* Projection:
  ``Proj[a,b](A)``,
  ``π[a,b](A)``
* Selection:
  ``Sel[Condition](A)``,
  ``σ[Condition](A)``
* Cartesian product:
  ``A x B``,
  ``A × B``
* Natural Join
  ``A |x| B``,
  ``A ⋈ B``
* Union:
  ``A U B``,
  ``A ∪ B``
* Intersection:
  ``A INT B``, 
  ``A ∩ B``
* Set Difference:
  ``A - B``
* Asignment: 
  ``A <- B``
* Asignment with Rename:
  ``A(a,b) <- B``

The structure of the language is quite simple, here are a few rules:
* Operations can be nested
* There are two types of sentences:
  * Assignments
  * Result (any sentence without an assignment)
* Parser ends evaluating when a "Result" sentence is found. If no Result sentence is found, the last assignment is considered the Result sentence
* Semicolon (``;``) and ``New Line`` are both valid as sentence separator

The following are examples of valid set of sentences:

```
A(a,b) <- Proj[PersonId,PersonName](Person)
A x A x A
```

```
OldPeople <- Sel(Age>80)(Person); Person |X| City;
```

```
Sel[Number > 14 AND !(Number = 15 OR Number = 18)](Numbers)
```

You can try it online [here](https://unpkg.com/ra-to-sql/dist/index.html).

> Note: The SQL generated is compatible with SQL Server and sqlite. 

## Installation

### CDN

```html
<script src="https://unpkg.com/ra-to-sql@<version>/dist/ra-to-sql.js"></script>
```

Replace ``<version>`` with expected version number. For example ``https://unpkg.com/ra-to-sql@0.0.2/dist/ra-to-sql.js``

### Node.js

```
npm install ra-to-sql
```

## For contrinutors

### Pre-requisites
* Node.js

### Setup

Fork/Clone the repository (https://github.com/jrebagliatti/ra-to-sql)

Install the dependencies:

```
nmp install
```

### Update the code
The following are the main components of the library:
* [src/grammar/ra.jison](src/grammar/ra.jison) contains the definition of the grammar (tokens and BNF) in [Jison format](https://github.com/zaach/jison)
* [src/sql_scope.js](src/sql_scope.js) contains the transformations for converting to SQL
* [src/ra-to-sql.js](src/ra-to-sql.js) is the entry point of the library 

Additionally, the following files are generated as part of the building process:
* [src/ra.js](src/ra.js): Is the RA parser, which is built automatically using the [Jison parser generator](https://github.com/zaach/jison). Run ```npm run jison``` to generate it.
* [dist/ra-to-sql.js](dist/ra-to-sql.js): Is the JavaScript library, which is bundled using the [Webpack bundler](https://github.com/webpack/webpack). Run ```npm run build``` to generate it.

## Running the tests

Tests are defined in the ``test/test-definitions`` folder. Each Json file included in that folder becomes a test. File structure is self-explanatory. 

Use the following command to run the tests:

```
npm test
```

## Built With

* [Jison](https://github.com/zaach/jison) - Parser generator
* [Webpack](https://github.com/webpack/webpack) - Web module bundler
* [sqlite3](https://github.com/mapbox/node-sqlite3) - Used to test generated SQL
* [mocha](https://mochajs.org/) - Test framework
* [csv-parser](https://csv.js.org/parse/) - CSV Parser

## Contributing

Any contribution is welcomed!. There are no guidelines for contributing, except for the common-sense.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jrebagliatti/ra-to-sql/tags). 

## Authors

* **Javier Rebagliatti** (Database Systems teaching assistant at [Universidad de La Matanza](https://www.unlam.edu.ar/)) - *Initial work* - [jrebagliatti](https://github.com/jrebagliatti)

See also the list of [contributors](https://github.com/jrebagliatti/ra-to-sql/contributors) who participated in this project.

## License

This project is licensed under the MIT License.
