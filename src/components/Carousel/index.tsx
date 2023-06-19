import React, { FC, memo, useState } from 'react';
import { ICarouseltem } from './types';

import './styles.scss'

export interface Props {
	items: ICarouseltem[]
}

const Carousel: FC<Props> = ({ items }): JSX.Element => {
	const [activeIndex, setActiveIndex] = useState(1)

	const moveDot = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<div className={"container-slider"}>
			{items.map(({ key, url, alt }) => {
				return (
					<div className={`slide ${activeIndex === key + 1 ? "active-anim" : ""}`} key={key}
					>
						<img
							src={url}
							alt={alt}
						/>
					</div>
				)
			})}
			<div className="container-dots">
				{items.map(({ key }) => (
					<div
						onClick={() => moveDot(key + 1)}
						className={activeIndex === key + 1 ? "dot active" : "dot"}
					></div>
				))}
			</div>

		</div>
	)

}


export default memo(Carousel);