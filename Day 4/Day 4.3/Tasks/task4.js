function getNumber() {
  return Promise.resolve(7);
}

async function calculateResult() {
  try {
    const number = await getNumber();
    const result = number * 3 + 5;
    console.log("Final result:", result);
  } catch (error) {
    console.error("Calculation failed:", error.message);
  }
}

calculateResult();
