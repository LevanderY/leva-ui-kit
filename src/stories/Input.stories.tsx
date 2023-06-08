import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../components/Input';

interface Props {
  label?: string;
  type: string;
  name: string;
  value: string | number;
}

export default {
  title: 'LevaUiKit/Input',
  component: Input,
} as ComponentMeta<typeof Input> as Props;

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <div>
      <Input {...args} />
      <Input name={'Line input'} label={'Type'} value={''} type={'text'} variant={'line'} />
      <Input name={'Default'} label={'Good Email address'} value={'goodEmail@gmail.com'} type={'text'} />
      <Input
        name={'Error'}
        label={'Wrong Email address'}
        value={'wrongEmail'}
        type={'text'}
        touchedKey={true}
        errorKey={'Please enter a valid email address.'}
      />
      <Input name={'Empty'} label={'Empty'} value={''} type={'text'} />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'Region/State',
  variant: 'standard',
  name: 'Custom',
  value: 'Lviv',
  type: 'text',
  onChange: () => console.log('change'),
};