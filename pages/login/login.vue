<template>
	<view class="login-box">
		<view class="logo">
			<image src="/static/logo.png" mode="aspectFill"></image>
		</view>
		<view>
			<view class="input_box triangle">
				<input type="text" v-model="userName" @input="onInput" placeholder="请输入您的账号" placeholder-class="grey" />
			</view>
			<view class="input_box triangle">
				<input class="input_item" v-model="password" @input="onInput" :password="!isSee" placeholder="请输入您的密码"
					placeholder-class="grey" />
				<image v-if="isSee" src="/static/ic_logon_display.png" mode="aspectFit" @click="isSee = false"></image>
				<image v-else-if="!isSee" src="/static/ic_logon_hide.png" mode="aspectFit" @click="isSee = true">
				</image>
			</view>
			<view class="protocol_box">
				<checkbox-group @change="checkboxChange">
					<checkbox style="transform:scale(0.7)" value="isCheck" color="#5ab56a" />
				</checkbox-group>
				我已同意
				<text>《用户协议》</text>
				和
				<text>《隐私协议》</text>
			</view>
			<view class="btn_box">
				<button @click="onSubmit" class="active" v-if="btnShow">登录</button>
				<button v-else>登录</button>
			</view>
		</view>
		<!-- <form @submit="onSubmit">
			<view>
				<input name="loginName" placeholder="请输入账号" />
			</view>
			<view>
				<input name="password" :password="!isSee" placeholder="请输入密码" />
			</view>
			<view>
				<input name="captcha" placeholder="请输入验密码" />
			</view>
			<view @click="refresh">
				<image style="width: 50px; height: 50px; background-color: #eeeeee;" :src="imgUrl"></image>
			</view>
			<view>
				<button type="primary" form-type="submit">登录</button>
			</view>
		</form> -->
	</view>
</template>

<script>
	import Utils from '@/utils/utils';
	export default {
		data() {
			return {
				isSee: false,
				btnShow: false,
				userName: '',
				password: '',
				isCheck: false,

				loginForm: '',
				captcha: '',
				loginToken: '',
				imgUrl: ''
			}
		},
		onLoad() {
			// this.getData()
		},
		methods: {
			onInput() {
				setTimeout(() => {
					if (this.userName && this.password) {
						this.btnShow = true;
					} else {
						this.btnShow = false;
					}
				}, 500);
			},
			checkboxChange(e) {
				if (e.detail.value.length) {
					this.isCheck = true
				} else {
					this.isCheck = false
				}
			},
			onSubmit(e) {
				if (!this.isCheck) {
					uni.showToast({
						title: '请先同意《用户协议》和《隐私协议》',
						icon: 'none'
					});
					return;
				}
				if (!this.userName) {
					uni.showToast({
						title: '请输入账号',
						icon: 'none'
					});
					return;
				}
				if (!this.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return;
				}
				uni.showToast({
					title: '登录成功',
					duration: 2000,
					success: () => {
						this.$store.dispatch('GetUserInfo', JSON.stringify({
							userName: this.userName
						}));
						setTimeout(() => {
							//登录成功返回上一级页面
							uni.navigateBack();
						}, 1000);
						
					}
				});
			},

			//获取验证码
			getData() {
				this.$http.getVerifyCode().then(res => {
					if (res.success) {
						this.loginToken = res.data[0].token
						this.imgUrl = ('data:image/jpg;base64,' + res.data[0].data).replace(/[\r\n]/g, "")
					}
				}).catch((err) => {
					console.log(err);
				});
			},
			refresh() {
				this.getData()
			},
			login() {
				this.$http.login({
					loginName: this.loginForm.loginName.replace(/\s+/g, ''),
					password: Utils.encrypt(
						this.loginForm.password.replace(/\s+/g, '')
					),
					captcha: this.loginForm.captcha.replace(/\s+/g, ''),
				}, {
					token: this.loginToken
				}).then(res => {
					if (res.success) {
						const data = res.data[0]
						uni.setStorageSync('token', data.userAccessToken);
						// this.$store.commit('UPDATE_USERINFO', data);
						this.$store.dispatch('GetUserInfo', JSON.stringify(data));
						//刷新上一级页面的数据
						uni.$emit('refreshData', {
							name: 123
						});
						//登录成功返回上一级页面
						uni.navigateBack();
					}
				}).catch((err) => {
					console.log(err);
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.login-box {
		padding: 0 50rpx 50rpx 50rpx;
	}

	.logo {
		image {
			margin: 80rpx auto;
			width: 180rpx;
			height: 180rpx;
			border-radius: 50%;
			display: block;
		}
	}

	.input_box {
		display: flex;
		align-items: center;
		height: 90rpx;
		background-color: #f8f9fb;
		border-radius: 8rpx;
		border: solid 2rpx #efeef4;
		padding: 0rpx 40rpx;
		margin-top: 30rpx;

		image {
			width: 36rpx;
			height: 24rpx;
		}

		input {
			flex: 1;
			font-size: 28rpx;
			color: #333;
			height: 60rpx;
		}

		.input_item {
			font-size: 28rpx;
			border: 0px;
			flex: 1;
			background-color: #f8f9fb;
			height: 88rpx;
			width: 100%;
			outline: none;
			//margin-left: 32rpx;
		}

		button {
			height: 60rpx;
			background-color: #f8f9fb;
			font-size: 28rpx;
			padding: 0 14rpx;

			line-height: 60rpx;
			margin-left: 20rpx;
			//margin-right: 40rpx;
		}

		.grey {
			color: #999999;
		}
	}

	.btn_box {
		margin-top: 40rpx;

		button {
			font-size: 32rpx;
			background-color: #e5e5e5;
			color: #fff;
			height: 90rpx;
			line-height: 90rpx;
			border-radius: 8rpx;

			&.active {
				background-image: linear-gradient(90deg, #2b9939 0%, #41c552 100%);
				color: #fff;
			}
		}
	}

	.protocol_box {
		margin-top: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		font-size: 28rpx;
		color: #333333;

		text {
			color: #2b9939;/*#5ab56a*/
		}
	}
</style>
