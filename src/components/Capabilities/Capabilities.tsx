import React from 'react'

import { ITotalInfo } from 'types/interfaces'

import s from './Capabilities.module.scss'

interface Props {
	capabilities: ITotalInfo[]
}

const Capabilities: React.FC<Props> = ({ capabilities }) => {
	return capabilities.map(c => (
		<div key={c.name} className={s.wrap}>
			<p className={s.name}>{c.name}</p>
			<p className={s.meaning}>{c.meaning}</p>
		</div>
	))
}

export default Capabilities
