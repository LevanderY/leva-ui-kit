import React, { FC, memo } from 'react';
import { Tooltip as MuiTooltip } from '@mui/material';
import classNames from 'classnames';
import { TStyleColorTooltip, TPositionTooltip, TStyleTextColorTooltip, TStyleSizeTooltip } from './types';
import { IStyles } from '../../types/types';

import './styles.scss';

interface Props {
  text: React.ReactNode;
  children: React.ReactNode;
  backgroundColor?: TStyleColorTooltip;
  position?: TPositionTooltip;
  textColor?: TStyleTextColorTooltip;
  size?: TStyleSizeTooltip;
  styles?: IStyles;
  className?: string;
}

const Tooltip: FC<Props> = ({
  children,
  styles,
  className,
  text,
  position = 'top',
  backgroundColor = 'grey',
  textColor = 'white',
  size = 'sm',
}: Props) => {
  return (
    <MuiTooltip
      title={
        <span
          className={classNames('tooltip_text', {
            [`tooltip_text_color ${textColor}`]: textColor,
          })}>
          {text}
        </span>
      }
      classes={{
        arrow: classNames({
          [`tooltip_arrow ${backgroundColor}`]: backgroundColor,
        }),
        tooltip: classNames({
          [`tooltip_cloud ${backgroundColor}`]: backgroundColor,
          [`tooltip_cloud ${size}`]: size,
        }),
      }}
      placement={position}
      arrow>
      <div className={className} style={styles}>
        {children}
      </div>
    </MuiTooltip>
  );
};

export default memo(Tooltip);
