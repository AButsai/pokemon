import { api } from 'service/api.service'
import {
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
		getPokemonsByType: builder.query<ITypePokemonResponse, number | null>({
			query: id => ({
				url: `type/${id}`,
				method: 'GET',
			}),
			providesTags: ['pokemon'],
		}),
	}),
})

export const { useGetPokemonsQuery, useGetPokemonsByTypeQuery } = pokemonApi
