import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openedObj: null,
  objType: null,
};

const spotlightSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    openPreview: (state, action) => {
      state.openedObj = action.payload.openedObj;
      state.objType = action.payload.objType;
    },
    closePreview: (state) => {
      state.openedObj = null;
      state.objType = null;
    },
  },
});

export const { openPreview, closePreview } = spotlightSlice.actions;
export const spotlightReducer = spotlightSlice.reducer;
