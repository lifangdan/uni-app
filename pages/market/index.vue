<template>
	<view>
		<view class="goods-box">
			<view id="left" class="left-column column">
				<view class="goods-item" v-for="(item,index) in leftList" :key="index">
					<view class="goods-img">
						<image :src="item.img" mode="widthFix"></image>
					</view>
					<view class="good-info">
						<view class="title one-over">{{item.title}}</view>
						<view class="name">
							<uni-icons type="contact-filled" size="30" color="#2b9939"></uni-icons>
							<!-- <image src="/static/logo.png" mode="widthFix"></image> -->
							<text class="user">{{item.name}}</text>
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
			<view id="right" class="right-column column">
				<view class="goods-item" v-for="(item,index) in rightList" :key="index">
					<view class="goods-img">
						<image :src="item.img" mode="widthFix"></image>
					</view>
					<view class="good-info">
						<view class="title one-over">{{item.title}}</view>
						<view class="name">
							<uni-icons type="contact-filled" size="30" color="#2b9939"></uni-icons>
							<text class="user">{{item.name}}</text>
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
						price: 1
					},
					{
						img: "/static/list_02.jpeg",
						title: '我是标题',
						name: '非洲猫2',
						price: 2
					},
					{
						img: "/static/list_03.jpeg",
						title: '我是标题',
						name: '非洲猫3',
						price: 3
					},
					{
						img: "/static/list_04.jpeg",
						title: '我是标题',
						name: '非洲猫4',
						price: 4
					},
					{
						img: "/static/list_05.jpeg",
						title: '我是标题',
						name: '非洲猫5',
						price: 5
					},
					{
						img: "/static/list_06.jpeg",
						title: '我是标题',
						name: '非洲猫6',
						price: 6
					},
					{
						img: "/static/list_07.jpeg",
						title: '我是标题',
						name: '非洲猫7',
						price: 7
					},
					{
						img: "/static/list_05.jpeg",
						title: '我是标题',
						name: '非洲猫8',
						price: 8
					},
					{
						img: "/static/list_06.jpeg",
						title: '我是标题',
						name: '非洲猫9',
						price: 9
					},
					{
						img: "/static/list_07.jpeg",
						title: '我是标题',
						name: '非洲猫10',
						price: 10
					},
				],
				wfList: [{
						img: "/static/list_04.jpeg",
						title: '我是标题我是标题我是标题我是标题我是标题我是标题',
						name: '非洲猫1',
						price: 1
					},
					{
						img: "/static/list_02.jpeg",
						title: '我是标题',
						name: '非洲猫2',
						price: 2
					},
					{
						img: "/static/list_03.jpeg",
						title: '我是标题',
						name: '非洲猫3',
						price: 3
					},
					{
						img: "/static/list_01.jpeg",
						title: '我是标题',
						name: '非洲猫4',
						price: 4
					},
					{
						img: "/static/list_05.jpeg",
						title: '我是标题',
						name: '非洲猫5',
						price: 5
					},
					{
						img: "/static/list_06.jpeg",
						title: '我是标题',
						name: '非洲猫6',
						price: 6
					},
					{
						img: "/static/list_07.jpeg",
						title: '我是标题',
						name: '非洲猫7',
						price: 7
					},
					{
						img: "/static/list_05.jpeg",
						title: '我是标题',
						name: '非洲猫8',
						price: 8
					},
					{
						img: "/static/list_06.jpeg",
						title: '我是标题',
						name: '非洲猫9',
						price: 9
					},
					{
						img: "/static/list_07.jpeg",
						title: '我是标题',
						name: '非洲猫10',
						price: 10
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
			}
		}
	}
</script>

<style lang="scss">
	.goods-box {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 0 6rpx;
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
		margin: 10rpx 6rpx;
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
		padding: 20rpx;
		font-size: 20rpx;
		background-color: #f5f5f5;

		.title {
			font-size: 32rpx;
			margin-bottom: 10rpx;
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
				vertical-align: middle;
			}
			.user{
				color: #999999;
				font-size: 24rpx;
				padding-left: 10rpx;
			}
		}

		.price {
			margin-top: 10rpx;
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
