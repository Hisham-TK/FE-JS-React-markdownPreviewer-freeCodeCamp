import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { Theme } from '@mui/system/createTheme/createTheme';

export const BG_COLOR1 = '#AAA9E0';
export const BG_COLOR2 = '#ADBFF7';
export const TEXT_COLOR = '#315';

export const stylesMui = {
  foldToolbarFoldButton: {
    borderRadius: 1,
    border: '1px solid',
    backgroundColor: '#A6CAED',
  } as SxProps<Theme>,
  divider: {
    cursor: 'col-resize',
    margin: '0px 4px',
    padding: '1px',
    borderLeft: '2px solid #AAA',
    borderRight: '2px solid #AAA',
    backgroundColor: '#555',
    '&:hover': {
      borderLeft: '2px solid #888',
      borderRight: '2px solid #888',
      backgroundColor: '#AAA',
    },
    '&:active': {
      borderLeft: '2px solid #68F',
      borderRight: '2px solid #68F',
      backgroundColor: '#5AE',
    },
  } as SxProps<Theme>,
  // editorWrapper: {} as SxProps<Theme>,
  // editor: {} as SxProps<Theme>,
  // previewerWrapper: {} as SxProps<Theme>,
  // previewer: {} as SxProps<Theme>,
};
