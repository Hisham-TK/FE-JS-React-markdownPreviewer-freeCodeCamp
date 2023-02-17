import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

interface ToolbarInitialState {
  isEditorFolded: boolean;
  isPreviewerFolded: boolean;
}
const initialState: ToolbarInitialState = {
  isEditorFolded: true,
  isPreviewerFolded: false,
};
export const toolbarReducer = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    flipIcons(state) {
      state.isEditorFolded = !state.isEditorFolded;
      state.isPreviewerFolded = !state.isPreviewerFolded;
    },
  },
});

export default toolbarReducer;

export const { flipIcons } = toolbarReducer.actions;

export const toolbarStateSelector = (state: RootState) => state.toolbar;
