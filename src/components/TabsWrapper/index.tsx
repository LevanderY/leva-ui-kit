import React, { FC, SyntheticEvent } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import classNames from 'classnames';
import { ITabsProps, TStyleVariantTabsWrapper } from './types';
import { tabProps } from './helpers';
import { TabPanel } from './components';

import './styles.scss';

interface Props {
  value: number;
  setValue: (value: number) => void;
  tabLists: ITabsProps[];
  variant?: TStyleVariantTabsWrapper;
}

const TabsWrapper: FC<Props> = ({ value, setValue, tabLists, variant = 'line' }: Props): JSX.Element => {
  const handleChangeHandler = (event: SyntheticEvent, newValue: number): void => setValue(newValue);

  return (
    <Box className={'tabs_wrapper_container'}>
      <Box
        className={classNames('tabs_container', {
          [`variant ${variant}`]: variant,
        })}>
        <Tabs value={value} onChange={handleChangeHandler} aria-label="Tabs">
          {tabLists.map((item: ITabsProps) => (
            <Tab disableRipple key={item.index} label={item.label} {...tabProps(item.index)} />
          ))}
        </Tabs>
      </Box>
      {tabLists.map((item: ITabsProps) => (
        <TabPanel key={item.index} index={item.index} value={value}>
          {item.children}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabsWrapper;
