import React, { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactNode } from 'react';

import Skeleton from '../components/Skeleton/index';
import { TVariantSkeleton } from '../components/Skeleton/types';

interface Props {
  isLoading: boolean;
  children: ReactNode;
  variant?: TVariantSkeleton;
  width?: number | string;
  height?: number | string;
}

export default {
  title: 'LevaUiKit/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton> as Props;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <div>
    <Skeleton {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  isLoading: true,
  variant: 'rectangular',
};
