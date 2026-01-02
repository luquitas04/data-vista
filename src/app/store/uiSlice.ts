import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UIState = {
  usersSearch: string;
  selectedUserId: number | null;
};

const initialState: UIState = {
  usersSearch: "",
  selectedUserId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setUsersSearch(state, action: PayloadAction<string>) {
      state.usersSearch = action.payload;
    },
    setSelectedUserId(state, action: PayloadAction<number>) {
      state.selectedUserId = action.payload;
    },
    clearSelectedUser(state) {
      state.selectedUserId = null;
    },
    clearUsersSearch(state) {
      state.usersSearch = "";
    },
  },
});

export const {
  setUsersSearch,
  setSelectedUserId,
  clearSelectedUser,
  clearUsersSearch,
} = uiSlice.actions;

export default uiSlice.reducer;
