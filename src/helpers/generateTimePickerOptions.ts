import { IOption } from '../types/types';
import { uuid } from './uuid';

export const generateTimePickerOptions = (): IOption[] => {
  const timeArray = Array.from({ length: 97 }, (_, i) => {
    const time: Date = new Date();
    time.setHours(0, 0, 0);
    time.setMinutes(i * 15);
    let timeString = time
      .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
      .replace(/(AM|PM)/, '$1');
    if (timeString.startsWith('0')) {
      timeString = timeString.substr(1);
    }
    return timeString;
  });
  return timeArray.map((time: string) => ({
    id: uuid(),
    titleOption: time,
  }));
};
