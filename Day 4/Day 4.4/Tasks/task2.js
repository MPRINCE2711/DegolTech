const expectedOutputs = {
  q1: ["Start", "Middle", "End"],
  q2: ["A", "C", "B"],
  q3: ["Start", "End", "Promise", "Timer"],
  q4: ["1", "3", "2"],
  q5: ["C", "A", "B"],
  q6: ["11"],
  q7: ["Done", "25"],
  q8: ["Failed", "Recovered"],
  q9: ["Start", "End", "Promise 1", "Promise 2", "Timer"],
  q10: ["A", "D", "B", "C"],
};

console.table(expectedOutputs);
