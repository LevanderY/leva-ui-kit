import React from 'react';

export interface GridProps {
  children: React.ReactNode;
  spacing?: number;
}

export interface ItemProps {
  xs: number;
  md: number;
  children: string;
}

const Grid: React.FC<GridProps> = ({ children, spacing = 2 }) => {
  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: `${spacing * 8}px`,
  };

  return (
    <div style={gridStyle as unknown as undefined}>
      {children}
    </div>
  );
};


const Item: React.FC<ItemProps> = ({ xs, md, children }) => {
  const itemStyle = {
    flexBasis: `${(xs / 12) * 100}%`, 
    '@media (min-width: 768px)': {
      flexBasis: `${(md / 12) * 100}%`, 
    },
  };

  return (
    <div style={itemStyle}>
      {children}
    </div>
  );
};

export { Grid, Item };
