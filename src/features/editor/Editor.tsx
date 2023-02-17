import BorderColorIcon from '@mui/icons-material/BorderColor';
import Box from '@mui/material/Box';
import TextareaAutoResize from '@mui/material/TextareaAutosize';
import Toolbar from '../../components/toolbar/Toolbar';
import { toolbarStateSelector } from '../../components/toolbar/toolbarSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../../redux/hooks/typed-variables';
import { BG_COLOR2 } from '../../styles/styles-mui';
import { editorStateSelector, updateMarkdown } from './editorSlice';
import React from 'react';

interface EditorProps {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
}
const Editor: React.FunctionComponent<EditorProps> = (props) => {
  const dispatch = useAppDispatch();
  const { markdown } = useAppSelector(editorStateSelector);
  const { isEditorFolded } = useAppSelector(toolbarStateSelector);

  return (
    <Box id='editor-wrapper' style={{ width: props.width }}>
      <Toolbar
        title='Editor'
        icon={BorderColorIcon}
        isFolded={isEditorFolded}
        // flipIcon={expandEditorIcon}
        setWidth={props.setWidth}
      />

      <TextareaAutoResize
        name='textarea'
        id='editor'
        value={markdown}
        onChange={(e) => dispatch(updateMarkdown(e.target.value))}
        style={{ backgroundColor: BG_COLOR2 }}
      ></TextareaAutoResize>
    </Box>
  );
};

export default Editor;
