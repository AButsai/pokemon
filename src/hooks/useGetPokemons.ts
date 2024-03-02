import { useEffect, useState } from 'react'

import { fetchPokemons } from 'helpers/fetchPokemons'
import { useGetPokemonsQuery } from 'service/pokemonsApi/pokemons.api'
import { IPokemonInfo, IQueryPokemons } from 'types/interfaces'
import { usePokemonIdByType } from './usePokemonIdByType'

export const useGetPokemons = () => {
	const [limit, setLimit] = useState<IQueryPokemons>({ offset: 0, limit: 12 })
	const [pokemonsInfo, setPokemonsInfo] = useState<IPokemonInfo[]>([])

	const { typeId } = usePokemonIdByType()

	const {
		data: pokemons,
		isSuccess: isSuccessPokemon,
		isError: isErrorPokemon,
		error: errorPokemon,
	} = useGetPokemonsQuery(limit)

	useEffect(() => {
		if (pokemons && isSuccessPokemon) {
			const pokemonNames = pokemons.results.map(p => p.name)
			fetchPokemons(pokemonNames, pokemonsInfo).then(data => {
				if (data) {
					setPokemonsInfo(prev => [...prev, ...data])
				}
			})
		}

		if (isErrorPokemon) {
			console.log(errorPokemon)
		}
	}, [isSuccessPokemon, pokemons, isErrorPokemon, typeId])

	const handleClick = () => {
		setLimit(prev => ({
			...prev,
			offset: prev.offset + prev.limit,
		}))
	}

	return { pokemonsInfo, handleClick }
}
