import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Spinner } from '../components/Spinner';

export const Search = () => {
	const [text, setText] = useState('');
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);

	// Get Users
	const getUsers = async () => {
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// console.log(res.data.items);
		setUsers(res.data.items);
		setLoading(false);
	};

	// Input onChange
	const onChange = (e) => {
		// console.log(e.target.value);
		setText(e.target.value);
	};

	// Submit
	const onSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setShow(true);
		getUsers();
	};

	// Clear Search
	const clearSearch = (e) => {
		e.preventDefault();
		setText('');
		setUsers([]);
		setShow(false);
	};

	const form = () => {
		return (
			<div>
				<form onSubmit={onSubmit}>
					<input
						type='text'
						name='text'
						placeholder='Search users'
						value={text}
						onChange={onChange}
					/>
					<input type='submit' placeholder='Search users' />

					{show && <button onClick={clearSearch}>Clear</button>}

					<h1>This is your search: {text}</h1>

					{users.map((user) => {
						return (
							<div key={user.id}>
								<h1>{user.login}</h1>
								<Link to={`/users/${user.login}`}>More Info</Link>
							</div>
						);
					})}
				</form>
			</div>
		);
	};

	return (
		<div>
			{loading ? (
				<div>
					<Spinner />
				</div>
			) : (
				form()
			)}
		</div>
	);
};
