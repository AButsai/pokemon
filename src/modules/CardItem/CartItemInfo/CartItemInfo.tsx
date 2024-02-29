import React from 'react'

import { IPokemonInfo } from 'types/interfaces'

import Capabilities from 'components/Capabilities'

import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'
import { formatId } from 'utils/formatString'
import { totalInfoPokemon } from 'utils/totalInfo'

import s from './CartItemInfo.module.scss'

interface Props {
	pokemon: IPokemonInfo
}

const CartItemInfo: React.FC<Props> = ({ pokemon }) => {
	const { id, name, sprites, stats, types, weight, moves } = pokemon

	const totalInfo = totalInfoPokemon(stats, types, weight, moves)

	return (
		<div className={s.cardWrap}>
			<div className={s.imgWrap}>
				<img src={sprites.other.dream_world.front_default} alt={name} />
			</div>
			<div className={s.titleWrap}>
				<span className={s.title}>{capitalizeFirstLetter(name)}</span>
				<span className={s.span}>{formatId(id)}</span>
			</div>
			<Capabilities capabilities={totalInfo} />
		</div>
	)
}

export default CartItemInfo
