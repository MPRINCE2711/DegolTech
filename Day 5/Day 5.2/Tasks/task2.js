const invalidJson = '{"name": "Asha",}';

try {
  JSON.parse(invalidJson);
} catch (error) {
  console.error("Could not read the data. Please use valid JSON.");
}
