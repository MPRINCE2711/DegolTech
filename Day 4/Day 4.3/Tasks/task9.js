console.log("1. Script start");

setTimeout(() => {
  console.log("5. Timer callback");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise callback");
});

async function runAsyncCode() {
  console.log("2. Async function before await");
  await Promise.resolve();
  console.log("4. Async function after await");
}

runAsyncCode();
console.log("Script end");

/*
Actual order:
1. Script start
2. Async function before await
Script end
3. Promise callback
4. Async function after await
5. Timer callback
*/
