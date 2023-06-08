import React, { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import TabsWrapper from '../components/TabsWrapper/index';
import { ITabsProps, TStyleVariantTabsWrapper } from '../components/TabsWrapper/types';

interface Props {
  value: number;
  setValue: (value: number) => void;
  tabLists: ITabsProps[];
  variant?: TStyleVariantTabsWrapper;
}

export default {
  title: 'LevaUiKit/TabsWrapper',
  component: TabsWrapper,
} as ComponentMeta<typeof TabsWrapper> as Props;

const tabLists = [
  {
    label: 'Activity',
    index: 0,
    children: 'Activity content',
  },
  {
    label: 'Notes',
    index: 1,
    children: 'Notes content',
  },
  {
    label: 'Emails',
    index: 2,
    children: 'Emails content',
  },
];

const Template: ComponentStory<typeof TabsWrapper> = (args) => {
  const [value, setValue] = useState(0);
  // @ts-ignore
  return <TabsWrapper value={value} setValue={setValue} tabLists={tabLists} {...args}></TabsWrapper>;
};

export const Primary = Template.bind({});

Primary.args = {
  variant: 'contained',
};
