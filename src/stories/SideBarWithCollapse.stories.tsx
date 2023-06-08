import React, { useState, ReactNode } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List, ListItem, Divider } from '@mui/material';
import { IDrawerCollapse } from '../components/SideBarWithCollapse/types';

import SideBarWithCollapse from '../components/SideBarWithCollapse/index';

interface Props {
  collapseOptions?: IDrawerCollapse;
  position: 'left' | 'right';
  children: ReactNode;
}

export default {
  title: 'LevaUiKit/SideBarWithCollapse',
  component: SideBarWithCollapse,
} as ComponentMeta<typeof SideBarWithCollapse> as Props;

const list = (): JSX.Element => (
  <>
    <List>
      <ListItem>Follow</ListItem>
    </List>
    <Divider />
    <List>
      <ListItem>View all properties</ListItem>
    </List>
    <List>
      <ListItem>View property history</ListItem>
    </List>
    <Divider />
    <List>
      <ListItem>View association history</ListItem>
    </List>
    <List>
      <ListItem>Search in google</ListItem>
    </List>
  </>
);

const Template: ComponentStory<typeof SideBarWithCollapse> = (args) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SideBarWithCollapse position={'left'}>{list()}</SideBarWithCollapse>
      <h1>Body content</h1>
      <SideBarWithCollapse
        collapseOptions={{
          isCollapsed: true,
          isOpenDrawer,
          setIsOpenDrawer,
        }}
        {...args}>
        {list()}
      </SideBarWithCollapse>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  position: 'right',
  children: list(),
};
