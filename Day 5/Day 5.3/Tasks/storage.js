function createMemoryStorage() {
  const values = new Map();

  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
    removeItem(key) {
      values.delete(key);
    },
    clear() {
      values.clear();
    },
  };
}

const fallbackLocalStorage = createMemoryStorage();
const fallbackSessionStorage = createMemoryStorage();

export function getStorage(type) {
  const fallback = type === "sessionStorage"
    ? fallbackSessionStorage
    : fallbackLocalStorage;

  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    return window[type] ?? fallback;
  } catch {
    return fallback;
  }
}
