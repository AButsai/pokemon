import React from 'react'

import { useDispatchAction } from 'hooks/useDispatchAction'
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'

import s from './TypePokemonButton.module.scss'

interface Props {
	name: string
	url: string
}

const TypePokemonButton: React.FC<Props> = ({ name, url }) => {
	const { setTypeId } = useDispatchAction()
	const id = parseInt(url.replace(/^.*\/(\d+)\/$/, '$1'))

	const handleClick = () => {
		setTypeId({ id })
	}

	return (
		<button onClick={handleClick} className={`${s[name]} ${s.btn}`}>
			{capitalizeFirstLetter(name)}
		</button>
	)
}

export default TypePokemonButton
