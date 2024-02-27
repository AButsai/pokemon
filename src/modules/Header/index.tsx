import React from 'react'
import { ICONS } from '../../icons'

import s from './Header.module.scss'

interface Props {}

const Header: React.FC<Props> = () => {
	return (
		<header className={s.header}>
			<div className={s.logoWrap}>
				<ICONS.HEADER_LOGO className={s.logo} />
			</div>
		</header>
	)
}

export default Header
