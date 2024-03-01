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
	const [isLoad, setIsLoad] = useState<boolean>(false)

	const { typeId } = usePokemonType()

	const {
		data: pokemons,
		isSuccess: isSuccessPokemon,
		isError: isErrorPokemon,
		error: errorPokemon,
	} = useGetPokemonsQuery(limit)

	const {
		data: pokemonsByType,
		isSuccess: isSuccessByType,
		isError: isErrorByType,
		error: errorByType,
	} = useGetPokemonsByTypeQuery(typeId, { skip: !typeId })

	useEffect(() => {
		if (!typeId) {
			setIsLoad(false)
		}
		setPokemonInfoByType([])
	}, [typeId])

	useEffect(() => {
		setIsLoad(true)
		if (pokemons && isSuccessPokemon) {
			const pokemonNames = pokemons.results.map(p => p.name)
			fetchPokemons(pokemonNames, pokemonsInfo).then(data => {
				if (data) {
					setPokemonsInfo(prev => [...prev, ...data])
					setIsLoad(false)
				}
			})
		}

		if (isErrorPokemon) {
			console.log(errorPokemon)
		}
	}, [isSuccessPokemon, pokemons, isErrorPokemon])

	useEffect(() => {
		if (typeId) {
			setIsLoad(true)
		}
		if (pokemonsByType && isSuccessByType) {
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
	}, [isSuccessByType, pokemonsByType, isErrorByType, typeId])

	const handleClick = () => {
		setLimit(prev => ({
			...prev,
			offset: prev.offset + prev.limit,
		}))
	}

	if (isLoad) {
		return (
			<p style={{ fontSize: '20px', color: 'white', zIndex: '100000' }}>
				Loading...
			</p>
		)
	}

	return pokemonInfoByType.length === 0 && !typeId ? (
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
