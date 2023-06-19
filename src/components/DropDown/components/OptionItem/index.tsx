import React, { FC, memo, MouseEvent, ChangeEvent } from 'react';
import classNames from 'classnames';
import { checkActiveOptionItemClass, checkIsCheckBoxChecked } from '../../helpers';
import CheckBox from '../../../Checkbox';
import { IOption } from '../../../../types/types';

import './styles.scss';

type TOption = IOption | IOption[];

interface Props {
  item: IOption;
  selectValue: TOption;
  isCheckbox: boolean;
  isSpecificFieldChecked: boolean;
  onClickSelectValueHandler: (e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement>, item: IOption) => void;
}

const OptionItem: FC<Props> = ({
  item,
  isCheckbox,
  selectValue,
  isSpecificFieldChecked,
  onClickSelectValueHandler,
}: Props): JSX.Element => {
  return (
    <li
      className={classNames(
        'option_item',
        `${checkActiveOptionItemClass(item, selectValue)}`,
        `${isSpecificFieldChecked && 'disabled'}`,
      )}
      id={item.id}
      key={item?.id}
      onClick={(e) => onClickSelectValueHandler(e, item)}>
      <div className={'title_option_box'}>
        <div className={'title_option_checkbox_container'}>
          {isCheckbox && (
            <CheckBox
              onChange={(e: any) => onClickSelectValueHandler(e, item)}
              isChecked={checkIsCheckBoxChecked(item?.id, selectValue)}
            />
          )}
        </div>
        <div className={'title_option_container'}>
          {item.icon && <span className={'icon_option'}>{item.icon}</span>}
          <span className={'title_option'}>{item.titleOption}</span>
        </div>
      </div>
      {item.subtitleOption && <span className={'subtitle_option'}>{item.subtitleOption}</span>}
    </li>
  );
};

export default memo(OptionItem);
