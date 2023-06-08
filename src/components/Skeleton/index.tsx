import React, { ReactNode, FC, memo } from 'react';
import { Skeleton as MuiSkeleton } from '@mui/material';
import { TVariantSkeleton } from './types';

interface Props {
  isLoading: boolean;
  children: ReactNode;
  variant?: TVariantSkeleton;
  width?: number | string;
  height?: number | string;
}

const Skeleton: FC<Props> = ({ children, isLoading, height, width, variant = 'text' }: Props) => (
  <>
    {isLoading ? <MuiSkeleton animation={'wave'} variant={variant} width={width} height={height} /> : <>{children}</>}
  </>
);

export default memo(Skeleton);
