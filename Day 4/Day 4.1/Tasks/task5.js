// Incorrect: import { total } from "./task1-calculator.js";
// The module has no export called "total".
// Correct: import the actual named export and use the correct path.
import { divide } from "./task1-calculator.js";

console.log("Fixed import result:", divide(20, 5));
