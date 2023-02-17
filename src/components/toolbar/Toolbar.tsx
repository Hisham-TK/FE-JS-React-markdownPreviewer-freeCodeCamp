import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon/SvgIcon';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useAppDispatch } from '../../redux/hooks/typed-variables';
import { BG_COLOR1, TEXT_COLOR, stylesMui } from '../../styles/styles-mui';
import { flipIcons } from './toolbarSlice';

type ToolbarProps = {
  title: string;
  isFolded: boolean;
  icon: typeof SvgIcon;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
};
const Toolbar: React.FunctionComponent<ToolbarProps> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ backgroundColor: BG_COLOR1, color: TEXT_COLOR }}
    >
      <Grid item>{<props.icon />}</Grid>
      <Grid item>
        <Typography variant='h4' component='h3'>
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton
          color='default'
          size='small'
          onClick={() => {
            dispatch(flipIcons());
            props.setWidth(
              (previousWidth: number) => window.innerWidth - previousWidth
            );
          }}
          sx={stylesMui.foldToolbarFoldButton}
        >
          {props.isFolded ? (
            <UnfoldMoreIcon sx={{ rotate: '90deg', border: 'none' }} />
          ) : (
            <UnfoldLessIcon sx={{ rotate: '90deg', border: 'none' }} />
          )}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Toolbar;
