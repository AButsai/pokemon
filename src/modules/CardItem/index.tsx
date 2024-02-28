import React from 'react'

import { IPokemonInfo } from 'types/interfaces'
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'

import s from './CardItem.module.scss'

interface Props {
	props: IPokemonInfo
}

const CardItem: React.FC<Props> = ({ props }) => {
	return (
		props && (
			<li className={s.item}>
				<img
					className={s.img}
					src={props?.sprites.front_default}
					alt={props?.name}
				/>
				<p className={s.title}>{capitalizeFirstLetter(props?.name)}</p>
			</li>
		)
	)
}

export default CardItem
