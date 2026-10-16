// Return the average of any number of marks.
function averageMarks(...marks) {
  if (marks.length === 0) return 0;
  return marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
}

console.log(averageMarks(75, 80, 95));
