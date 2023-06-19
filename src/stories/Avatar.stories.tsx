import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../components/Avatar'

export default {
  title: 'LevaUiKit/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;


const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />
export const Primary = Template.bind({});

Primary.args = {
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5MNUpULlmtF1LYUWip59zHNtKmkxxhstvg&usqp=CAU",
  children: "Bill Bobik"
};
