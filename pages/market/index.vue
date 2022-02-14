<template>
	<view>
		<view class="goods-box">
			<view class="left-column column">
				<view class="goods-item" v-for="(item,index) in leftList" :key="index">
					<view class="goods-img">
						<image :src="item.img" mode="widthFix"></image>
					</view>
					<view class="good-info">
						<view class="title one-over">{{item.title}}</view>
						<view class="name">
							<image src="/static/logo.png" mode="widthFix"></image>
							<text>{{item.name}}</text>
						</view>
						<view class="price">
							<view class="p-left">
								<text class="">￥</text>{{item.price}}
							</view>
							<view class="p-right">
								<view class="heart">
									<uni-icons type="heart" size="20" color="#5ab56a"></uni-icons>
								</view>
								<text>333</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="right-column column">
				<view class="goods-item" v-for="(item,index) in rightList" :key="index">
					<view class="goods-img">
						<image :src="item.img" mode="widthFix"></image>
					</view>
					<view class="good-info">
						<view class="title one-over">{{item.title}}</view>
						<view class="name">
							<image src="/static/logo.png" mode="widthFix"></image>
							<text>{{item.name}}</text>
						</view>
						<view class="price">
							<view class="p-left">
								<text class="">￥</text>{{item.price}}
							</view>
							<view class="p-right">
								<view class="heart">
									<uni-icons type="heart-filled" size="20" color="#5ab56a"></uni-icons>
								</view>
								<text>253</text>
							</view>
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
				list: [{
						img: "/static/list_01.jpeg",
						title: '我是标题我是标题我是标题我是标题我是标题我是标题',
						name: '非洲猫1',
						price: 18
					},
					{
						img: "/static/list_02.jpeg",
						title: '我是标题',
						name: '非洲猫2',
						price: 18
					},
					{
						img: "/static/list_03.jpeg",
						title: '我是标题',
						name: '非洲猫3',
						price: 18
					},
					{
						img: "/static/list_04.jpeg",
						title: '我是标题',
						name: '非洲猫4',
						price: 18
					},
					{
						img: "/static/list_05.jpeg",
						title: '我是标题',
						name: '非洲猫5',
						price: 18
					},
					{
						img: "/static/list_06.jpeg",
						title: '我是标题',
						name: '非洲猫6',
						price: 18
					},
					{
						img: "/static/list_07.jpeg",
						title: '我是标题',
						name: '非洲猫7',
						price: 18
					},
					{
						img: "/static/list_05.jpeg",
						title: '我是标题',
						name: '非洲猫8',
						price: 18
					},
					{
						img: "/static/list_06.jpeg",
						title: '我是标题',
						name: '非洲猫9',
						price: 18
					},
					{
						img: "/static/list_07.jpeg",
						title: '我是标题',
						name: '非洲猫10',
						price: 18
					},
				],
				newList: [],
				leftList: [],
				rightList: [],
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "加载中...",
					contentnomore: "没有更多数据了"
				},
				status: 'loading',
				page: 1
			}
		},
		onLoad: function(options) {
			this.leftList = this.list.slice(0, 5)
			this.rightList = this.list.slice(5, 10)
		},
		onPullDownRefresh() {
			console.log('refresh');
			let _this = this
			this.page = 1
			setTimeout(function() {
				_this.reverse()
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//监听页面滑到底部
		onReachBottom(e) {
			console.log(222222)
			this.getData()
			console.log(this.leftList)
		},
		methods: {
			reverse() {
				this.list = this.list.reverse()
				this.leftList = this.list.slice(0, 5)
				this.rightList = this.list.slice(5, 10)
			},
			clickLoadMore(e) {
				console.log(111111)
				console.log(e)
			},
			getData() {
				let _this = this
				console.log('this.page:' + this.page)
				if (this.page == 4) {
					this.status = 'no-more'
					return
				}
				setTimeout(() => {
					_this.leftList = _this.leftList.concat(_this.list.slice(0, 5))
					_this.rightList = _this.rightList.concat(_this.list.slice(5, 10))
					this.page++
				}, 500)
			}
		}
	}
</script>

<style lang="scss">
	.goods-box {
		display: flex;
		flex-flow: column wrap;
		column-count: 2;
		column-gap: 10px;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 0 10px;
	}

	.column {
		display: flex;
		flex-direction: row;
		flex: 1;
		flex-direction: column;
		height: auto;
		width: 50%;
	}

	.goods-item {
		/* margin: 10rpx;
		width: calc(100% / 2 - 20rpx);
		background-color: #f5f5f5;
		break-inside: avoid; */
		/* overflow: hidden; */
		margin-top: 10px;
		border-radius: 8px;
		overflow: hidden;
	}

	.goods-img {
		width: 100%;

	}

	.goods-img image {
		width: 100%;
		height: auto;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		vertical-align: middle;
	}

	.good-info {
		padding: 10px;
		font-size: 20rpx;
		background-color: #f5f5f5;

		.title {
			font-size: 28rpx;
		}

		.name {
			image {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				margin-right: 20rpx;
				vertical-align: middle;
			}

			text {
				color: #999999;
			}
		}

		.price {
			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.p-left {
			color: #bb3835;
			font-weight: 550;
			font-size: 38rpx;

			text {
				font-size: 24rpx;
			}
		}

		.p-right {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.heart {
				margin-right: 8rpx;
			}

			image {
				width: 28rpx;
			}

			text {
				font-size: 26rpx;
				color: #999999;
			}
		}
	}
</style>
