import React, { ReactNode } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from '../components/Accordion';
import { IAccordionData } from '../components/Accordion/types';

interface Props {
  data: IAccordionData;
  children: ReactNode;
  expanded: boolean;
}

export default {
  title: 'LevaUiKit/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion> as Props;

const accordionData: IAccordionData[] = [
  {
    id: '1',
    label: 'label 2',
    actions: {
      text: '+ Add',
      onClick: () => console.log(''),
      type: 'button',
    },
  },
  {
    id: '2',
    label: 'label 2',
    actions: {
      text: 'Add',
      onClick: () => console.log(''),
      type: 'dropdown-button',
    },
  },
];

const Template: ComponentStory<typeof Accordion> = () => {
  return (
    <div style={{ width: '350px' }}>
      {accordionData.map((item: IAccordionData) => (
        <Accordion key={item.id} data={item}>
          <h5> Website activity shows you how many times a contact has visited your site and viewed your pages.</h5>
        </Accordion>
      ))}
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
