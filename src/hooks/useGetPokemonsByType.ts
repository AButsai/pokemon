import { useEffect, useState } from 'react'

import { fetchPokemons } from 'helpers/fetchPokemons'
import { useGetPokemonsByTypeQuery } from 'service/pokemonsApi/pokemons.api'
import { IPokemonInfo } from 'types/interfaces'
import { usePokemonIdByType } from './usePokemonIdByType'

export const useGetPokemonsByType = () => {
	const [pokemonInfoByType, setPokemonInfoByType] = useState<IPokemonInfo[]>([])
	const [isLoad, setIsLoad] = useState<boolean>(false)

	const { typeId } = usePokemonIdByType()

	const id = typeId ? typeId : 0

	const {
		data: pokemonsByType,
		isSuccess: isSuccessByType,
		isError: isErrorByType,
		error: errorByType,
	} = useGetPokemonsByTypeQuery(id, { skip: !typeId })

	useEffect(() => {
		if (typeId) {
			setIsLoad(true)
		} else {
			setPokemonInfoByType([])
		}
	}, [typeId])

	useEffect(() => {
		if (pokemonsByType && isSuccessByType && typeId) {
			const pokemonNames = pokemonsByType.pokemon.map(p => p.pokemon.name)

			fetchPokemons(pokemonNames, pokemonInfoByType).then(data => {
				if (data) {
					setPokemonInfoByType(data)
					setIsLoad(false)
				}
			})
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}

		if (isErrorByType) {
			console.log(errorByType)
		}
	}, [isSuccessByType, pokemonsByType, isErrorByType, typeId, errorByType])

	return { isLoad, pokemonInfoByType }
}
