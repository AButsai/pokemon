import React, { useState } from 'react'

import { IPokemonInfo } from 'types/interfaces'

import Modal from 'components/Modal'

import CardItem from 'modules/CardItem/CardItem'
import CartItemInfo from 'modules/CardItem/CartItemInfo'

import s from './CardsList.module.scss'

interface Props {
	pokemons: IPokemonInfo[]
}

const CardsList: React.FC<Props> = ({ pokemons }) => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
	const [selectedPokemon, setSelectedPokemon] = useState<IPokemonInfo | null>(
		null
	)

	const handleOpen = (pokemon: IPokemonInfo) => {
		setSelectedPokemon(pokemon)
		setIsOpenModal(true)
	}

	const handleClose = () => {
		setIsOpenModal(false)
	}

	return (
		<>
			<div>
				<ul className={s.list}>
					{pokemons.map((pokemon, ind) => (
						<CardItem
							key={ind}
							props={pokemon}
							handleOpen={() => handleOpen(pokemon)}
						/>
					))}
				</ul>
			</div>
			{isOpenModal && (
				<Modal onClick={handleClose}>
					{selectedPokemon && <CartItemInfo pokemon={selectedPokemon} />}
				</Modal>
			)}
		</>
	)
}

export default CardsList
