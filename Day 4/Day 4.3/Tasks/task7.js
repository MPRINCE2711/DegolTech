function delay(value, milliseconds, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(`${value} failed`));
        return;
      }

      resolve(value);
    }, milliseconds);
  });
}

async function demonstrateCombinators() {
  const allResults = await Promise.all([delay("A", 20), delay("B", 30)]);
  console.log("Promise.all:", allResults);

  const settledResults = await Promise.allSettled([
    delay("Success", 20),
    delay("Failure", 10, true),
  ]);
  console.log("Promise.allSettled:", settledResults);

  const raceResult = await Promise.race([delay("Slow", 30), delay("Fast", 10)]);
  console.log("Promise.race:", raceResult);

  const anyResult = await Promise.any([
    delay("Rejected", 10, true),
    delay("First success", 20),
  ]);
  console.log("Promise.any:", anyResult);
}

demonstrateCombinators().catch((error) => {
  console.error("Combinator demo failed:", error.message);
});

// all: every Promise must fulfill; allSettled: inspect every outcome.
// race: use the first settled outcome; any: use the first fulfilled outcome.
