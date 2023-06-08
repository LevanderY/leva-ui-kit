import { ReactNode } from 'react';

export interface ITabProps {
  id: string;
  'aria-controls': string;
}

export interface ITabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export interface ITabsProps {
  index: number;
  label: string;
  children?: JSX.Element;
}

export type TStyleVariantTabsWrapper = 'contained' | 'line';
