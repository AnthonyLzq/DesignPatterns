# Design Patterns

This repo has the goal to provide examples in TypeScript of all the traditional Design Patterns with their respective explanation.

To use this repo, check the `src` folder, there you will find the three main Design Patterns types: behavioral, creational and structural. In each folder you can find their respective patterns. Each folder will contain the following:

1. A pseudo UML diagram of the pattern.
2. A `README.md` file that will explain how the pattern works and what problem does it solve.
3. A `src` folder that will contain the example code of the pattern.

Besides, in the root folder of this repo you will find a script to run a example of each pattern. To run the example just run the following in the root of this repo in your terminal:

```sh
pnpm pattern-name-in-kebab-case
```

Currently, the following Design Patterns are implemented:

1. [TemplateMethod](./src/BehaviorPatterns/TemplateMethod)