//@ts-nocheck
import React, { FC } from 'react';
import { Divider } from '@mui/material';
import classNames from 'classnames';
import CheckBox from '../../../Checkbox';

interface Props {
  isCheckbox: boolean;
  isSpecificField: boolean;
  isSpecificFieldChecked: boolean;
  onChangeCheckboxHandler: () => void;
}

const DisplayCheckBox: FC<Props> = ({
  isCheckbox,
  isSpecificField,
  isSpecificFieldChecked,
  onChangeCheckboxHandler,
}: Props): JSX.Element => {
  if (!isCheckbox || !isSpecificField) return null;
  return (
    <>
      <Divider />
      <li
        className={classNames('option_item', {
          ['active']: isSpecificField,
        })}>
        <div className={'title_option_box'}>
          <CheckBox isChecked={isSpecificFieldChecked} onChange={onChangeCheckboxHandler} />
          <span className={'title_option'}>Unassigned</span>
        </div>
      </li>
    </>
  );
};

export default DisplayCheckBox;
