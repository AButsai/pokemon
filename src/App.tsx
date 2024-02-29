import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from 'modules/Layout/Layout'
import HomePage from 'pages/HomePage/HomePage'

import { ROUTES } from 'routes/route.const'

const App: React.FC = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={ROUTES.HOME} element={<HomePage />} />
			</Route>
		</Routes>
	)
}

export default App
