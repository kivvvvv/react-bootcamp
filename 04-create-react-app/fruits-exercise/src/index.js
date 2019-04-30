import fruits from "./foods";
import { choice, remove } from "./helpers";

const randomFruit = choice(fruits);
remove(fruits, randomFruit);

console.log(
  `I’d like one ${randomFruit}, please.
Here you go: ${randomFruit}
Delicious! May I have another?
I’m sorry, we’re all out. We have ${fruits.length} left.`
);
