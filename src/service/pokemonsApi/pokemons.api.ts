import { api } from '../api.service'

const pokemonApi = api.injectEndpoints({
	endpoints: builder => ({
		getPokemons: builder.query({
			query: () => ({
				url: 'pokemon',
				method: 'GET',
			}),
			providesTags: ['pokemon'],
		}),
	}),
})

export const { useGetPokemonsQuery } = pokemonApi
