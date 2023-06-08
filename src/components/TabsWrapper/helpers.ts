import { ITabProps } from './types';

export const tabProps = (index: number): ITabProps => {
  return {
    id: `custom-tab-${index}`,
    'aria-controls': `custom-tab-panel-${index}`,
  };
};
