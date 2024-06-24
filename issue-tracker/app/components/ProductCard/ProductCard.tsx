import React from 'react'
import AddToCard from '../AddToCard/AddToCard'
import styles from './ProductCard.module.css'

const ProductCard = () => {
	return (
		<div className={styles.card}>
			<AddToCard />
		</div>
	)
}

export default ProductCard
