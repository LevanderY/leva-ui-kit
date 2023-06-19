import { IOption } from '../../types/types';

type TOption = IOption | IOption[];

export const checkActiveOptionItemClass = (value: TOption, selectValue: TOption): string =>
  !Array.isArray(value) && !Array.isArray(selectValue) && value?.id === selectValue?.id ? 'active' : '';

export const checkIsCheckBoxChecked = (id: string, selectValue: TOption): boolean =>
  Array.isArray(selectValue) ? selectValue.some((item: IOption) => item?.id === id) : id === selectValue?.id;

export const getNewSelectedValue = (currentSelectedValue: IOption[], value: IOption): IOption[] =>
  currentSelectedValue?.some((item: IOption) => item?.id === value?.id)
    ? currentSelectedValue?.filter((item: IOption) => item?.id !== value?.id)
    : [...currentSelectedValue, value];
