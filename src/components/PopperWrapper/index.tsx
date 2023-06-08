import React, { FC, memo } from 'react';
import { ClickAwayListener, Popper } from '@mui/material';
import { IStyles } from '../../types/types';
import { TStyleColorPopover, TStyleSizePopover } from './types';
import { TPositionPopover } from '../../types/types';
import classNames from 'classnames';

import './styles.scss';
interface Props {
  open: boolean;
  anchorEl: HTMLElement | null;
  setAnchorEl: (e: HTMLElement | null) => void;
  children: React.ReactNode;
  backgroundColor?: TStyleColorPopover;
  size?: TStyleSizePopover;
  position?: TPositionPopover;
  styles?: IStyles;
  className?: string;
}

const PopperWrapper: FC<Props> = ({
  open,
  anchorEl,
  setAnchorEl,
  children,
  styles,
  className,
  size = 'sm',
  position = 'bottom',
  backgroundColor = 'grey',
}: Props) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement={position}
      className={'custom_tooltip'}
      nonce={undefined}
      onReset={undefined}
      onResetCapture={undefined}>
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <div
          style={styles}
          className={classNames(className, 'popper_wrapper_container', {
            [`popper_size ${size}`]: size,
            [`popper_bg_color ${backgroundColor}`]: backgroundColor,
          })}>
          {children}
        </div>
      </ClickAwayListener>
    </Popper>
  );
};

export default memo(PopperWrapper);
