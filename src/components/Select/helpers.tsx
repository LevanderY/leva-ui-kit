import { MouseEvent } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { TStyleVariantSelect } from './types';
import { IOption } from '../../types/types';

export const displaySelectedValue = (
  value: IOption | IOption[],
  variant: TStyleVariantSelect,
  onRemoveSelectedItem: (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>, id: string) => void,
): JSX.Element => {
  const isArray = Array.isArray(value);
  const hasValue = isArray ? value.length : value.titleOption.length;

  if (variant === 'text') return <span></span>;

  if (!isArray) return <span className={`select_value ${hasValue ? 'has_value' : ''}`}>{value.titleOption}</span>;

  if (isArray && variant !== 'line') {
    return (
      <div className="selected_values_container">
        {value.map(({ id, titleOption }: IOption) => (
          <span key={id} className={'select_value'}>
            {titleOption}
            <CloseIcon
              className={'select_value_close_icon'}
              onClick={(e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => onRemoveSelectedItem(e, id)}
            />
          </span>
        ))}
      </div>
    );
  }
};

export const checkSelectHeaderValueClass = (value: IOption | IOption[]): string => {
  const length = Array.isArray(value) ? value?.length : value.titleOption?.length;
  return length ? 'has_value' : '';
};
