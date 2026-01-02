import { ReactElement } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import uiReducer from "../app/store/uiSlice";
import { baseApi } from "../shared/api/baseApi";

export function setupTestStore() {
  return configureStore({
    reducer: {
      ui: uiReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(baseApi.middleware),
  });
}

export function renderWithProviders(
  ui: ReactElement,
  options?: RenderOptions
) {
  const store = setupTestStore();

  return {
    store,
    ...render(<Provider store={store}>{ui}</Provider>, options),
  };
}

export type AppStore = ReturnType<typeof setupTestStore>;
