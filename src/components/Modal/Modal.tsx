import { FC, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { ICONS } from 'icons'

import s from './Modal.module.scss'

const modal = document.querySelector<Element>('#modal')

interface IModalProps {
	onClick: () => void
	children?: ReactNode
}

const Modal: FC<IModalProps> = ({ onClick, children }) => {
	useEffect(() => {
		document.body.classList.add('blockScroll')
		document.addEventListener('keydown', onClickEscClose)

		return () => {
			document.removeEventListener('keydown', onClickEscClose)
			document.body.classList.remove('blockScroll')
		}
	})

	const onClickEscClose = (e: KeyboardEvent) => {
		if (e.code === 'Escape') {
			onClick()
		}
	}

	const onClickBackdropClose = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClick()
		}
	}

	return modal
		? createPortal(
				<div id='backdrop' className={s.backdrop}>
					<div className={s.modal} onClick={onClickBackdropClose}>
						<div className={s.modalContent}>
							<button
								type='button'
								aria-label='Modal window close button'
								onClick={onClick}
								className={s.btnClose}
							>
								<ICONS.ICON_CLOSE className={s.IconClose} />
							</button>
							{children}
						</div>
					</div>
				</div>,
				modal
		  )
		: null
}

export default Modal
