function printResolvedValue() {
  return Promise.resolve("Success").then((value) => {
    console.log("Resolved value:", value);
    return value;
  });
}

function returnPromiseFromThen() {
  return Promise.resolve(2)
    .then((value) => Promise.resolve(value * 3))
    .then((value) => console.log("Returned Promise value:", value));
}

function catchAsyncError() {
  return Promise.reject(new Error("Async failure")).catch((error) => {
    console.error("Handled error:", error.message);
  });
}

async function runIndependentRequests() {
  const firstRequest = Promise.resolve("First response");
  const secondRequest = Promise.resolve("Second response");
  const [first, second] = await Promise.all([firstRequest, secondRequest]);
  console.log(first, second);
}

Promise.all([
  printResolvedValue(),
  returnPromiseFromThen(),
  catchAsyncError(),
  runIndependentRequests(),
]).catch((error) => console.error(error.message));
