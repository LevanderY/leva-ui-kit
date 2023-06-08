// @ts-nocheck
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import DatePicker from '../components/DatePicker/index';

interface Props {
  isOpen: HTMLElement | null;
  setIsOpen: (e: HTMLElement | null) => void;
  selectedValue: Date | null;
  setSelectedValue?: (date: Date) => void;
}

export default {
  title: 'LevaUiKit/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker> as Props;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>();

  return (
    <div>
      <DatePicker selectedValue={selectedDate} setSelectedValue={setSelectedDate} {...args} />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
