import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Grid, GridProps, Item, ItemProps } from '../components/Grid/index';

export default {
  title: 'MyApp/Grid',
  component: Grid,
  subcomponents: { Item },
} as Meta;

const GridTemplate: Story<GridProps> = (args) => (
  <Grid {...args} />
);

export const DefaultGrid = GridTemplate.bind({});
DefaultGrid.args = {
  spacing: 2,
};

const ItemTemplate: Story<ItemProps> = (args) => (
  <Item {...args} />
);

export const DefaultItem = ItemTemplate.bind({});
DefaultItem.args = {
  xs: 6,
  md: 4,
  children: "xs=6 md=4"
};