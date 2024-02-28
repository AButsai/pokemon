import React from 'react'

import { IPokemonInfo } from 'types/interfaces'

import CardItem from 'modules/CardItem'
import s from './CardsList.module.scss'

interface Props {
	pokemons: IPokemonInfo[]
}

const CardsList: React.FC<Props> = ({ pokemons }) => {
	return (
		<div>
			<ul className={s.list} id='scrollableDiv'>
				{pokemons.map((pokemon, ind) => (
					<CardItem key={ind} props={pokemon} />
				))}
			</ul>
		</div>
	)
}

export default CardsList
