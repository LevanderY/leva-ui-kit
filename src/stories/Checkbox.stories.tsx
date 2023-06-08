import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckBox from '../components/Checkbox';

interface Props {
  lineVariant: 'line' | 'check';
  className?: string;
  onClick?: () => void;
  isChecked?: boolean;
}

export default {
  title: 'LevaUiKit/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox> as Props;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  lineVariant: 'check',
};