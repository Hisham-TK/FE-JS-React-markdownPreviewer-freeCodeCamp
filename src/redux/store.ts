import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import editorReducer from '../features/editor/editorSlice';
import toolbarReducer from '../components/toolbar/toolbarSlice';

export const store = configureStore({
  reducer: {
    [toolbarReducer.name]: toolbarReducer.reducer,
    [editorReducer.name]: editorReducer.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
