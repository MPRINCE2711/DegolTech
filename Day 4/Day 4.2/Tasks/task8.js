/*
Call stack -> executes current JavaScript
Runtime APIs -> wait for timers, network operations, and events
Microtask queue -> Promise and queueMicrotask callbacks
Task queue -> timer and event callbacks
Event loop -> moves queued work to an empty call stack

A Promise callback enters the microtask queue. A timer callback enters the
task queue after its delay. When synchronous code finishes, microtasks run
before the next eligible task.
*/

console.log("Synchronous work");
Promise.resolve().then(() => console.log("Microtask queue"));
setTimeout(() => console.log("Task queue"), 0);
