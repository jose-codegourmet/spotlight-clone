import { projectReducer } from './reducers/project';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  project: projectReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
