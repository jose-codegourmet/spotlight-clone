import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
  isMobileOpen: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    toggleIsMobileOpen: (state, action) => {
      state.isMobileOpen = action.payload;
    },
  },
});

export const { toggleDarkMode, toggleIsMobileOpen } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
