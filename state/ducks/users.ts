import { createSlice } from "@reduxjs/toolkit";
import { User } from "types";

interface InitialState {
  Users: User[];
}

const initialState: InitialState = {
  Users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.Users.push(action.payload);
    },
    deleteUser: (state, action) => {
      const index = state.Users.findIndex((user) => user.id === action.payload);
      state.Users.splice(index, 1);
    },
    updateUser: (state, action) => {
      state.Users = state.Users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
    },
    cleanList: (state) => {
      state.Users = [];
    },
  },
});

export const { actions, reducer } = userSlice;
