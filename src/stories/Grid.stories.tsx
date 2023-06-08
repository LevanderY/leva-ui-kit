import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Grid, GridProps, Item, ItemProps } from '../components/Grid/index';

export default {
  title: 'LevaUiKit/Grid',
  component: Grid,
  subcomponents: { Item },
  parameters: {
    docs: {
      description: {
        component: `
            Grid is a container component that creates a flexible grid layout.
            Grid accepts a "spacing" prop, which defines the gap between items. 
            The gap value is multiplied by 8px to get the final gap size.

            Spacing defaults to 2 if no value is provided.
        `,
      },
    },
  },
} as Meta;

const GridTemplate: Story<GridProps> = (args) => (
  <Grid {...args}>
    <Item xs={6} md={4} style={{ backgroundColor: '#ff0000' }}>xs=6 md=4</Item>
    <Item xs={6} md={4} style={{ backgroundColor: '#00ff00' }}>xs=6 md=4</Item>
    <Item xs={6} md={4} style={{ backgroundColor: '#0000ff' }}>xs=6 md=4</Item>
  </Grid>
);

export const DefaultGrid = GridTemplate.bind({});
DefaultGrid.args = {
  spacing: 2,
};
DefaultGrid.parameters = {
  docs: {
    storyDescription: 'A default Grid with a spacing of 2.',
  },
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
DefaultItem.parameters = {
  docs: {
    storyDescription: `
      Item is a grid item component that can be responsive.
      
      Item accepts "xs" and "md" props which determine the width of the item in different screen sizes.
      These values are fractions of 12 (following the 12-columns grid convention). 
      
      For example, xs=6 means the item takes up half of the grid on extra small screens, 
      and md=4 means it takes up a third of the grid on medium screens.
    `,
  },
};
