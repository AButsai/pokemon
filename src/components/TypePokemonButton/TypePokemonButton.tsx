import React from 'react'

import { useDispatchAction } from 'hooks/useDispatchAction'

import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'

import { ITypesPokemon } from 'types/interfaces'

import s from './TypePokemonButton.module.scss'

interface Props {
	types: ITypesPokemon[]
}

const TypePokemonButton: React.FC<Props> = ({ types }) => {
	const { setTypeId } = useDispatchAction()

	const handleClick = (url: string) => {
		const id = parseInt(url.replace(/^.*\/(\d+)\/$/, '$1'))
		setTypeId({ id })
	}

	return types.map(t => (
		<button
			key={t.type.name}
			onClick={() => handleClick(t.type.url)}
			className={`${s[t.type.name]} ${s.btn}`}
		>
			{capitalizeFirstLetter(t.type.name)}
		</button>
	))
}

export default TypePokemonButton
