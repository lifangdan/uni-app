import baseUrl from './config.js'
import qs from 'qs'

let BASE_URL = baseUrl

// 解决跨域
// #ifdef H5
BASE_URL = '/'
// #endif

const header = {}
const request = (params, header) => {
	let url = params.url
	let method = params.method || 'GET';
	let data = params.data || {};
	let defaultHeader = {
		// 'Accept': 'application/json',
		"Content-Type": "application/json; charset=UTF-8",
		'X-Requested-With': 'XMLHttpRequest',
	}
	console.log(333333333)
	console.log(uni.getStorageSync('token'))
	if (uni.getStorageSync('token')) {
		defaultHeader["ManageUserAccessToken"] = uni.getStorageSync('token')
	}

	//处理 POST请求
	let postHeader = {}
	method = method.toUpperCase()
	if (method == 'POST') {
		// postHeader = {
		// 	// 'Content-Type': 'application/x-www-form-urlencoded',
		// }
		// data = qs.stringify(data)
	}

	return new Promise((resolve, reject) => {
		uni.request({
			method: method,
			url: BASE_URL + url,
			data: data,
			header: Object.assign(defaultHeader, header),
			dataType: 'json'
		}).then((response) => {
			let [error, res] = response;
			if (res.statusCode === 200) {
				const data = res.data
				if (data.success) {
					resolve(data);
				} else {
					uni.showToast({
						title: data.msg,
						duration: 3000,
						icon: 'error'
					});
				}
			} else {
				uni.showToast({
					title: res.statusCode + ':::' + res.data,
					duration: 3000,
					icon: 'error'
				});
			}
			// 登录过期
			// if (res.code == 1000) {
			// 	uni.showToast({
			// 		title: '登录过期,请重新登录',
			// 		duration: 3000
			// 	});
			// };

		}).catch((error) => {
			reject(error);
		});
	});
}
export default request
