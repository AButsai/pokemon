import React from 'react'

import { ICONS } from 'icons'

import { useDispatchAction } from 'hooks/useDispatchAction'

import s from './Header.module.scss'

const Header: React.FC = () => {
	const { setTypeId } = useDispatchAction()

	const handleClick = () => {
		setTypeId({ id: null })
	}

	return (
		<header className={s.header}>
			<div className={s.logoWrap}>
				<ICONS.HEADER_LOGO className={s.logo} />
			</div>
			<button className={s.btn} onClick={handleClick}>
				All Pokemons
			</button>
		</header>
	)
}

export default Header
