import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { rootActions } from '../service/actions/root-actions'
import { useAppDispatch } from './useReduxHooks'

export const useDispatchAction = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
