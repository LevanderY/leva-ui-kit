import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from '../components/Tooltip/index';
import Button from '../components/Button';
import { TStyleColorTooltip } from '../components/Tooltip/types';

interface Props {
  text: React.ReactNode;
  children: React.ReactNode;
  backgroundColor?: TStyleColorTooltip;
}

export default {
  title: 'LevaUiKit/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip> as Props;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div>
    <Tooltip {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  children: <Button variant={'text-dark-blue'}>Open</Button>,
  text: 'Tooltip text',
  backgroundColor: 'orange',
};
