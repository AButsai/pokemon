import { useMemo } from 'react'
import { useAppSelector } from './useReduxHooks'

export const usePokemonType = () => {
	const typeId = useAppSelector(state => state.pokemonTypeId.id)

	return useMemo(() => ({ typeId }), [typeId])
}
