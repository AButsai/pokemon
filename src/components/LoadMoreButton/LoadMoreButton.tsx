import React from 'react'

import s from './LoadMoreButton.module.scss'

interface Props {
	handleClick: () => void
}

const LoadMoreButton: React.FC<Props> = ({ handleClick }) => {
	return (
		<div className={s.btnWrapper}>
			<button className={s.btn} onClick={handleClick}>
				Load More
			</button>
		</div>
	)
}

export default LoadMoreButton
