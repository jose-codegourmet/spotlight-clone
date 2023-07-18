import { projectReducer } from './reducers/project';
import { combineReducers } from '@reduxjs/toolkit';
import { spotlightReducer } from './reducers/spotlight';

export const rootReducer = combineReducers({
  project: projectReducer,
  spotlight: spotlightReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
