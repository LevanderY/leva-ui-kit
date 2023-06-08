import { MouseEvent } from 'react';

export type TypeActionButton = 'button' | 'dropdown-button';

export interface IAccordionActionOptions {
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