export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy",
    "^@mswjs/interceptors/ClientRequest$":
      "<rootDir>/node_modules/@mswjs/interceptors/lib/node/interceptors/ClientRequest/index.js",
    "^@mswjs/interceptors/XMLHttpRequest$":
      "<rootDir>/node_modules/@mswjs/interceptors/lib/node/interceptors/XMLHttpRequest/index.js",
    "^@mswjs/interceptors/fetch$":
      "<rootDir>/node_modules/@mswjs/interceptors/lib/node/interceptors/fetch/index.js"
  },
  transform: {
    "^.+\\.(t|j)sx?$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
  setupFiles: ["<rootDir>/jest.polyfills.ts"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
};
