import React from 'react'

import { IPokemonInfo } from 'types/interfaces'

import Capabilities from 'components/Capabilities'
import TypePokemonButton from 'components/TypePokemonButton/TypePokemonButton'

import { capabilitiesPokemon } from 'utils/capabilitiesPokemon'
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'
import { formatStringId } from 'utils/formatStringId'

import s from './CardItem.module.scss'

interface Props {
	pokemon: IPokemonInfo
	handleOpen: () => void
	isModal: boolean
}

const CardItem: React.FC<Props> = ({ pokemon, handleOpen, isModal }) => {
	const { id, name, sprites, stats, types, weight, moves } = pokemon

	const capabilities = capabilitiesPokemon(stats, types, weight, moves)

	const urlImg = !sprites.other.dream_world.front_default
		? sprites.front_default
		: sprites.other.dream_world.front_default

	return (
		pokemon &&
		urlImg && (
			<li className={isModal ? s.itemModal : s.item}>
				<div className={s.imgWrap}>
					<img className={s.img} src={urlImg} alt={name} onClick={handleOpen} />
				</div>
				<div className={s.titleWrap}>
					<span className={isModal ? `${s.title} ${s.titleModal}` : s.title}>
						{capitalizeFirstLetter(name)}
					</span>
					{isModal && <span className={s.span}>{formatStringId(id)}</span>}
				</div>
				{!isModal && <TypePokemonButton types={types} />}
				{isModal && <Capabilities capabilities={capabilities} />}
			</li>
		)
	)
}

export default CardItem
