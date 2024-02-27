import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './modules/Layout'
import Home from './pages/Home'
import PokemonInfo from './pages/PokemonInfo'

import { ROUTES } from './routes/route.const'

const App: React.FC = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.POKEMON_INFO} element={<PokemonInfo />} />
			</Route>
		</Routes>
	)
}

export default App
