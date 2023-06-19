import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; 
}

const Container: React.FC<ContainerProps> = ({ children, maxWidth = 'lg' }) => {
  const containerStyle = {
    margin: '0 auto', 
    padding: '0 16px', 
    boxSizing: 'border-box',
    maxWidth: '100%', 
    '@media (min-width: 600px)': {
      maxWidth: maxWidth === 'xs' ? '600px' : '100%',
    },
    '@media (min-width: 960px)': {
      maxWidth: maxWidth === 'sm' ? '960px' : '100%',
    },
    '@media (min-width: 1280px)': {
      maxWidth: maxWidth === 'md' ? '1280px' : '100%',
    },
    '@media (min-width: 1920px)': {
      maxWidth: maxWidth === 'lg' ? '1920px' : '100%',
    },
    '@media (min-width: 2560px)': {
      maxWidth: maxWidth === 'xl' ? '2560px' : '100%',
    },
  };

  return (
    <div style={containerStyle as unknown as undefined}>
      {children}
    </div>
  );
};

export { Container };
