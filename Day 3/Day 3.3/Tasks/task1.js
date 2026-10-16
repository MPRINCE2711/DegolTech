// Observe that both variables refer to the same object.
const recordA = { name: "Ravi", score: 70 };
const recordB = recordA;
recordB.score = 85;
console.log(recordA.score, recordB.score);
// Explain why both values changed.
