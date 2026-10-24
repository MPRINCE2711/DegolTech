const values = [0, false, "", null, undefined];

values.forEach((value) => {
  console.log({
    value,
    usingOr: value || "fallback",
    usingNullishCoalescing: value ?? "fallback",
  });
});

// || uses its fallback for every falsy value.
// ?? uses its fallback only for null and undefined.
