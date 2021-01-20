import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const User = ({ match }) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const username = match.params.username;
		// console.log(username);

		// API Get One User
		const getUser = async () => {
			const res = await axios.get(
				`https://api.github.com/users/${username}?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			console.log(res.data);
			setUser(res.data);
		};
		getUser();
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<div>
				<Link to='/'>Back</Link>
			</div>
			<div>
				<img
					src={user.avatar_url}
					alt=''
					width='200px'
					style={{ borderRadius: '50%' }}
				/>
				<h1>{user.login}</h1>
				<a href={user.html_url} target='blank'>
					Github Account
				</a>
			</div>
		</Fragment>
	);
};
