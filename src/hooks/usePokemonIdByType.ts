import { useMemo } from 'react'
import { useAppSelector } from './useReduxHooks'

export const usePokemonIdByType = () => {
	const typeId = useAppSelector(state => state.pokemonTypeId.id)

	return useMemo(() => ({ typeId }), [typeId])
}
