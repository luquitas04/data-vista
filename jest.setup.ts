import { expect } from "@jest/globals";
import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
import { server } from "./src/test/server";
import "./src/shared/config/i18n";

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
