import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { useGetPokemonsQuery } from 'service/pokemonsApi/pokemons.api'
import { IPokemon } from 'types/interfaces'

// import s from './CardsList.module.scss'

interface Props {}

const CardsList: React.FC<Props> = () => {
	const [pokemons, setPokemons] = useState<IPokemon[]>([])
	const [limit, setLimit] = useState<string>('offset=0&limit=14')
	const [hasMore, setHasMore] = useState<boolean>(true)

	const { data, isSuccess } = useGetPokemonsQuery(limit)

	useEffect(() => {
		if (pokemons.length === data?.count) {
			setHasMore(false)
		}
	}, [data?.count, pokemons.length])

	useEffect(() => {
		if (data && isSuccess) {
			const results = data.results
			const newPokemons = results.filter(
				result => !pokemons.some(pokemon => pokemon.name === result.name)
			)
			setPokemons(prev => [...prev, ...newPokemons])
		}
	}, [data, isSuccess])

	const handleClick = () => {
		const nextLimit = data?.next?.split('?')[1] as string
		setLimit(nextLimit)
	}

	return (
		<InfiniteScroll
			dataLength={pokemons.length}
			next={handleClick}
			hasMore={hasMore}
			loader={<h4>Loading</h4>}
			endMessage={
				<p style={{ textAlign: 'center' }}>
					<b>Yay! You have seen it all</b>
				</p>
			}
		>
			{pokemons.map((p, ind) => (
				<p key={ind} style={{ color: 'wheat', height: '15px' }}>
					{p.name}
				</p>
			))}
		</InfiniteScroll>
	)
}

export default CardsList
