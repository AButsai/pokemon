import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from 'modules/Header/Header'

import s from './Layout.module.scss'

const Layout: React.FC = () => {
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
