//@ts-nocheck
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const displayIconButton = (isOpenDrawer: boolean, position: 'left' | 'right'): JSX.Element => {
  const iconLeft = isOpenDrawer ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />;
  const iconRight = isOpenDrawer ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />;
  return position === 'left' ? iconLeft : iconRight;
};
