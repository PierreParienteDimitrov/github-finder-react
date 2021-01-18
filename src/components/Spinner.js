import React from 'react';
import Loading from '../assets/Loading.gif';

export const Spinner = () => {
	return (
		<div>
			<img
				src={Loading}
				alt='Loading...'
				style={{ width: '60px', margin: 'auto', display: 'block' }}
			/>
		</div>
	);
};
