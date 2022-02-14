<template>
	<view class="center">
		<view class="login" @click="goLogin">
			<uni-list :border="false">
				<uni-list-item class="logo" link>
					<!-- 自定义 header -->
					<view slot="header" class="slot-box">
						<image class="logo-img" src="/static/list_02.jpeg"></image>
					</view>
					<!-- 自定义 body -->
					<view slot="body" class="slot-box slot-text">
						<view class="logo-title">
							<view class="uer-name">Hi，{{userInfo&&userInfo.userName ? userInfo.userName : '您未登录'}}
							</view>
						</view>
					</view>
					<!-- 自定义 footer-->
					<template slot="footer">
					</template>
				</uni-list-item>
			</uni-list>
		</view>
		<view class="group">
			<uni-list :border="false">
				<!-- <uni-list-chat :avatar-circle="true" thumb-size="lg" title="Hi，您未登录"
					avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
					note="ID:23232323232" link></uni-list-chat> -->
				<uni-list-item title="列表左侧带略缩图" note="列表描述信息" :thumb="avatarUrl" thumb-size="sm" link></uni-list-item>
				<!-- <uni-list-item title="列表左侧带略缩图" note="列表描述信息" :thumb="avatarUrl" thumb-size="lg" rightText="右侧文字"></uni-list-item> -->
				<!-- <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标"></uni-list-item> -->
				<uni-list-item clickable link :thumb="avatarUrl" thumb-size="sm" title="个人资料"></uni-list-item>
				<uni-list-item clickable link :thumb="avatarUrl" thumb-size="sm" title="我的订单"></uni-list-item>
				<uni-list-item clickable link :thumb="avatarUrl" thumb-size="sm" title="我的藏品"></uni-list-item>
				<uni-list-item clickable link :thumb="avatarUrl" thumb-size="sm" title="我的银行卡"></uni-list-item>
			</uni-list>
		</view>
		<view class="group">
			<uni-list :border="false">
				<uni-list-item clickable link :thumb="avatarUrl" thumb-size="sm" title="资金记录"></uni-list-item>
				<uni-list-item clickable link :thumb="avatarUrl" thumb-size="sm" title="积分记录"></uni-list-item>
				<uni-list-item clickable link :thumb="avatarUrl" thumb-size="sm" title="实名认证"></uni-list-item>
				<uni-list-item clickable link :thumb="avatarUrl" thumb-size="sm" title="设置"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex";
	export default {
		computed: mapGetters(['userInfo']),
		data() {
			return {
				login: false,
				avatarUrl: '/static/logo.png',
				// uerInfo: {}
			}
		},
		onLoad() {
			console.log('当前登录信息：')
			console.log(this.userInfo)
			//返回后调用refreshData 内方法
			uni.$on('refreshData', (opt) => {
				this.getData()
				console.log(1111111)
				console.log(opt)
			})
		},
		methods: {
			goLogin() {
				if (!this.login) {
					console.log('点击前往登录');
					uni.navigateTo({
						url: '/pages/login/login'
					});
				}
			},
			getData() {
				this.$http.workOrderAuditAttachment({
					"jobNumber": "CQDJ_404071541157",
					"pageParam": {
						"count": 10,
						"start": 1,
						"offSet": 0
					}
				}).then(res => {
					if (res.success) {
						console.log('接口请求成功了！！！！！')
					}
				})
			}
		}
	}
</script>

<style>
	/* #ifndef APP-PLUS-NVUE */
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		/* src: url('~@/static/text-icon.ttf') format('truetype'); */
	}

	page {
		background-color: #f8f8f8;
	}

	/* #endif*/

	/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */
	/* #ifdef MP-TOUTIAO */
	text :not(view) {
		font-family: texticons;
	}

	/* #endif */

	.center {
		flex: 1;
		flex-direction: column;
		background-color: #f8f8f8;
	}

	.login {
		/* background-color: #2b9939; */
	}

	.logo {
		width: 95%;
		height: 240rpx;
		padding: 20rpx;
		background-color: #2b9939;
		flex-direction: row;
		align-items: center;
	}

	.group {
		width: 90%;
		margin: 0 auto;
		padding: 10rpx 20rpx;
		border-radius: 30rpx;
		margin-top: 25rpx;
		background-color: #ffffff;
	}

	.logo-img {
		width: 150rpx;
		height: 150rpx;
		border-radius: 150rpx;
	}

	.logo-title {
		height: 150rpx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 30rpx;
	}

	.uer-name {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 38rpx;
		color: #FFFFFF;
		padding-top: 40rpx;
	}

	.go-login-navigat-arrow {
		font-size: 38rpx;
		color: #FFFFFF;
	}

	.login-title {
		height: 150rpx;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: 20rpx;
	}

	.center-list {
		flex-direction: column;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		width: 750rpx;
	}

	.center-list-item {
		height: 90rpx;
		width: 750rpx;
		flex-direction: row;
		padding: 0rpx 20rpx;
	}

	.border-bottom {
		border-bottom-width: 1rpx;
		border-color: #c8c7cc;
		border-bottom-style: solid;
	}

	.list-icon {
		width: 40rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 34rpx;
		color: #2F85FC;
		text-align: center;
		font-family: texticons;
		margin-right: 20rpx;
	}

	.list-text {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 34rpx;
		color: #555;
		flex: 1;
	}

	.navigat-arrow {
		height: 90rpx;
		width: 40rpx;
		line-height: 90rpx;
		font-size: 34rpx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}



	.slot-image {
		width: 100rpx;
	}
</style>
