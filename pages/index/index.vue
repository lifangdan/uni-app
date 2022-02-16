<template>
	<view class="content">
		<view>
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500"
				indicator-color="#5d5856" indicator-active-color="#ffffff">
				<swiper-item class="item">
					<image class="banner" src="/static/banner_01.png"></image>
				</swiper-item>
				<swiper-item class="item">
					<image class="banner" src="/static/banner_01.png"></image>
				</swiper-item>
				<swiper-item class="item">
					<image class="banner" src="/static/banner_01.png"></image>
				</swiper-item>
				<swiper-item class="item">
					<image class="banner" src="/static/banner_01.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="goods-list">
			<view class="goods-item">
				<view class="goods-img">
					<image src="/static/index_01.png" mode="widthFix"></image>
					<view class="countdown">
						即将开售 剩余时间0天2小时50分
					</view>
				</view>
				<view class="good-info">
					<view class="title">
						<view class="t-left">致命涂鸦2.0 26#</view>
						<view class="t-right">
							<view class="heart">
								<uni-icons type="heart" size="20" color="#5ab56a"></uni-icons>
							</view>
							<text>333</text>
						</view>
					</view>
					<view class="stock">
						<text>可售 <label>21</label> 份 |</text> 限量 <label>100</label> 份
					</view>
					<view class="user">
						<view class="u-left">
							<image src="/static/list_01.jpeg"></image>
							<text>MetaOne 广州元朝科技有限公司</text>
						</view>
						<view class="u-right">
							<label>￥</label>
							<text class="price">1636</text>
						</view>
					</view>
				</view>
			</view>
			<view class="goods-item">
				<view class="goods-img">
					<image src="/static/index_02.png" mode="widthFix"></image>
					<view class="countdown">
						即将开售 剩余时间0天2小时50分
					</view>
				</view>
				<view class="good-info">
					<view class="title">
						<view class="t-left">致命涂鸦2.0 26#</view>
						<view class="t-right">
							<view class="heart">
								<uni-icons type="heart-filled" size="20" color="#5ab56a"></uni-icons>
							</view>
							<text>444</text>
						</view>
					</view>
					<view class="stock">
						<text>可售 <label>21</label> 份 |</text> 限量 <label>100</label> 份
					</view>
					<view class="user">
						<view class="u-left">
							<image src="/static/list_01.jpeg"></image>
							<text>MetaOne 广州元朝科技有限公司</text>
						</view>
						<view class="u-right">
							<label>￥</label>
							<text class="price">1636</text>
						</view>
					</view>
				</view>
			</view>
			<view class="goods-item">
				<view class="goods-img">
					<image src="/static/index_03.png" mode="widthFix"></image>
					<view class="countdown">
						即将开售 剩余时间0天2小时50分
					</view>
				</view>
				<view class="good-info">
					<view class="title">
						<view class="t-left">致命涂鸦2.0 26#</view>
						<view class="t-right">
							<view class="heart">
								<uni-icons type="heart-filled" size="20" color="#5ab56a"></uni-icons>
							</view>
							<text>555</text>
						</view>
					</view>
					<view class="stock">
						<text>可售 <label>21</label> 份 |</text> 限量 <label>100</label> 份
					</view>
					<view class="user">
						<view class="u-left">
							<image src="/static/list_01.jpeg"></image>
							<text>MetaOne 广州元朝科技有限公司</text>
						</view>
						<view class="u-right">
							<label>￥</label>
							<text class="price">1636</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<uni-load-more :status="status" :contentText="contentText"></uni-load-more>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '首页',
				contentText: {
					contentdown: "上拉加载更多",
					contentrefresh: "加载中...",
					contentnomore: "没有更多数据了"
				},
				status: "no=more",
			}
		},
		onLoad() {
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

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.swiper {
		min-height: 464rpx;
		width: 750rpx;
		// width:100%;
		margin-bottom: 27rpx;
		display: flex;

		.item {
			width: 100%;
			position: relative;
		}

		.banner {
			width: 100%;
			height: 100%;
		}
	}

	.goods-list {
		// width: 678rpx;
		// margin: 0 auto;
		padding: 0 30rpx;
		width: 100%;
	}

	.goods-item {
		background-color: #fff;
		margin-bottom: 20rpx;
		border-radius: 10rpx;

		.goods-img {
			width: 100%;
			// height: 541rpx;
			position: relative;
			border-top-left-radius: 10rpx;
			border-top-right-radius: 10rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.countdown {
			position: absolute;
			top: 25rpx;
			left: 30rpx;
			color: #fff;
			font-size: 24rpx;
			background-color: rgba(0, 0, 0, 0.7);
			padding: 10rpx 15rpx;
		}

		.good-info {
			padding: 20rpx 30rpx;
		}

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 15rpx;

			.t-left {
				font-size: 36rpx;
				color: #000;
			}

			.t-right {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.heart {
					margin-right: 10rpx;
				}

				text {
					font-size: 26rpx;
					color: #333;
				}
			}

		}

		.stock {
			font-size: 24rpx;
			color: #999;
			margin-bottom: 15rpx;

			text {
				margin-right: 25rpx;
				padding-right: 10rpx;
			}

			label {
				color: #5d5d5d;
				padding: 0 10rpx;
			}
		}

		.user {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.u-left {
				image {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					margin-right: 15rpx;
					vertical-align: middle;
				}

				text {
					color: #000;
					font-size: 26rpx;
				}
			}

			.u-right {
				color: #bb3835;

				label {
					font-size: 24rpx;
				}

				.price {
					font-size: 38rpx;
					font-weight: 600;
				}
			}
		}

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
