import React, { FC, ReactNode } from 'react';
import './MyButton.scss'

export interface MyButtonProps {
	children: ReactNode;
}

const MyButton:FC<MyButtonProps> = ({children}: MyButtonProps): JSX.Element => {
	return (
		<button>
			{children}
		</button>
	)
}

export default MyButton;
