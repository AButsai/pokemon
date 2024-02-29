import { IMovies, IStats, ITotalInfo, ITypesPokemon } from 'types/interfaces'
import { capitalizeFirstLetter } from './capitalizeFirstLetter'

export const totalInfoPokemon = (
	stats: IStats[],
	types: ITypesPokemon[],
	weight: number,
	movies: IMovies[]
) => {
	const array: ITotalInfo[] = []

	const typeName = types.map(t => capitalizeFirstLetter(t.type.name)).join(', ')
	array.push({ name: 'Type', meaning: typeName })

	for (const stat of stats) {
		array.push({
			name: formatStatName(stat.stat.name) as string,
			meaning: stat.base_stat,
		})
	}

	array.push({ name: 'Weight', meaning: weight })
	array.push({ name: 'Total movies', meaning: movies.length })

	return array
}

const formatStatName = (name: string) => {
	switch (name) {
		case 'hp':
			return 'HP'
		case 'special-attack':
			return 'SP Attack'
		case 'special-defense':
			return 'SP Defense'
		default:
			return capitalizeFirstLetter(name)
	}
}
