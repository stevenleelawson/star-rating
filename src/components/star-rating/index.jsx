import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

export default function StarRating({stars = 10}) {
	const [ rating, setRating ] = useState(0)
	const [ hover, setHover ] = useState(0)

	function handleClick(index) {
		setRating(index)
	}

	function handleHover(index) {
		setHover(index);
	}

	function handleLeave(index) {
		setHover(index)
	}
	return (
		<div>
			{
				[...Array(stars)].map((star, idx) => {
					return (
						<FaStar
							className={idx <= (hover || rating) ? 'active' : 'inactive'}
							key={idx}
							onMouseEnter={() => handleHover(idx)}
							onMouseLeave={() => handleLeave(idx)}
							onClick={() => handleClick(idx)}
						/>
					)
				})
			}
		</div>
	)
}
