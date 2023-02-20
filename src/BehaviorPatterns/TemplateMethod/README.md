# Template Method

It is a behavioral design pattern that defines the skeleton of an algorithm in a super class, but let subclasses override specific steps of the algorithm without changing its structure.

Lets see an example, we have three classes: `Shape`, `Circle` and `Line`. `Circle` and `Line` extends from `Shape`. These both classes needs to be drawn, so we may want to implement a `draw` method. You may think that this method can be implemented in each sub class and everything will be fine, but there will be an issue.

In both methods you will have some (or a lot) repetitive code, and in the future you may need to add a `Square` class, and again the same code (or part of it) will have to be in that method again.

To avoid this issue you can implement the `Template Method` pattern. This pattern suggest us to make that `draw` method private and expose an abstract method `doDrawing` in a such way that the `draw` method will group all the repetitive code, but then will call the `doDrawing` method.

Check the following Diagram:

![](diagram.png)

You can find a code example [here](src/index.ts).
