import { fetchPokemonsByName } from 'service/pokemonsApi/get.pokemons.info'
import { IPokemonInfo } from 'types/interfaces'

export const fetchPokemons = async (
	names: string[],
	pokemons: IPokemonInfo[]
) => {
	const res = await fetchPokemonsByName(names)
	const newPokemons = res?.filter(
		result => !pokemons.some(pokemon => pokemon.name === result.name)
	)

	return newPokemons
}
