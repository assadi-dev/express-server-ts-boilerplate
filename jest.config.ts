import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  coverageProvider:"v8",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  verbose: true,
  collectCoverage: true,
};

export default config;
