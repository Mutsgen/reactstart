import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const reducerFirst = (state = initialState, { type, payload }) => {
  switch (type) {
    case "login":
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};

export const state = configureStore({ reducer: reducerFirst });
