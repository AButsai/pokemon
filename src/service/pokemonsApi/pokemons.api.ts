import { api } from 'service/api.service'
import {
	IPokemonInfo,
	IQueryPokemons,
	IResponsePokemons,
	ITypePokemonResponse,
} from 'types/interfaces'

const pokemonApi = api.injectEndpoints({
	endpoints: builder => ({
		getPokemons: builder.query<IResponsePokemons, IQueryPokemons>({
			query: ({ offset, limit }) => ({
				url: `pokemon?offset=${offset}&limit=${limit}`,
				method: 'GET',
			}),
			providesTags: ['pokemon'],
		}),
		getPokemonByName: builder.query<IPokemonInfo, string>({
			query: name => ({
				url: `pokemon/${name}`,
				method: 'GET',
			}),
			providesTags: ['pokemon'],
		}),
		getPokemonsByType: builder.query<ITypePokemonResponse, number>({
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
	useGetPokemonByNameQuery,
	useGetPokemonsByTypeQuery,
} = pokemonApi
