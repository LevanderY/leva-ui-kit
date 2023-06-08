//@ts-nocheck
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IOption } from '../types/types';

import Select from '../components/Select/index';
import { TStyleVariantSelect } from '../components/Select/types';

interface Props {
  selectedValue: IOption | IOption[];
  setSelectedValue: (value: IOption | IOption[]) => void;
  options: IOption[];
  isSearch?: boolean;
  isCheckbox?: boolean;
  label: string;
  variant?: TStyleVariantSelect;
  isSpecificField?: boolean;
}

const checkBoxOptionsArr: IOption[] = [
  {
    id: '00000f1',
    titleOption: 'Me',
    subtitleOption: 'This value is dynamic applied',
  },
  {
    id: '84unfsd1',
    titleOption: 'Person Bob',
    subtitleOption: 'personBob@gmail.com',
  },
];

export default {
  title: 'LevaUiKit/Select',
  component: Select,
} as ComponentMeta<typeof Select> as Props;

const Template: ComponentStory<typeof Select> = (args) => {
  const [checkBoxSelectValue, setCheckBoxSelectValue] = useState<IOption | IOption[]>([]);

  return (
    <div>
      <Select
        selectedValue={checkBoxSelectValue}
        setSelectedValue={setCheckBoxSelectValue}
        options={checkBoxOptionsArr}
        label={'My company name'}
        variant={'contained'}
        isSearch={true}
        isCheckbox={true}
        {...args}
      />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
