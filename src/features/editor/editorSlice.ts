import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

interface EditorState {
  markdown: string;
  isFolded: boolean;
}

const initialState: EditorState = {
  markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`,
  isFolded: true,
};

// Reducer
export const editorReducer = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateMarkdown: (state, action) => {
      console.log(`Log ~ file: editorSlice.ts:66 ~ action`, action);
      state.markdown = action.payload;
    },
  },
});
export default editorReducer;

// Actions
export const { updateMarkdown } = editorReducer.actions;

// Selectors
export const editorStateSelector = (state: RootState): EditorState =>
  state.editor;
