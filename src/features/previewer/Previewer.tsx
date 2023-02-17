import PreviewIcon from '@mui/icons-material/Preview';
import Box from '@mui/material/Box';
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkBreaks from 'remark-breaks';
import Toolbar from '../../components/toolbar/Toolbar';
import { toolbarStateSelector } from '../../components/toolbar/toolbarSlice';
import { useAppSelector } from '../../redux/hooks/typed-variables';
import { BG_COLOR2 } from '../../styles/styles-mui';
import { editorStateSelector } from '../editor/editorSlice';

// import Showdown from "showdown";
// const markdownConverter = new Showdown.Converter({ simpleLineBreaks: true, ellipsis: false });

// import { marked } from "marked";
// marked.setOptions({ breaks: true });

interface PreviewerProps {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
}
const Previewer: React.FunctionComponent<PreviewerProps> = (props) => {
  const { markdown } = useAppSelector(editorStateSelector);
  const { isPreviewerFolded } = useAppSelector(toolbarStateSelector);

  return (
    <Box
      id='previewer-wrapper'
      style={{ width: props.width }}
      sx={{ backgroundColor: BG_COLOR2 }}
    >
      <Toolbar
        title='Previewer'
        icon={PreviewIcon}
        isFolded={isPreviewerFolded}
        setWidth={props.setWidth}
      />
      <Box id='preview'>
        <ReactMarkdown remarkPlugins={[remarkBreaks]} linkTarget='_blank'>
          {markdown}
        </ReactMarkdown>
      </Box>
      {/* <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: markdownConverter.makeHtml(markdown),
        }}
      ></div> */}
      {/* <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked.parse(markdown),
        }}
      ></div> */}
    </Box>
  );
};

export default Previewer;
