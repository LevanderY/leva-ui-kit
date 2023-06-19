import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState, MouseEvent } from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import { IOption, TSizeDropdown } from '../types/types';
import Button from '../components/Button';
import DropDown from '../components/DropDown/index';

interface Props {
  options: IOption[];
  size: TSizeDropdown;
}

export default {
  title: 'LevaUiKit/DropDown',
  component: DropDown,
} as ComponentMeta<typeof DropDown> as Props;

const initialOptionValue: IOption = {
  id: '0',
  titleOption: '',
};

const Template: ComponentStory<typeof DropDown> = (args) => {
  const [isOpen, setIsOpen] = useState<null | HTMLElement>(null);
  const [selectValue, setSelectValue] = useState<IOption | IOption[]>(args.isCheckbox ? [] : initialOptionValue);

  const onOpenFormActionHandler = (event: MouseEvent<HTMLElement>): void =>
    setIsOpen(isOpen ? null : event.currentTarget);

  return (
    <div>
      {/* @ts-ignore */}
      <Button onClick={onOpenFormActionHandler} color={'orange'}>
        Open DropDown
      </Button>
      <DropDown
        {...args}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedValue={selectValue}
        setSelectedValue={setSelectValue}
      />
    </div>
  );
};

export const Primary = Template.bind({});

const optionsArr: IOption[] = [
  {
    id: '1',
    titleOption: 'Bob Horican',
    subtitleOption: 'niceTry@gmail.com',
  },
  {
    id: '2',
    titleOption: 'Oleg Bobik',
    subtitleOption: 'oleg@gmail.com',
  },
  {
    id: '3',
    titleOption: 'Mui Honco',
    icon: <BoltIcon />,
  },
  {
    id: '4',
    titleOption: 'Ribak Griva',
    subtitleOption: 'ribak@gmail.com',
  },
];

Primary.args = {
  label: 'Peoples',
  options: optionsArr,
  isSearch: true,
  isCheckbox: true,
};
