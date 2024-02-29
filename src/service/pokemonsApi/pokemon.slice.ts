import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
	id: number | null
}

const initialState: IInitialState = {
	id: null,
}

const pokemonTypeId = createSlice({
	name: 'pokemonTypeId',
	initialState: initialState,
	reducers: {
		setTypeId: (state, { payload }: PayloadAction<IInitialState>) => {
			state.id = payload.id
		},
	},
})

export const { setTypeId } = pokemonTypeId.actions
export const pokemonTypeIdReducer = pokemonTypeId.reducer
