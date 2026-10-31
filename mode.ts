// broken — process is undefined in the browser
const MODE = process.env.MODE;

// fixed
const MODE = (typeof process !== "undefined" && process.env?.MODE) || "production";