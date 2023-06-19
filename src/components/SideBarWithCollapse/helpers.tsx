import React from 'react';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';

export const displayIconButton = (isOpenDrawer: boolean, position: 'left' | 'right'): JSX.Element => {
  const iconLeft = isOpenDrawer ? <KeyboardDoubleArrowLeft /> : <KeyboardDoubleArrowRight />;
  const iconRight = isOpenDrawer ? <KeyboardDoubleArrowRight /> : <KeyboardDoubleArrowLeft />;
  return position === 'left' ? iconLeft : iconRight;
};
