import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Container, ContainerProps } from '../components/Container/index';

export default {
  title: 'MyApp/Container',
  component: Container,
  argTypes: {
    maxWidth: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <div style={{height: '100px', backgroundColor: 'lightblue'}}>
      Content goes here
    </div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  maxWidth: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  maxWidth: 'sm',
};
