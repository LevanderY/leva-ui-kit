import React, { FC } from 'react';
import classNames from 'classnames';
import { TStyleVariantSelect } from '../../types';
import { IOption } from '../../../../types/types';
import Tooltip from '../../../Tooltip';

interface Props {
  variant: TStyleVariantSelect;
  label: string;
  values: IOption | IOption[];
}

const DisplaySelectLabel: FC<Props> = ({ variant, label, values }: Props): JSX.Element => {
  if (variant !== 'text') return <span className={classNames('select_label')}>{label}</span>;
  return (
    <Tooltip text={label} size={'sm'} className={'tooltip_select_container'}>
      <span className={classNames('select_label')}>
        {Array.isArray(values) ? `${values.length ? `(${values.length})` : ''} ${label}` : label}
      </span>
    </Tooltip>
  );
};

export default DisplaySelectLabel;
