import React, { FC, useState, ChangeEvent, Dispatch, SetStateAction, MouseEvent } from 'react';
import classNames from 'classnames';
import { OptionItem, DisplayCheckBox } from './components';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Input from '../Input';
import PopperWrapper from '../PopperWrapper';
import { getNewSelectedValue } from './helpers';
import { IOption, TPositionPopover, TSizeDropdown } from '../../types/types';

import './styles.scss';

interface Props {
  isOpen: HTMLElement | null;
  setIsOpen: (e: HTMLElement | null) => void;
  selectedValue: IOption | IOption[];
  setSelectedValue: Dispatch<SetStateAction<IOption | IOption[]>>;
  options: IOption[];
  position?: TPositionPopover;
  isSearch?: boolean;
  isCheckbox?: boolean;
  isSpecificField?: boolean;
  className?: string;
  size?: TSizeDropdown;
}

const DropDown: FC<Props> = ({
  options,
  isOpen,
  setIsOpen,
  selectedValue,
  setSelectedValue,
  isSearch,
  className,
  size = 'large',
  isCheckbox = true,
  isSpecificField = false,
  position = 'bottom-start',
}): JSX.Element => {
  const [searchOption, setSearchOption] = useState<string>('');
  const [isSpecificFieldChecked, setIsSpecificFieldChecked] = useState(false);

  const onChangeSearchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchOption(event.target.value);
  };

  const onClickSelectValueHandler = (e: MouseEvent<HTMLLIElement>, value: IOption): void => {
    if (isCheckbox) {
      e.preventDefault();
      const currentSelectedValue = selectedValue as IOption[];
      if (Array.isArray(currentSelectedValue)) {
        const newSelectedValue: IOption[] = getNewSelectedValue(currentSelectedValue, value);
        setSelectedValue(newSelectedValue);
      }
    }
    if (!isCheckbox) {
      setSelectedValue(value);
      setIsOpen(null);
      setSearchOption('');
    }
  };

  const onChangeUnassignedCheckHandler = (): void => {
    setIsSpecificFieldChecked((prevState) => !prevState);
    if (isSpecificField) setSelectedValue([]);
  };

  const onResetSearchValues = (e: MouseEvent<SVGSVGElement>): void => {
    e.stopPropagation();
    setSearchOption('');
  };

  const displaySearchCloseButton = (value: boolean): JSX.Element =>
    value ? (
      <CloseIcon onClick={onResetSearchValues} className={'close_search_icon'} />
    ) : (
      <SearchIcon className={'search_dropdown_icon'} />
    );

  return (
    <PopperWrapper
      backgroundColor={'white'}
      open={Boolean(isOpen)}
      anchorEl={isOpen}
      position={position}
      setAnchorEl={setIsOpen}
      className={classNames('popper_select_container', className, {
        [`popper_select_size ${size}`]: size,
      })}>
      <div className={'options_box'}>
        {isSearch && (
          <div className={'options_header'}>
            <Input
              value={searchOption}
              name={'search'}
              onChange={onChangeSearchHandler}
              type={'text'}
              placeholder={'Search'}
              className={'search_input'}
              autoFocus={true}
              iconOptions={{
                icon: displaySearchCloseButton(Boolean(searchOption.length)),
                position: 'right',
              }}
            />
          </div>
        )}
        <ul
          className={classNames('options_list_items', {
            ['has_checkbox']: isCheckbox,
          })}>
          {options
            .filter(({ titleOption }: IOption) => titleOption.toLowerCase().includes(searchOption.toLowerCase()))
            .map((item: IOption) => (
              <OptionItem
                key={item.id}
                item={item}
                selectValue={selectedValue}
                isCheckbox={isCheckbox}
                isSpecificFieldChecked={isSpecificFieldChecked}
                //@ts-ignore
                onClickSelectValueHandler={onClickSelectValueHandler}
              />
            ))}
          <DisplayCheckBox
            isCheckbox={isCheckbox}
            isSpecificField={isSpecificField}
            isSpecificFieldChecked={isSpecificFieldChecked}
            onChangeCheckboxHandler={onChangeUnassignedCheckHandler}
          />
        </ul>
      </div>
    </PopperWrapper>
  );
};

export default DropDown;
