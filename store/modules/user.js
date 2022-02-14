const user = {
	state: {
		token: null,
		userInfo: null,
	},

	mutations: {
		SET_USER_INFO: (state, userInfo) => {
			state.userInfo = userInfo;
		}

	},

	actions: {
		setUserInfo({
			commit
		}, userInfo) {
			commit('SET_USER_INFO', userInfo);
		},
		GetUserInfo({
			commit,
			state
		}, data) {
			return new Promise((resolve, reject) => {
				const newData = JSON.parse(data);
				if (newData != 'null' && newData != undefined) {
					commit('SET_USER_INFO', newData);
					resolve();
				} else {
					commit('SET_USER_INFO', null);
					reject('error');
				}
			});
		},
		// GetUserInfo({
		// 	commit,
		// 	state
		// }, data) {
		// 	return new Promise((resolve, reject) => {
		// 		const newData = JSON.parse(data);
		// 		if (newData != 'null' && newData != undefined) {
		// 			commit("UPDATE_USERINFO", newData);
		// 			resolve();
		// 		} else {
		// 			commit("UPDATE_USERINFO", null);
		// 		}
		// 	}).catch((err)=>{
		// 		reject(err);
		// 	});
		// }
	}
};


export default user;
