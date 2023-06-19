import React, { FC, MouseEvent, useState } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import classNames from 'classnames';
import { DisplaySelectLabel } from './components';
import { displaySelectedValue, checkSelectHeaderValueClass } from './helpers';
import DropDown from '../DropDown';
import { TStyleVariantSelect } from './types';
import { IOption, TPositionPopover, TSizeDropdown } from '../../types/types';

import './styles.scss';

const initialOptionValue: IOption = {
  id: '',
  titleOption: '',
};
interface Props {
  size?: TSizeDropdown;
  selectedValue: IOption | IOption[];
  setSelectedValue: (value: IOption | IOption[]) => void;
  options: IOption[];
  isSearch?: boolean;
  isCheckbox?: boolean;
  label: string;
  variant?: TStyleVariantSelect;
  isSpecificField?: boolean;
  className?: string;
  classDropDownName?: string;
  position?: TPositionPopover;
}

const Select: FC<Props> = ({
  selectedValue,
  setSelectedValue,
  options,
  label,
  position,
  className,
  classDropDownName,
  isSearch = true,
  isCheckbox = false,
  variant = 'text',
  isSpecificField = false,
  size = 'large',
}: Props): JSX.Element => {
  const [openAnchorSelect, setOpenAnchorSelect] = useState<null | HTMLElement>(null);

  const onOpenSelectHandler = (event: MouseEvent<HTMLElement>): void =>
    setOpenAnchorSelect(openAnchorSelect ? null : event.currentTarget);

  const onResetSelectTextHandler = (): void => setSelectedValue(isCheckbox ? [] : initialOptionValue);

  const onRemoveSelectedItem = (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>, id: string): void => {
    e.stopPropagation();
    if (Array.isArray(selectedValue)) {
      const newSelectedValue: IOption[] = selectedValue.filter((item) => item.id !== id);
      setSelectedValue(newSelectedValue);
    }
  };

  return (
    <div className={classNames('custom_select_box', className)}>
      <span
        className={classNames({
          [`select_contained_input_label_enabled`]: variant === 'contained',
          [`select_contained_input_label_disabled`]: variant !== 'contained',
        })}>
        {label}
      </span>
      <div
        className={classNames('select_header', `${checkSelectHeaderValueClass(selectedValue)}`, {
          [`header_variant ${variant}`]: variant,
        })}
        onClick={onOpenSelectHandler}>
        <DisplaySelectLabel variant={variant} label={label} values={selectedValue} />
        {displaySelectedValue(selectedValue, variant, onRemoveSelectedItem)}
        <ArrowDropDown className={'select_arrow_icon'} />
        <Close className={'select_close_icon'} onClick={onResetSelectTextHandler} />
      </div>
      <DropDown
        position={position}
        isOpen={openAnchorSelect}
        setIsOpen={setOpenAnchorSelect}
        selectedValue={selectedValue}
        //@ts-ignore
        setSelectedValue={setSelectedValue}
        options={options}
        isSearch={isSearch}
        isCheckbox={isCheckbox}
        isSpecificField={isSpecificField}
        className={classDropDownName}
        size={size}
      />
    </div>
  );
};

export default Select;
