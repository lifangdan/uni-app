<template>
	<view class="content">
		<view>
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500"
				indicator-color="#666666" indicator-active-color="#ffffff">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>


		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '首页'
			}
		},
		onLoad() {
			console.log(222222222)
			// this.getData()
		},
		methods: {
			getData() {
				this.$http.getVerifyCode().then(res => {
					if (res.success) {
						console.log(111111111)
						console.log(res)
					}
				}).catch((err) => {
					console.log(err);
				});
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.swiper {
		height: 300rpx;
		width: 750rpx;
	}

	.swiper-item {
		height: 100%;
		width: 100%;
		background-color: #2b9939;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
