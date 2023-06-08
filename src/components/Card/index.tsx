import React, { FC, ReactNode, memo } from 'react';
import { TStyleSizeCard } from './types';
import classNames from 'classnames';

import './styles.scss'


export interface Props{
    title: string;
    className?: string;
    children?: ReactNode;
    size: TStyleSizeCard
}

const Card: FC<Props> = ({title, className, children, size='md'}): JSX.Element => {
    return(
        <div className={classNames(className, 'card', {[`card_size ${size}`]: size})}>
            <h1 className={classNames(className, 'title', {[`title_size ${size}`]: size})}>{title}</h1>
            <div className={'content'}>
                {children}
            </div>
        </div>
    )

}


export default memo(Card);