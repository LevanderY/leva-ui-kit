import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PopperWrapper from '../components/PopperWrapper/index';
import { TStyleColorPopover, TPositionPopover } from '../components/PopperWrapper/types';

interface Props {
  open: boolean;
  children: React.ReactNode;
  backgroundColor?: TStyleColorPopover;
  position?: TPositionPopover;
}

export default {
  title: 'LevaUiKit/PopperWrapper',
  component: PopperWrapper,
} as ComponentMeta<typeof PopperWrapper> as Props;

const Template: ComponentStory<typeof PopperWrapper> = (args) => (
  <div>
    <PopperWrapper {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  children: <div>Div in Popover</div>,
  backgroundColor: 'orange',
  position: 'top',
  open: true,
};
