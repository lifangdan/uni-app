<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/common.css';
	
	uni-view {
		box-sizing: border-box;
	}
	
	image {
		vertical-align: middle;
	}
	page{
		background-color: #EEEEEE;
	}
</style>
