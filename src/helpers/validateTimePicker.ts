export const timeConvert = (time: string): string => {
  const timeMatch: RegExpMatchArray | null = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];
  let timeArray: string[] = [];
  if (timeMatch && timeMatch.length > 1) {
    timeArray = Array.from(timeMatch).slice(1);
    timeArray[5] = +timeArray[0] < 12 ? ' AM' : ' PM';
    timeArray[0] = String(+timeArray[0] % 12 || 12);
  }
  return timeArray.join('');
};

export const validateTimePicker = (timeValue: string): string => {
  const defaultValue = '8:00 AM';
  if (!timeValue.length) return defaultValue;

  let validated: string;
  const isValid = /^(1[0-2]|0?[1-9]):[0-5][0-9] ?[aApP][mM]$/;
  const isSpace = /((\d{1,2}):(\d{2}))([a-zA-Z]{2})/g;
  const restore = /[a-zA-Z :]/g;

  if (isValid.test(timeValue)) {
    validated = timeValue.replace(isSpace, '$1 $4');
    return validated;
  }

  timeValue = timeValue.replace(restore, '');

  if (timeValue.length === 1) {
    validated = timeConvert(`0${timeValue}:00`);
  } else if (timeValue.length === 2) {
    validated = timeConvert(`${timeValue}:00`);
  } else if (timeValue.length > 2) {
    validated = timeConvert(`0${timeValue.substring(0, 1)}:00`);
  } else {
    validated = defaultValue;
  }

  return validated;
};
