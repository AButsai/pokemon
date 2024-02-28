import { api } from 'service/api.service'
import { IResponsePokemon } from 'types/interfaces'

const pokemonApi = api.injectEndpoints({
	endpoints: builder => ({
		getPokemons: builder.query<IResponsePokemon, string | null>({
			query: limit => ({
				url: `pokemon?${limit}`,
				method: 'GET',
			}),
			providesTags: ['pokemon'],
		}),
		getPokemonByName: builder.query<any, string>({
			query: name => ({
				url: `pokemon/${name}`,
				method: 'GET',
			}),
			providesTags: ['pokemon'],
		}),
		getPokemonsByType: builder.query<any, number>({
			query: type => ({
				url: `type/${type}`,
				method: 'GET',
			}),
			providesTags: ['pokemon'],
		}),
	}),
})

export const {
	useGetPokemonsQuery,
	useLazyGetPokemonByNameQuery,
	useGetPokemonsByTypeQuery,
} = pokemonApi
