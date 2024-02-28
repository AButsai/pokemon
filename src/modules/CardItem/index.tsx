import React, { useEffect, useState } from 'react'

import { useGetPokemonByNameQuery } from 'service/pokemonsApi/pokemons.api'
import { IPokemon, IPokemonInfo } from 'types/interfaces'
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'

import s from './CardItem.module.scss'

interface Props {
	props: IPokemon
}

const CardItem: React.FC<Props> = ({ props }) => {
	const [pokemon, setPokemon] = useState<IPokemonInfo>()

	const { data, isSuccess } = useGetPokemonByNameQuery(props.name)

	useEffect(() => {
		if (data && isSuccess) {
			setPokemon(data)
		}
	}, [data, isSuccess])

	return (
		data &&
		isSuccess && (
			<li className={s.item}>
				<img
					className={s.img}
					src={pokemon?.sprites.front_default}
					alt={pokemon?.name}
				/>
				<p className={s.title}>{capitalizeFirstLetter(pokemon?.name)}</p>
			</li>
		)
	)
}

export default CardItem
