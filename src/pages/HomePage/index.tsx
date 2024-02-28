import React, { useEffect, useState } from 'react'

import CardsList from 'modules/CardsList'

import { useGetPokemonsQuery } from 'service/pokemonsApi/pokemons.api'
import { IQueryPokemons } from 'types/interfaces'

const HomePage: React.FC = () => {
	// const [pokemons, setPokemons] = useState<IPokemon[]>([])
	const [limit, setLimit] = useState<IQueryPokemons>({ offset: 0, limit: 12 })
	const [isMyFetching, setIsFetchingDown] = useState<boolean>(false)
	const [isMyFetchingUp, setIsMyFetchingUp] = useState<boolean>(false)

	const { data: pokemon, isSuccess } = useGetPokemonsQuery(limit)

	useEffect(() => {
		if (isMyFetching) {
			setLimit(prev => {
				return {
					...prev,
					offset: prev.offset + prev.limit,
				}
			})
			setIsFetchingDown(false)
		}
	}, [isMyFetching])

	useEffect(() => {
		if (isMyFetchingUp) {
			setLimit(prev => {
				return {
					...prev,
					offset: prev.offset - prev.limit,
				}
			})
			setIsMyFetchingUp(false)
		}
	}, [isMyFetchingUp])

	useEffect(() => {
		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleScroll = () => {
		const target = document.documentElement
		if (target.scrollTop < 150) {
			setIsMyFetchingUp(true)
		}
		if (target.scrollHeight - target.scrollTop - window.innerHeight < 150) {
			setIsFetchingDown(true)
			window.scrollTo(0, target.scrollHeight + target.scrollTop)
		}
		console.log('target.scrollTop :>> ', target.scrollTop)
	}

	return <>{isSuccess && <CardsList pokemons={pokemon.results} />}</>
}

export default HomePage
