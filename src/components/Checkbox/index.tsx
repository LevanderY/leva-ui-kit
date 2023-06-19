import React, { FC, memo, ChangeEvent } from 'react';
import classNames from 'classnames';

import './styles.scss';

interface Props {
  lineVariant?: 'line' | 'check';
  className?: string;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}

const CheckBox: FC<Props> = ({ lineVariant = 'check', className, onChange, isChecked }): JSX.Element => {
  return (
    <div
      className={classNames(className, 'checkbox_container', {
        [`variant ${lineVariant}`]: lineVariant,
      })}>
      <label className={'label'}>
        <input className={'input'} type={'checkbox'} onChange={onChange} checked={isChecked} />
        <span className={'checkmark'}></span>
      </label>
    </div>
  );
};

export default memo(CheckBox);