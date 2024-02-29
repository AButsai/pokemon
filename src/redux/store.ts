import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { api } from 'service/api.service'
import { pokemonTypeIdReducer } from 'service/pokemonsApi/pokemon.slice'

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	pokemonTypeId: pokemonTypeIdReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ serializableCheck: false }).concat([api.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
