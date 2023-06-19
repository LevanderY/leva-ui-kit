import React, { FC } from 'react';
import { ITabPanelProps } from '../../types';

const TabPanel: FC<ITabPanelProps> = ({ children, value, index, ...other }: ITabPanelProps): JSX.Element => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`custom-tab-panel-${index}`}
    aria-labelledby={`custom-tab-${index}`}
    {...other}>
    {value === index && <>{children}</>}
  </div>
);

export default TabPanel;
