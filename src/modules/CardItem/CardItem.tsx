import React from 'react'

import { IPokemonInfo } from 'types/interfaces'
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'

import TypePokemonButton from 'components/TypePokemonButton/TypePokemonButton'

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
				<div>
					{props.types.map((type, index) => (
						<TypePokemonButton
							key={index}
							name={type.type.name}
							url={type.type.url}
						/>
					))}
				</div>
			</li>
		)
	)
}

export default CardItem
