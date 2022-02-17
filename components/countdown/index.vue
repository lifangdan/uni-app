<template>
	<view>
		<text>{{count}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			endTime: {
				type: String,
				default: "0"
			},
			isClear: { //是否清除定时器
				type: Boolean
			},
			id: {
				type: Number,
				default: null
			}
		},
		data() {
			return {
				timer: null,
				count: ''
			}
		},
		created() {
			if (this.timer) {
				clearInterval(this.timer);
				this.timer = null;
			}
			this.countDown(this.endTime)
		},
		beforeDestroy() {
			if (this.timer) {
				clearInterval(this.timer);
				this.timer = null;
			}
		},
		watch: {
			isClear(val) {
				if (val) {
					console.log('清除定时器了333333333')
					if (this.timer) {
						clearInterval(this.timer);
						this.timer = null;
					}
				}
			}
		},
		methods: {
			countDown(time) {
				let _this = this

				function runTime() {
					let nowtime = new Date(), //获取当前时间
						endtime = new Date(time); //定义结束时间
					let lefttime = endtime.getTime() - nowtime.getTime(); //距离结束时间的毫秒数
					if (lefttime > 0) {
						let leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
							lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24), //计算小时数
							leftm = Math.floor(lefttime / (1000 * 60) % 60), //计算分钟数
							lefts = Math.floor(lefttime / 1000 % 60); //计算秒数
						console.log(999999999)
						_this.count = '即将开售 剩余时间 ' + leftd + "天" + lefth + "小时" + leftm + "分" + lefts + '秒'
					} else {
						_this.count = ''
						clearInterval(_this.timer);
						_this.timer = null;
						_this.$emit('change', _this.id)
					}
				}

				runTime()
				this.timer = setInterval(() => {
					runTime()
				}, 1000)
			},
		}
	}
</script>

<style>
</style>
