import React, { FC, ChangeEvent, KeyboardEvent, memo, MouseEvent } from 'react';
import { TStyleVariantInput, IIconInputOption } from './types';
import classNames from 'classnames';
import './styles.scss';

interface Props {
  label?: string;
  type: string;
  name: string;
  value: string | number;
  fullWidth?: boolean;
  disabled?: boolean;
  placeholder?: string;
  touchedKey?: boolean;
  autoFocus?: boolean;
  errorKey?: string;
  size?: 'sm' | 'md' | 'xs';
  variant?: TStyleVariantInput;
  className?: string;
  icon?: JSX.Element;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (e?: MouseEvent) => void;
  iconOptions?: IIconInputOption;
  onBlur?: () => void;
}

const Input: FC<Props> = ({
  name,
  value,
  label,
  type,
  onChange,
  onKeyPress,
  placeholder,
  touchedKey,
  errorKey,
  fullWidth,
  size = 'sm',
  variant = 'standard',
  className,
  autoFocus,
  onClick,
  iconOptions,
  onBlur,
}: Props) => {
  return (
    <div
      className={classNames(className, 'input_container', {
        [`input_variant ${variant}`]: variant,
        [`input_has_error`]: touchedKey,
      })}>
      {label && (
        <label htmlFor={'id_input_label'} className={'label'}>
          {label}
        </label>
      )}
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        onClick={onClick}
        onBlur={onBlur}
        autoFocus={autoFocus}
        className={classNames('input', {
          [`input_size ${size}`]: size,
          [`input_full_width`]: fullWidth,
          [`input_has_icon_position ${iconOptions?.position}`]: iconOptions?.position,
        })}
      />
      {iconOptions && (
        <div
          className={classNames('icon_input_box', {
            [`icon_input_box ${iconOptions.position}`]: iconOptions.position,
            [`with_label`]: label,
          })}>
          {/* <iconOptions.icon /> */}
          {iconOptions.icon}
        </div>
      )}
      <div className={'error_label'}>{touchedKey && errorKey}</div>
    </div>
  );
};

export default memo(Input);