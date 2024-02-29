import React from 'react'

import { IPokemonInfo } from 'types/interfaces'
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'

import TypePokemonButton from 'components/TypePokemonButton/TypePokemonButton'

import s from './CardItem.module.scss'

interface Props {
	props: IPokemonInfo
	handleOpen: (pokemon: IPokemonInfo) => void
}

const CardItem: React.FC<Props> = ({ props, handleOpen }) => {
	const urlImg = !props?.sprites.other.dream_world.front_default
		? props.sprites.front_default
		: props?.sprites.other.dream_world.front_default

	return (
		props && (
			<li className={s.item}>
				<div className={s.imgWrap}>
					<img
						className={s.img}
						src={urlImg}
						alt={props?.name}
						onClick={() => handleOpen(props)}
					/>
				</div>
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
