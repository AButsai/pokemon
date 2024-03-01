import React, { useEffect, useState } from 'react'

import CardsList from 'modules/CardsList/CardList'

import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton'

import {
	useGetPokemonsByTypeQuery,
	useGetPokemonsQuery,
} from 'service/pokemonsApi/pokemons.api'

import { fetchPokemons } from 'helpers/fetchPokemons'
import { usePokemonType } from 'hooks/usePokemonType'
import { IPokemonInfo, IQueryPokemons } from 'types/interfaces'

const Home: React.FC = () => {
	const [limit, setLimit] = useState<IQueryPokemons>({ offset: 0, limit: 12 })
	const [pokemonsInfo, setPokemonsInfo] = useState<IPokemonInfo[]>([])
	const [pokemonInfoByType, setPokemonInfoByType] = useState<IPokemonInfo[]>([])

	const { typeId } = usePokemonType()

	const {
		data: pokemons,
		isSuccess: isSuccessPokemon,
		isLoading: isLoadingPokemon,
		isError: isErrorPokemon,
		error: errorPokemon,
	} = useGetPokemonsQuery(limit)

	const {
		data: pokemonsByType,
		isSuccess: isSuccessByType,
		isLoading: isLoadingByType,
		isError: isErrorByType,
		error: errorByType,
	} = useGetPokemonsByTypeQuery(typeId, { skip: !typeId })

	useEffect(() => {
		setPokemonInfoByType([])
	}, [typeId])

	useEffect(() => {
		if (pokemons && isSuccessPokemon) {
			const pokemonNames = pokemons.results.map(p => p.name)
			fetchPokemons(pokemonNames, pokemonsInfo).then(data =>
				setPokemonsInfo(prev => [...prev, ...data])
			)
		}

		if (isErrorPokemon) {
			console.log(errorPokemon)
		}
	}, [isSuccessPokemon, pokemons, isErrorPokemon])

	useEffect(() => {
		if (pokemonsByType && isSuccessByType) {
			const pokemonNames = pokemonsByType.pokemon.map(p => p.pokemon.name)
			fetchPokemons(pokemonNames, pokemonInfoByType).then(data =>
				setPokemonInfoByType(data)
			)
		}

		if (isErrorByType) {
			console.log(errorByType)
		}
	}, [isSuccessByType, pokemonsByType, isErrorByType])

	const handleClick = () => {
		setLimit(prev => {
			return {
				...prev,
				offset: prev.offset + prev.limit,
			}
		})
	}

	if (isLoadingPokemon || isLoadingByType) {
		return <p>Loading...</p>
	}

	return pokemonInfoByType.length === 0 ? (
		<>
			<CardsList pokemons={pokemonsInfo} />
			{pokemonsInfo.length !== 0 && (
				<LoadMoreButton handleClick={handleClick} />
			)}
		</>
	) : (
		<CardsList pokemons={pokemonInfoByType} />
	)
}

export default Home
