import React from 'react'

import CardsList from 'modules/CardsList/CardList'

import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton'

import { useGetPokemons } from 'hooks/useGetPokemons'
import { useGetPokemonsByType } from 'hooks/useGetPokemonsByType'
import { usePokemonIdByType } from 'hooks/usePokemonIdByType'

const Home: React.FC = () => {
	const { typeId } = usePokemonIdByType()
	const { pokemonsInfo, handleClick } = useGetPokemons()
	const { isLoad, pokemonInfoByType } = useGetPokemonsByType()

	if (isLoad) {
		return <p style={{ fontSize: '20px', color: 'white' }}>Loading...</p>
	}

	return (
		<>
			<CardsList pokemons={typeId ? pokemonInfoByType : pokemonsInfo} />
			{!typeId && <LoadMoreButton handleClick={handleClick} />}
		</>
	)
}

export default Home
