//@ts-nocheck
import React, { FC, ReactNode, useState, MouseEvent } from 'react';
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore, ArrowDropDown } from '@mui/icons-material';
import Button from '../Button';
import { IAccordionData, TypeActionButton } from './types';

import './styles.scss';

interface Props {
  data: IAccordionData;
  children: ReactNode;
}

const Accordion: FC<Props> = ({ data, children }: Props): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(Boolean(data.isOpen));

  const handleChange = (): void => setExpanded(!expanded);

  const checkButtonActionType = (type: TypeActionButton): JSX.Element | string =>
    type === 'dropdown-button' && <ArrowDropDown className={'action_type_dropdown_icon'} />;

  return (
    <div className={'accordion_container'} key={`${data.id}_${data.label}`}>
      <MuiAccordion expanded={expanded} onChange={handleChange} disableGutters>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <div className={'accordion_content'}>
            <p className={'label'}>{data.label}</p>
            {data.actions && (
              <div className={'actions_container'}>
                <Button
                  onClick={(e: MouseEvent<HTMLElement>) => {
                    e.stopPropagation();
                    data.actions.onClick(e);
                  }}
                  variant={'text-dark-blue'}
                  className={'action_button'}>
                  <div className={'action_button_content'}>
                    {data.actions.text} {checkButtonActionType(data.actions.type)}
                  </div>
                </Button>
              </div>
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </MuiAccordion>
    </div>
  );
};

export default Accordion;
