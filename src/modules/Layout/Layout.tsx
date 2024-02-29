import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from 'modules/Header/Header'

import s from './Layout.module.scss'

interface Props {}

const Layout: React.FC<Props> = () => {
	return (
		<>
			<Header />
			<main className={s.main}>
				<div className={s.container}>
					<Outlet />
				</div>
			</main>
		</>
	)
}

export default Layout
