import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from 'modules/Layout'
import HomePage from 'pages/HomePage'
import PokemonInfoPage from 'pages/PokemonInfoPage'

import { ROUTES } from 'routes/route.const'

const App: React.FC = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={ROUTES.HOME} element={<HomePage />} />
				<Route path={ROUTES.POKEMON_INFO} element={<PokemonInfoPage />} />
			</Route>
		</Routes>
	)
}

export default App
