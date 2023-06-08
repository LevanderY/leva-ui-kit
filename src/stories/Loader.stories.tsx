import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loader from '../components/Loader'

export default {
  title: 'LevaUiKit/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => {
  return (
    <Loader {...args} />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  color: 'green'
};