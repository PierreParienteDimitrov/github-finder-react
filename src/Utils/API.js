// // API Call
// useEffect(() => {
// 	const getUsers = async () => {
// 		const res = await axios.get(
// 			`https://api.github.com/search/users?q=${text}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
// 		);
// 		console.log(res.data.items);
// 		setUsers(res.data.items);
// 	};

// 	getUsers();
// }, [text]);
