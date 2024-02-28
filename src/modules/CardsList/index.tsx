import React from 'react'

import { IPokemon, IResponsePokemons } from 'types/interfaces'

import CardItem from 'modules/CardItem'
import s from './CardsList.module.scss'

interface Props {
	pokemons: IPokemon[]
}

const CardsList: React.FC<Props> = ({ pokemons }) => {
	return (
		<div>
			<ul className={s.list}>
				{pokemons.map(pokemon => (
					<CardItem key={pokemon.name} props={pokemon} />
				))}
			</ul>
		</div>
	)
}

export default CardsList
