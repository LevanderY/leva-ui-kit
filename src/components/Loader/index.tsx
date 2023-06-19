import React, { FC, memo } from 'react';
import classNames from 'classnames';

import { TStyleColorLoader } from './types';
import './styles.scss'

export interface Props{
    className?: string
    color: TStyleColorLoader;
}

const Loader: FC<Props> = ({className, color}): JSX.Element => {
    return(<div className={classNames(className, 'loader', `loader_color_${color}`)}></div>)
}

export default memo(Loader);
