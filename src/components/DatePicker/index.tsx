// @ts-nocheck
import React, { FC, MouseEvent, useState } from 'react';
import { CalendarMonth } from '@mui/icons-material';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import Button from '../Button';
import Input from '../Input';
import PopperWrapper from '../PopperWrapper';
import { TODAY_TEXT, CLEAR_TEXT } from './constants';

import 'react-day-picker/dist/style.css';
import './styles.scss';

interface Props {
  selectedValue: Date | null;
  setSelectedValue?: (date: Date) => void;
}

const DatePicker: FC<Props> = ({ selectedValue, setSelectedValue }: Props): JSX.Element => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<null | HTMLElement>(null);

  const onOpenDatePickerHandler = (event: MouseEvent<HTMLElement>): void => {
    if (!event.currentTarget) return;
    setIsDatePickerOpen(isDatePickerOpen ? null : event.currentTarget);
  };

  const onResetHandler = (): void => setSelectedValue('');
  const getCurrentDayHandler = (): void => setSelectedValue(new Date());

  return (
    <>
      <Input
        type={'text'}
        name={'date'}
        placeholder={'MM/DD/YYYY'}
        onClick={onOpenDatePickerHandler}
        value={selectedValue && format(selectedValue, 'MM/dd/yyyy')}
        iconOptions={{
          icon: <CalendarMonth className={'day_picker_icon_input'} />,
          position: 'left',
        }}
      />
      <PopperWrapper
        backgroundColor={'white'}
        open={Boolean(isDatePickerOpen)}
        anchorEl={isDatePickerOpen}
        position={'bottom-start'}
        setAnchorEl={setIsDatePickerOpen}
        className={'date_picker_popper'}>
        <div className={'date_picker_container'}>
          <DayPicker
            selected={selectedValue}
            onSelect={setSelectedValue}
            mode={'single'}
            fixedWeeks
            showOutsideDays
            footer={
              <div className={'footer'}>
                <Button size={'sm'} color={'light-grey'} className={'footer_button'} onClick={getCurrentDayHandler}>
                  {TODAY_TEXT}
                </Button>
                <Button size={'sm'} color={'light-grey'} className={'footer_button'} onClick={onResetHandler}>
                  {CLEAR_TEXT}
                </Button>
              </div>
            }
          />
        </div>
      </PopperWrapper>
    </>
  );
};

export default DatePicker;
