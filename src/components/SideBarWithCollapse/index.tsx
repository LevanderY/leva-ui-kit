// @ts-nocheck
import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Tooltip from '../Tooltip';
import { displayIconButton } from './helpers';
import { IDrawerCollapse } from './types';

import './styles.scss';

interface Props {
  collapseOptions?: IDrawerCollapse;
  position: 'left' | 'right';
  children: ReactNode;
}

const SideBarWithCollapse: FC<Props> = ({ collapseOptions, position, children }: Props): JSX.Element => {
  const { isOpenDrawer = true, setIsOpenDrawer, isCollapsed = false } = collapseOptions || {};
  const buttonTooltipText = `${isOpenDrawer ? 'Hide' : 'Show'} sidebar`;
  const onDrawerChangeHandler = (): void => setIsOpenDrawer(!isOpenDrawer);

  return (
    <div
      className={classNames('collapsed_side_bar_container', {
        ['has_collapsed']: isOpenDrawer,
        [`position ${position}`]: position,
      })}>
      <div
        className={classNames('side_bar_drawer', {
          [`position ${position}`]: position,
        })}>
        <div className={'content_container'}>{children}</div>
      </div>
      {isCollapsed && (
        <Button
          color={'grey'}
          className={classNames('collapsed_button', { [`position ${position}`]: position })}
          onClick={onDrawerChangeHandler}>
          <Tooltip text={buttonTooltipText} position={position === 'left' ? 'right' : 'left'} size={'xs'}>
            {displayIconButton(isOpenDrawer, position)}
          </Tooltip>
        </Button>
      )}
    </div>
  );
};

export default SideBarWithCollapse;
