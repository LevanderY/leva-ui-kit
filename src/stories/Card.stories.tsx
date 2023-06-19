import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '../components/Card'

export default {
  title: 'LevaUiKit/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <div>
      <Card {...args} />
      <br></br>
      <Card title='Medium card' size={'md'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem mauris, scelerisque sed fringilla ut, feugiat ut nisl. Aenean risus urna, lacinia ac sem non, suscipit auctor velit. Curabitur blandit justo sapien, nec maximus ligula bibendum euismod. Nunc efficitur pretium mi.</Card>
      <br></br>
      <Card title='Small Card' size={'sm'}>
        <img height='100px' width='100px' src='https://static.vecteezy.com/system/resources/thumbnails/009/252/734/small/email-line-icon-isolated-on-white-background-free-vector.jpg' alt='image' />
      </Card>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  title: 'Title',
  size: 'xs',
  children: <span>Here will be your content</span>,
};