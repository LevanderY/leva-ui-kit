import React, { memo, MouseEvent, ReactNode } from 'react';
import { TStyleColorButton, TStyleSizeButton, TStyleVariantButton, TStyleTypeButton } from './types';
import classNames from 'classnames';

import './styles.scss';

export interface Props {
  onClick?: (e?: MouseEvent) => void;
  onChange?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  variant?: TStyleVariantButton;
  color?: TStyleColorButton;
  size?: TStyleSizeButton;
  type?: TStyleTypeButton;
  className?: string;
  children?: ReactNode;
}

const Button = ({
  children,
  onClick,
  onChange,
  fullWidth,
  disabled,
  className,
  color,
  variant = 'contained',
  type = 'button',
  size = 'md',
  ...props
}: Props): JSX.Element => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onChange={onChange}
      {...props}
      className={classNames(className, 'btn', {
        [`btn_color ${color}`]: color,
        [`btn_size ${size}`]: size,
        [`btn_variant ${variant}`]: variant,
        [`btn_full_width`]: fullWidth,
      })}>
      {children}
    </button>
  );
};

export default memo(Button);
