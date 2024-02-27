import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	pokemon: any,
}

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		pokemons: (state, { payload }: PayloadAction<any>) => {
			state.pokemon = payload
		},
	},
})

export const { pokemons } = pokemonSlice.actions
export default pokemonSlice.reducer
