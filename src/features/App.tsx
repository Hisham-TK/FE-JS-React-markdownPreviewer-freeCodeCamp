import Box from '@mui/material/Box/Box';
import Divider from '@mui/material/Divider';
import useResize from '../redux/hooks/useResize';
import { BG_COLOR1, stylesMui } from '../styles/styles-mui';
import Editor from './editor/Editor';
import Previewer from './previewer/Previewer';

function App() {
  const { width, enableResize, setWidth } = useResize({
    initialWidth: 350,
  });

  return (
    <Box id='app' sx={{ backgroundColor: BG_COLOR1 }}>
      <Editor width={width} setWidth={setWidth} />
      <Divider
        sx={stylesMui.divider}
        orientation='vertical'
        onMouseDown={enableResize}
        flexItem
      />
      <Previewer width={window.innerWidth - width} setWidth={setWidth} />
    </Box>
  );
}

export default App;
