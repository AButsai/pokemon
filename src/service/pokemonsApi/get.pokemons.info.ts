import axios from 'axios'
import { IPokemonInfo } from 'types/interfaces'

export const fetchPokemonsByName = async (names: string[]) => {
	const BASE_URL = import.meta.env.VITE_BASE_URL
	const responses: IPokemonInfo[] = await Promise.all(
		names.map(name =>
			axios.get(`${BASE_URL}pokemon/${name}`).then(response => response.data)
		)
	)

	return responses
}
