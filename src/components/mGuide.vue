<template>
		<div class="guide-container" :style="{ width: width}">
				<div class="header-wrapper">
						<div class="logo">
								<img src="../assets/img/logo.png" alt>
						</div>
						<div class="navbar">
								<router-link to="/m" class="nav-item">首页</router-link>
								<div class="divide-line"/>
								<router-link to="/m" class="nav-item">下载</router-link>
								<div class="divide-line"/>
								<router-link to="/mabout" class="nav-item">关于马桶MT</router-link>
						</div>
				</div>
				<div class="guide-content-box">
						<div class="box-1">
								<span style="margin-bottom: 4px">苹果版MT下载方法与流程指引</span>
								<span>(下载入口在此页最下方)</span>
						</div>
						<div class="desc-1 flex-box">因苹果公司的政策原因,在IOS系统中首次安装企业版应用时会出现“未受信任的企业级开发者”提示</div>
						<img class="pic1" src="../assets/img/pic1.png" alt>
						<div class="box-2">
								<span >解决方法如下</span>
								<span>(以iOS11系统为例)</span>
						</div>
						<div class="desc-2 flex-box">
								<span class="tip-title title-desc">1.在手机中打开设置功能,选择“通用”</span>
								<img src="../assets/img/pic2.png" alt class="pic2">
						</div>
						<div class="desc-3 flex-box">
								<span class="tip-title title-desc">2.在通用中,选择“描述文件与设备管理”功能</span>
								<img src="../assets/img/pic3.png" alt="">
						</div>
						<div class="desc-4 flex-box">
								<span class="tip-title title-desc">3.在描述文件与设备管理中的企业级应用分类中,选择要安装的企业应用文件名字(与打开时提示一致),点击进入</span>
								<img src="../assets/img/pic4.png" alt="">
						</div>
						<div class="desc-5 flex-box">
								<span class="tip-title title-desc">4.进入企业签名页面后,确认企业签名中的公司名称与应用名称后,点击信任“企业签名公司名称”</span>
								<img src="../assets/img/pic5.png" class="pic3" alt="">
								<img src="../assets/img/pic6.png" class="pic4" alt="">
						</div>
						<div class="desc-6 flex-box">
								<span class="tip-title" style="width: 100%">5.回到桌面,重新打开应用即可使用</span>
						</div>
						<div class="bottom-btn-box">
								<img @click="downloadBtn" src="../assets/img/iphone.png" alt class="iphone">
								<span>苹果版MT下载入口</span>
						</div>
				</div>
		</div>
</template>

<script>
	export default {
		name: "mGuide",
		data() {
			return {
				width:''
			};
		},
		created() {
			const width = document.documentElement.clientWidth;
			this.width=width
			document.getElementsByTagName('html')[0].style.backgroundColor = '#000';
			if(width >= 737) {
				this.$router.replace('/');
			}
		},
		methods: {
			downloadBtn() {
				window.location.href = 'https://www.pgyer.com/0VfM'
			}
		}
	};
</script>


<style scoped>
		@import "../assets/css/mobile.css";
		
		.header-wrapper {
				background-color: #000;
		}
		
		.guide-container {
				background-color: #000;
				color: #fff;
				padding: 0;
				margin: 0;
				width: 100%;
				height: 100%;
				font-family: "Avenir", Helvetica, Arial, sans-serif;
		}
		
		.guide-content-box {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-top: 6.2rem;
				padding: 0 1.95rem;
				box-sizing: border-box;
		}
		
		.title-desc {
				width: 100%;
		}
		
		.box-1 {
				color: #fff;
		}
		
		.box-1 {
				font-size: 22px;
				font-weight: 800;
				color: rgba(255, 255, 255, 1);
				line-height: 30px;
				margin-bottom: 1.23rem;
				text-align: center;
				white-space: nowrap;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
		}
		
		
		.desc-1 {
				font-size:14px;
				font-weight:400;
				color:rgba(255,255,255,1);
				line-height:20px;
				margin-bottom: 1.23rem;
				width: 14.28rem;
		}
		
		.pic1 {
				width: 14.28rem;
				height: 9.11rem;
				margin-bottom: 3.53rem;
		}
		
		.box-2 {
				font-size:26px;
				font-weight:800;
				color:rgba(255,255,255,1);
				line-height:37px;
				margin-bottom: 1.74rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
		}
		
		.desc-2 .title-1 {
				width: 100%;
		}
		
		.pic2 {
				width: 15.31rem;
				height: 9.57rem;
				margin-bottom: 2.05rem;
		}
		
		.desc-3 img {
				width: 15.41rem;
				height: 5.07rem;
				margin-bottom: 2.05rem;
		}
		
		.desc-4 img {
				width: 15.31rem;
				height: 8.6rem;
				margin-bottom: 2.05rem;
		}
		
		.pic3 {
				width: 15.31rem;
				height: 11.47rem;
				margin-bottom: 1.18rem;
		}
		
		.pic4 {
				width: 15.31rem;
				height: 11.67rem;
				margin-bottom: 2.05rem;
		}
		
		.tip-title {
				font-size: 16px;
				font-weight: 800;
				color: rgba(255, 255, 255, 1);
				line-height: 22px;
				margin-bottom: 0.61rem;
				text-align: left;
		}
		
		.desc-6 {
				margin-bottom: 2.66rem;
				display: flex;
				justify-content: flex-start;
				width: 100%;
		}
		
		.flex-box {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
		}
		
		.bottom-btn-box {
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 2.66rem;
		}
		.bottom-btn-box span {
				font-size:14px;
				font-weight:800;
				color:rgba(255,255,255,1);
				line-height:20px;
		}
		.iphone {
				width: 11.47rem;
				height: 3.23rem;
				margin-bottom: 0.61rem;
		}
</style>