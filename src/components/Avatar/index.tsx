import React, { FC, ReactNode, memo } from 'react';
import classNames from 'classnames';

import './styles.scss'
import { TStyleColorAvatar, TStyleSizeAvatar } from './types';


export interface Props{
    imageUrl: string;
    altText: 'avatar';
    className?: string;
    children?: ReactNode;
    size?: TStyleSizeAvatar;
    color?: TStyleColorAvatar;
}

const Avatar: FC<Props> = ({imageUrl, altText, className, children, size='sm', color='orange'}): JSX.Element => {
    return(
    <div className={'container'}>
        <img className={classNames(className, 'avatar', {[`avatar_size ${size}`]: size, [`avatar_color ${color}`]: color})} src={imageUrl} alt={altText} />
        <p className={classNames(className, 'info', {[`info_size ${size}`]: size, [`info_color ${color}`]: color})}>{children}</p>
    </div>
    )
}


export default memo(Avatar);