import React, { useEffect, useState } from 'react'

import CardsList from 'modules/CardsList'

import LoadMoreButton from 'components/LoadMoreButton'

import { fetchPokemonsByName } from 'service/pokemonsApi/get.pokemons.info'
import { useGetPokemonsQuery } from 'service/pokemonsApi/pokemons.api'

import { IPokemonInfo, IQueryPokemons } from 'types/interfaces'

const Home: React.FC = () => {
	const [limit, setLimit] = useState<IQueryPokemons>({ offset: 0, limit: 12 })
	const [pokemonsInfo, setPokemonsInfo] = useState<IPokemonInfo[]>([])

	const { data: pokemons, isSuccess, isLoading } = useGetPokemonsQuery(limit)

	useEffect(() => {
		if (pokemons && isSuccess) {
			const pokemonNames = pokemons.results.map(p => p.name)

			const fetchPokemons = async (names: string[]) => {
				const res = await fetchPokemonsByName(names)
				const newPokemons = res.filter(
					result => !pokemonsInfo.some(pokemon => pokemon.name === result.name)
				)
				setPokemonsInfo(prev => [...prev, ...newPokemons])
			}

			fetchPokemons(pokemonNames)
		}
	}, [isSuccess, pokemons])

	const handleClick = () => {
		setLimit(prev => {
			return {
				...prev,
				offset: prev.offset + prev.limit,
			}
		})
	}

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<>
			<CardsList pokemons={pokemonsInfo} />
			<LoadMoreButton handleClick={handleClick} />
		</>
	)
}

export default Home
