<template>
		<div class="main-container" :style="{height: height}">
				<Header/>
				<div class="page-one" :style="{height: height}">
						<div class="center-block">
								<div class="title">
										关于马桶MT
								</div>
								<div class="sub-title">
										马桶MT是一个人脉暗网，是朋友圈的影子，所有微信上看不到的听不到的，甚至是被删除的内容都可能出现在这里
								</div>
						</div>
				</div>
				<Footer class="new-footer" color="#fff"/>
		</div>
</template>

<script>
	import Footer from "./Footer";
	import Header from "./Header";
	
	export default {
		name: "Contact",
		components: {
			Footer,
			Header
		},
		data(){
			return{
				height:'',
				width:''
			}
		},
		created() {
			const width = document.documentElement.clientWidth || document.body.clientWidth;
			// const height = document.documentElement.clientHeight || document.body.clientHeight;
			document.documentElement.style.fontSize = `${(width * 100) / 1920}px`;
			this.width = `${width}px`;
			this.height = `${(width / 1920) * 1080}px`;
		}
	};
</script>

<style scoped>
		.main-container {
				background-color: #111;
				width: 100%;
				height: 100%;
				position: relative;
		}
		
		.page-one {
				background-image: url("https://cdn.api.wanzi.cn/weapp/icon/page1.png");
				background-size: 100% 100%;
				background-repeat: no-repeat;
				min-width: 100%;
				/* min-height: 100%; */
				position: relative;
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
		}
		
		.center-block {
				position: absolute;
				top: 35%;
				left: 55%;
		}
		
		.title {
				width: auto;
				height: 0.86rem;
				font-size: 0.61rem;
				font-family: PingFangSC-Regular,sans-serif;
				font-weight: 600;
				color: rgba(255, 255, 255, 1);
				line-height: 0.86rem;
		}
		
		.sub-title {
				width: 4.82rem;
				height: 0.99rem;
				font-size: 0.24rem;
				font-family: PingFangSC-Regular,sans-serif;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				line-height: 0.33rem;
				margin-top: 0.34rem;
		}
		
		.new-footer {
				position: absolute;
				bottom: 24px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff !important;
		}
		a:link,
		a:visited,
		a:hover,
		a:active {
				color: #fff;
		}
</style>
