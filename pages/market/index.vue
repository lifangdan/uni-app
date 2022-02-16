<template>
	<view>
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
		<!-- 筛选 -->
		<view class="screen">
			<view class="item" @click="search(item.id)" v-for="item in screenList" :key="item.id"
				:class="{'active':active===item.id}">{{item.label}}</view>
			<!-- <view class="item active">时间</view>
			<view class="item">人气</view> -->
		</view>
		<!-- 商品列表 -->
		<view class="goods-box">
			<view id="left" class="left-column column">
				<view class="goods-item" v-for="(item,index) in leftList" :key="index">
					<view class="goods-img">
						<image :src="item.img" mode="widthFix"></image>
					</view>
					<view class="good-info">
						<view class="title one-over">{{item.title}}</view>
						<view class="name">
							<image src="/static/list_02.png"></image>
							<text>{{item.name}}</text>
						</view>
						<view class="price">
							<view class="p-left">
								<label>￥</label>
								<text>{{item.price}}</text>
							</view>
							<view class="p-right">
								<view class="heart">
									<uni-icons type="heart" size="20" color="#5ab56a"></uni-icons>
									<!-- <uni-icons type="heart" size="20" color="#b6b6b6"></uni-icons> -->
								</view>
								<text>{{item.heart}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view id="right" class="right-column column">
				<view class="goods-item" v-for="(item,index) in rightList" :key="index">
					<view class="goods-img">
						<image :src="item.img" mode="widthFix"></image>
					</view>
					<view class="good-info">
						<view class="title one-over">{{item.title}}</view>
						<view class="name">
							<image src="/static/list_06.png"></image>
							<text>{{item.name}}</text>
						</view>
						<view class="price">
							<view class="p-left">
								<label>￥</label>
								<text>{{item.price}}</text>
							</view>
							<view class="p-right">
								<view class="heart">
									<uni-icons type="heart-filled" size="20" color="#5ab56a"></uni-icons>
									<!-- <uni-icons type="heart" size="20" color="#b6b6b6"></uni-icons> -->
								</view>
								<text>{{item.heart}}</text>
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
						img: "/static/list_01.png",
						title: '我是标题我是标题我是标题我是标题我是标题我是标题',
						name: '非洲猫1',
						price: 111,
						heart:12
					},
					{
						img: "/static/list_02.png",
						title: '我是标题',
						name: '非洲猫2',
						price: 223,
						heart:233
					},
					{
						img: "/static/list_03.png",
						title: '我是标题',
						name: '非洲猫3',
						price: 311,
						heart:124
					},
					{
						img: "/static/list_04.png",
						title: '我是标题',
						name: '非洲猫4',
						price: 1244,
						heart:455
					},
					{
						img: "/static/list_05.png",
						title: '我是标题',
						name: '非洲猫5',
						price: 155,
						heart:56
					},
					{
						img: "/static/list_06.png",
						title: '我是标题',
						name: '非洲猫6',
						price: 266,
						heart:78
					},
					{
						img: "/static/list_01.png",
						title: '我是标题',
						name: '非洲猫7',
						price: 7888,
						heart:127
					},
					{
						img: "/static/list_02.png",
						title: '我是标题',
						name: '非洲猫8',
						price: 8946,
						heart:899
					},
					{
						img: "/static/list_03.png",
						title: '我是标题',
						name: '非洲猫9',
						price: 9,
						heart:998
					},
					{
						img: "/static/list_04.png",
						title: '我是标题',
						name: '非洲猫10',
						price: 10,
						heart:1200
					},
				],
				wfList:  [{
						img: "/static/list_01.png",
						title: '我是标题我是标题我是标题我是标题我是标题我是标题',
						name: '非洲猫1',
						price: 111,
						heart:12
					},
					{
						img: "/static/list_02.png",
						title: '我是标题',
						name: '非洲猫2',
						price: 223,
						heart:233
					},
					{
						img: "/static/list_03.png",
						title: '我是标题',
						name: '非洲猫3',
						price: 311,
						heart:124
					},
					{
						img: "/static/list_04.png",
						title: '我是标题',
						name: '非洲猫4',
						price: 1244,
						heart:455
					},
					{
						img: "/static/list_05.png",
						title: '我是标题',
						name: '非洲猫5',
						price: 155,
						heart:56
					},
					{
						img: "/static/list_06.png",
						title: '我是标题',
						name: '非洲猫6',
						price: 266,
						heart:78
					},
					{
						img: "/static/list_01.png",
						title: '我是标题',
						name: '非洲猫7',
						price: 7888,
						heart:127
					},
					{
						img: "/static/list_02.png",
						title: '我是标题',
						name: '非洲猫8',
						price: 8946,
						heart:899
					},
					{
						img: "/static/list_03.png",
						title: '我是标题',
						name: '非洲猫9',
						price: 9,
						heart:998
					},
					{
						img: "/static/list_04.png",
						title: '我是标题',
						name: '非洲猫10',
						price: 10,
						heart:1200
					},
				],
				contentText: {
					contentdown: "上拉加载更多",
					contentrefresh: "加载中...",
					contentnomore: "没有更多数据了"
				},
				status: "loading",
				allList: [], // 全部列表
				leftList: [], // 左边列表
				rightList: [], // 右边列表
				mark: 0, // 列表标记
				boxHeight: [], // 下标0和1分别为左列和右列高度
				page: 1,
				updateNum: 10,
				active: null,
				screenList: [{
						label: '价格',
						id: 1,
					},
					{
						label: '时间',
						id: 2,
					},
					{
						label: '人气',
						id: 3,
					},
				]
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
				_this.refresh()
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//监听页面滑到底部
		onReachBottom(e) {
			let _this = this
			setTimeout(function() {
				_this.getData()
			}, 500);
		},
		watch: {
			// 监听列表数据变化
			wfList: {
				handler(nVal, oVal) {
					// 如果数据为空或新的列表数据少于旧的列表数据（通常为下拉刷新或切换排序或使用筛选器），初始化变量
					if (!this.wfList.length) {
						this.allList = [];
						this.leftList = [];
						this.rightList = [];
						this.boxHeight = [];
						this.status = "no-more"
						this.mark = 0;
					}

					// 如果列表有值，调用waterfall方法
					if (this.wfList.length) {
						// this.allList = this.wfList;
						console.log('当前mark的值：' + this.mark)
						if (this.mark < this.wfList.length) {
							this.waterFall()
						}
					}
				},
				immediate: true,
				deep: true
			},
			// 监听标记，当标记发生变化，则执行下一个item排序
			mark() {
				const len = this.wfList.length;
				if (this.mark < len && this.mark !== 0 && this.boxHeight.length) {
					this.waterFall();
				}
			}
		},
		methods: {
			// 瀑布流排序
			waterFall() {
				const i = this.mark;
				if (i == 0) {
					// 初始化，从左边开始插入
					this.leftList.push(this.wfList[i]);
					// 更新左边列表高度
					this.getViewHeight(0);
				} else if (i == 1) {
					// 第二个item插入，默认为右边插入
					this.rightList.push(this.wfList[i]);
					// 更新右边列表高度
					this.getViewHeight(1);
				} else {
					// 根据左右列表高度判断下一个item应该插入哪边
					if (!this.boxHeight.length) {
						this.rightList.length < this.leftList.length ?
							this.rightList.push(this.wfList[i]) :
							this.leftList.push(this.wfList[i]);
					} else {
						const leftOrRight = this.boxHeight[0] > this.boxHeight[1] ? 1 : 0;
						if (leftOrRight) {
							this.rightList.push(this.wfList[i])
						} else {
							this.leftList.push(this.wfList[i])
						}
						// 更新插入列表高度
						this.getViewHeight(leftOrRight);
					}
				}
			},
			// 获取列表高度
			getViewHeight(leftOrRight) {
				// 使用nextTick，确保页面更新结束后，再请求高度
				this.$nextTick(() => {
					setTimeout(() => {
						uni.createSelectorQuery().in(this).select('#right').boundingClientRect(res => {
							res ? this.boxHeight[1] = res.height : '';
							uni.createSelectorQuery().in(this).select('#left').boundingClientRect(
								res => {
									res ? this.boxHeight[0] = res.height : '';
									this.mark = this.mark + 1;
								}).exec();
						}).exec();
					}, 100)
				})
			},
			getData() {
				if (this.page > 3) {
					this.status = "no-more"
					return
				}
				this.wfList = this.wfList.concat(this.list)
				this.page++
			},
			refresh() {
				this.page = 1
				this.wfList = this.list
				this.status = "loading"
			},
			search(id) {
				this.active = id
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper {
		min-height: 464rpx;
		width: 750rpx;
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

	.screen {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		margin-bottom: 46rpx;

		.item {
			height: 88rpx;
			line-height: 88rpx;
			font-size: 30rpx;
			color: #969696;
			padding: 0 40rpx;
			// text-align: center;
		}

		.active {
			border-bottom: 6rpx solid #000;
			color: #000;
			font-weight: 550
		}

	}

	.goods-box {
		display: flex;
		// flex-flow: column wrap;
		// column-count: 2;
		// column-gap: 10px;
		flex-direction: row;
		align-items: flex-start;
		padding: 0 18rpx;

		.column {
			display: flex;
			flex-direction: row;
			flex: 1;
			flex-direction: column;
			height: auto;
			width: 50%;
		}

		.goods-item {
			margin: 0rpx 18rpx 18rpx 18rpx;
			border-radius: 10rpx;
			overflow: hidden;
		}

		.goods-img {
			width: 100%;
		}

		.goods-img image {
			width: 100%;
			height: auto;
			border-top-left-radius: 10rpx;
			border-top-right-radius: 10rpx;
			vertical-align: middle;
		}

		.good-info {
			padding: 20rpx 30rpx;
			background-color: #fff;

			.title {
				font-size: 36rpx;
				color: #000;
			}

			.name {
				margin: 20rpx 0;

				image {
					width: 50rpx;
					height: 50rpx;
					border-radius: 100%;
					margin-right: 13rpx;
					vertical-align: middle;
				}

				text {
					color: #000;
					font-size: 24rpx;
				}
			}

			.price {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.p-left {
				color: #bb3835;

				label {
					font-size: 24rpx;
				}

				text {
					font-size: 38rpx;
					font-weight: 600;
				}
			}

			.p-right {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.heart {
					margin-right: 10rpx;
				}

				image {
					width: 28rpx;
				}

				text {
					font-size: 26rpx;
					color: #333;
				}
			}
		}

	}
</style>
