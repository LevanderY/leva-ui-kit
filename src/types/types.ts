import { MouseEvent } from 'react';
export interface IStyles {
  [key: string]: string;
}
export interface IOption {
  id: string;
  titleOption: string;
  subtitleOption?: string;
  icon?: JSX.Element;
}

export type TypeActionButton = 'button' | 'dropdown-button';
interface IAccordionActionOptions {
  text: string;
  onClick: (event?: MouseEvent<HTMLElement>) => void;
  type: TypeActionButton;
}

export interface IAccordionData {
  id: string;
  label: string;
  actions?: IAccordionActionOptions;
  isOpen?: boolean;
}

export type TPositionPopover =
  | 'auto'
  | 'auto-end'
  | 'auto-start'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left'
  | 'left-end'
  | 'left-start'
  | 'right'
  | 'right-end'
  | 'right-start'
  | 'top'
  | 'top-end'
  | 'top-start';

export type TSizeDropdown = 'extra-small' | 'small' | 'medium' | 'large';
